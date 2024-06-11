const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
})

const Quote = new mongoose.model('Quote', quoteSchema);
module.exports = Quote;