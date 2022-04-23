const express = require('express');
const BookControlle= require('../../controllers/BookController');
const userRoutes = express.Router();

userRoutes.post('/',BookControlle.add);

module.exports = userRoutes;