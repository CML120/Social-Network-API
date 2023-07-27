// Import the 'express' module to create a router
const express = require('express');
// Create an instance of an Express router
const router = express.Router();
// Import the routes for thoughts and users
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

//Routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
