const mongoose = require("mongoose");
const User = require("./User");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: " "
    },
    categories: {
        type: [String],
        required: true,
    },
    minprice: String,
    maxprice: String,
    pricingType: {
        type: String,
        default: ""
    },
    quantity: Number,
    images: [String],
    imageURLS: [String],
    colors: [String],
    sizes: [String],
    soldout: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

productSchema.statics.updateSellerProduct = async function (sellerId, prodId) {
    try {
        await User.findByIdAndUpdate(sellerId, {
            $addToSet: {
                products: [prodId]
            }
        });
    } catch (err) {
        console.log(err)
    }

};

productSchema.post('save', function () {
    this.constructor.updateSellerProduct(this.seller, this._id);
});

module.exports = mongoose.model("Product", productSchema)