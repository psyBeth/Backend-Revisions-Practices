'use strict'

const router = require('express').Router();

// /auth:
router.use('/auth', require('../routes/auth'));

// /tokens:
router.use('/tokens', require('../routes/token'));

// /personnels:
router.use('/personnels', require('../routes/personnel'));

// /departments:
router.use('/departments', require('../routes/department'));

module.exports = router;