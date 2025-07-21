const Product = require('../models/Product.model'); // Import Product model
const sendEmail = require('../utils/sendEmail');
const { generateToken } = require('../utils/token'); // JWT Token function
const nodemailer = require('nodemailer'); // For sending emails

// 🔹 Product Registration
const createProduct = async (req, res) => {
    console.log(req.body)
    try {
        const { name, price, description,imgurl } = req.body;

        // Check if Product already exists
    
        const newProduct = new Product({ name, price, description,imgurl });
        await newProduct.save();
        return res.status(201).json({ message: 'Product registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getall = async (req, res) => {
    console.log(req.body)
    try {
  
        // Check if Product exists
        const Products = await Product.find({ });
        if (!Products) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
console.log(Products)
  

        return res.status(200).json({ Products });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export Controllers
module.exports = {
    createProduct,
    getall
};
