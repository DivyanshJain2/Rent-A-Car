const express = require('express');
const { 
    fetchcarController,
    
} = require('../../controllers/user/carController');
const userRoutes = express.Router();

userRoutes.get('/', fetchcarController);

module.exports = userRoutes;