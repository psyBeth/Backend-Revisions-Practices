'use strict'

const router = require('express').Router();

// URL: /

// auth:
router.use('/auth', require('./auth'));
// user:
router.use('/users', require('./user'));
// token:
router.use('/tokens', require('./token'));
// order:
router.use('/orders', require('./order'));
// pizza:

// toppings:

// document:



module.exports = router;