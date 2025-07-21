const express = require('express');
const { 
    
    getall
} = require('./order.controller'); // Import modified controller
const { verifyUserToken, verifyToken, verifyTokenAndGetUser } = require('../utils/token'); // Middleware for authentication
const { createOrder } = require('./order.controller');

const orderRouter = express.Router();

// 🔹 User Registration
orderRouter.post('/api/order/create',verifyTokenAndGetUser, createOrder);



orderRouter.post('/api/order/getall', getall);

module.exports = orderRouter;
