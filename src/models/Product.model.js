const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    imgurl: {
        type: String,
       
        unique: true
    },
    name:{
    type: String,
       
    },
    price: {
        type: String,

  
    },
    description: {
        type: String,

    },

}, { timestamps: true });

const Product = mongoose.model('Prod', ProdSchema);

module.exports = Product;
