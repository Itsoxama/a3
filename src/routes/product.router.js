const express = require('express');
const { 
    
    getall
} = require('./product.controller'); // Import modified controller
const { verifyUserToken, verifyToken, verifyTokenAndGetUser } = require('../utils/token'); // Middleware for authentication
const { createProduct } = require('./product.controller');

const prodRouter = express.Router();

// 🔹 User Registration
prodRouter.post('/api/prod/create', createProduct

);



prodRouter.post('/api/prod/getall', getall);

module.exports = prodRouter;
