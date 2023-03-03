const multer = require('multer');
const sharp = require('sharp');
const Product = require('../models/Product');
const AppError = require('../utils/appError');
const fs = require('fs')
const firebase = require('../firebase');
const {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} = require("firebase/storage");
const {
    Users
} = require('../users');

global.XMLHttpRequest = require("xhr2");

// exports.aliasTopProducts = (req, res, next) => {
//     //add the most -purchased product to the query.sort
//     req.query.sort = '-price';
//     req.query.limit = '5';
//     req.query.fields = 'price';
//     next();
// };

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! please upload only images.', 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

exports.uploadProductImages = upload.fields([{
    name: 'images',
    maxCount: 5
}, ]);

exports.resizeProductImages = async (req, res, next) => {
    try {
        if (!req.files?.images) return next();
        req.body.imageURLS = [];
        await Promise.all(req.files.images.map(async (image, i) => {
            const productImageFilename = `product-${req.params.prodId}-${Date.now()}-${i + 1}.jpeg`;
            await sharp(image.buffer)
                .resize(400, 400)
                .toFormat('jpeg')
                .jpeg({
                    quality: 90
                })
                .toFile(`${productImageFilename}`);
            req.body.imageURLS.push(productImageFilename);
        }));
        next();
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "fail",
            summmary: "could not resize products image",
            message: err
        })
    }
};

exports.deployProductImages = async (req, res, next) => {
    try {
        if (!req.files?.images) return next();
        const storage = getStorage(firebase, process.env.BUCKET_URL);
        const metadata = {
            contentType: 'image/jpeg',
        };
        req.body.images = [];


        req.body.imageURLS.map((url, i) => {
            const imagesRef = ref(storage, `images/${url}`);
            fs.readFile(`${url}`, async (err, data) => {
                await uploadBytes(imagesRef, data, metadata).then((snapshot) => {});
                await getDownloadURL(imagesRef)
                    .then((downloadUrl) => {
                        req.body.images.push(downloadUrl);

                        next();
                    })
                    .catch((error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/object-not-found':
                                // File doesn't exist
                                break;
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                                // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect the server response
                                break;
                        }
                    });
            })
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "fail",
            summmary: "could not upload product images",
            message: err
        })
    }



}

exports.updateProduct = async (req, res) => {
    const prodId = req.params.prodId

    if (req.body.images) {
        fs.unlink(`${req.body.imageURLS[req.body.imageURLS.length - 1]}`, err => {
            if (err) {
                throw err
            }
            // console.log('File is deleted.')
        })
    }

    const {
        images,
        // imageURLS,
        ...others
    } = req.body

    try {
        await Product.findByIdAndUpdate(prodId, {
            $addToSet: {
                images: req.body.images,
                // imageURLS: req.body.imageURLS
            },
            ...others
        });
        res.status(200).json({
            status: "success",
            newImageUrl: req.body.images ? req.body.images : "",
            summary: "Product successfully updated",
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "fail",
            summmary: "could not update productimages ",
            message: err
        })
    }
};

exports.deleteProductImage = async (req, res) => {
    const prodId = req.params.prodId;
    // const storage = getStorage(firebase, process.env.BUCKET_URL);
    try {
        // const desertRef = ref(storage, `images/${req.body.imageURL}`);
        // await deleteObject(desertRef).then(() => {
        // }).catch((error) => {
        //     // Uh-oh, an error occurred!
        // })
        await Product.findByIdAndUpdate(prodId, {
            $pull: {
                images: req.body.image,
                // imageURLS: req.body.imageURL
            },
        });
        res.status(200).json({
            status: "success",
            summary: "Product image successfully deleted",
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "fail",
            summmary: "could not delete product images ",
            message: err
        })
    }
}

exports.getAllProduct = async (req, res) => {
    const category = req.query.category;
    let products;
    try {
        if (category === "all") {
            products = await Product.find();
        } else if (category) {
            products = await Product.find({
                categories: {
                    $in: [category]
                }
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json({
            status: "success",
            length: products.length,
            data: {
                products
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get products",
            message: err
        })
    }
}

exports.getTopProducts = async (req, res) => {
    try {
        topProducts = await Product.find().sort({_id: -1}).limit(10);
        res.status(200).json({
            status: "success",
            data: {
                topProducts
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get top products",
            message: err
        })
    }
}

exports.getProduct = async (req, res) => {
    const prodId = req.params.prodId
    try {
        const product = await Product.findById(prodId).populate({
            path: 'seller',
            select: '-__v -password -products -createdAt -updatedAt -isAdmin -role',
        });
        res.status(200).json({
            status: "success",
            data: {
                product
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get product",
            message: err
        })
    }
}

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json({
            status: "success",
            data: {
                product: savedProduct
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not create product",
            message: err
        })
    }
}

exports.getMyProducts = async (req, res) => {
    const sellerId = req.user.id;
    try {
        const products = await Product.find({
            seller: sellerId
        });
        res.status(200).json({
            status: "success",
            length: products.length,
            data: {
                products
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get your products",
            message: err
        })
    }
}

exports.postMyProduct = async (req, res) => {
    const sellerId = req.user.id;
    const newProduct = new Product({
        ...req.body,
        seller: sellerId
    });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json({
            status: "success",
            data: {
                product: savedProduct
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not post product",
            message: err
        })
    }


}

exports.searchProduct = async (req, res) => {
    const products = await Product.find();
    const {
        q
    } = req.query;

    const keys = ["title", "description"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase())) ||
            item.categories.includes(q.toLowerCase()) ||
            item.colors.includes(q.toLowerCase())
        );
    };
    try {

        const filteredProds = q ? search(products).slice(0, 10) : products.slice(0, 10);
        res.status(200).json({
            status: "success",
            length: products.length,
            data: {
                filteredProds
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get products",
            message: err
        })
    }
}
