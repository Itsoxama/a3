const express = require('express');
const { createDietPlan, findDietPlan, getAll } = require('./diet.controller');
const { verifyToken, verifyTokenAndGetUser } = require('../utils/token');
const dietRouter = express.Router();

// POST endpoint to create diet plan
dietRouter.post('/api/diet/create',verifyTokenAndGetUser, createDietPlan);
dietRouter.get('/api/diet/getall', getAll);
dietRouter.post('/api/diet/find', verifyTokenAndGetUser,findDietPlan);

module.exports = dietRouter;
