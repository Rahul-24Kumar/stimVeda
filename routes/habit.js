const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitController = require('../controllers/habit');

router.post('/create', passport.checkAuthentication, habitController.create);

module.exports = router;