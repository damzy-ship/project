const Product = require("../models/Product")


exports.aliasTopProducts = (req, res, next) => {
    //add the most -purchased product to the query.sort
    req.query.sort = '-price';
    req.query.limit = '5';
    req.query.fields = 'price';
    next();
};

exports.getAllProduct = async (req, res) => {
    
    try {
        const products = await Product.find();
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

exports.getProduct = async (req, res) => {
    const prodId = req.params.prodId
    try {
        const product = await Product.findById(prodId).populate({
            path: 'seller',
            select: '-__v -products -createdAt -updatedAt -isAdmin -role',
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

// exports.getAllSellerProducts = async (req, res) => {
//     const sellerId = req.user.id;
//     try {
//         const products = await Product.find({})
//     } catch (err) {
//         res.status(500).json({
//             status: "fail",
//             summmary: "could not get your products",
//             message: err
//         })
//     }
// }

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