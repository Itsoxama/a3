const Order = require('../models/order.model'); // Import Order model
const sendEmail = require('../utils/sendEmail');
const { generateToken } = require('../utils/token'); // JWT Token function
const nodemailer = require('nodemailer'); // For sending emails

// 🔹 Order Registration
const createOrder = async (req, res) => {
    console.log(req.body)
    try {


        // Check if Order already exists
    
        const newOrder = new Order({...req.body,user:req.body.user.userId});
        await newOrder.save();
        return res.status(201).json({ message: 'Order registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getall = async (req, res) => {
    console.log(req.body)
    try {
  
        // Check if Order exists
        const Orders = await Order.find({ });
        if (!Orders) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
console.log(Orders)
  

        return res.status(200).json({ Orders });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Export Controllers
module.exports = {
    createOrder,
    getall
};
