const mongoose = require('mongoose');
const validator = require('validator');
const cryptoJs = require("crypto-js");
const Saved = require("./SavedItem")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    role: {
        type: String,
        enum: ['user', 'seller'],
        default: 'user',
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    number: {
        type: Number,
        // requied: true
    },
    location: {
        type: String,
        // required: true
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
    }],
    photo: {
        type: String,
        default: 'default.jpg'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        // select: false,
        // select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!',
        },
        // select: false,
    },
}, {
    timestamps: true
});


userSchema.pre('save', function () {
    const encryptedPassword = cryptoJs.AES.encrypt(
        this.password,
        process.env.PASSWORD_SECRET
    ).toString();
    this.password = encryptedPassword;
    this.passwordConfirm = undefined;
});

userSchema.post('save', async function () {
    await Saved({
        userId: this._id
    }).save();
})

module.exports = mongoose.model('User', userSchema)