const Saved = require("../models/SavedItem");

exports.addSavedItem = async (req, res) => {
    const prodId = req.params.prodId;
    const userId = req.user.id
    console.log(userId);
    try {
        const cart = await Saved.findOneAndUpdate({
            userId: userId
        }, {
            $addToSet: {
                products: [prodId]
            }
        });
        console.log(cart)
        res.status(200).json({
            status: "success",
            message: "Product Successfully saved"
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not save product",
            message: err
        })
    }
}

exports.getMySavedProducts = async (req, res) => {
    const userId = req.user.id
    try {
        const savedProductsCart = await Saved.findOne({userId}).populate( {path: 'products' }) 
        const {products, ...others} = savedProductsCart;
        res.status(200).json({
            status: "success",
            data: {
                savedProducts: products
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get my saved product",
            message: err
        })
    }
}

exports.getAllSavedProductCart = async (req, res) => {
    try {
        const SAVED_CARTS = await Saved.find();
        res.status(200).json({
            status: "successful",
            data: {
                SAVED_CARTS
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summmary: "could not get all saved cart",
            message: err
        })
    }
}