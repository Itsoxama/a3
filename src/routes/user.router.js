const express = require('express');
const { 
    registerUser, 
    loginUser, 
    resetPassword, 
    verifyResetToken, 
    loginUserAsadmin,
    getuserinfo,
    getall
} = require('./user.controller'); // Import modified controller
const { verifyUserToken, verifyToken, verifyTokenAndGetUser } = require('../utils/token'); // Middleware for authentication

const userRouter = express.Router();

// 🔹 User Registration
userRouter.post('/api/user/register', registerUser);

// 🔹 User Login
userRouter.post('/api/user/login', loginUser);

userRouter.post('/api/user/getall', getall);

userRouter.post('/api/user/loginasadmin', loginUserAsadmin);

// 🔹 Password Reset Request (Sends Email)
userRouter.post('/api/user/reset-password', resetPassword);
userRouter.post('/api/user/verify', verifyToken);

userRouter.post('/api/user/getuserinfo',verifyTokenAndGetUser, getuserinfo);


// 🔹 Verify Reset Token & Change Password
userRouter.post('/api/user/verify-reset', verifyResetToken);

module.exports = userRouter;
