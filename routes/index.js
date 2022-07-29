const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/users/habit', require('./habit'));

//msg for successfully running routes in console
console.log("routes running");

module.exports = router;