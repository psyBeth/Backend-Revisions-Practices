'use strict'

const router = require('express').Router();

// URL: /

// auth:

// user:
router.use('/users', require('./user'));
// token:

// order:
router.use('/orders', require('./order'));
// pizza:

// toppings:

// document:



module.exports = router;