const mongoose = require('mongoose');

const savedItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        unique: true
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('SavedItem', savedItemSchema);