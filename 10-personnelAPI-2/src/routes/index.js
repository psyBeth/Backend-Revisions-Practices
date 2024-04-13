'use strict'

const router = require('express').Router();

// /auth:
router.use('/auth', require('../routes/auth'));

// /token:
router.use('/tokens', require('../routes/token'));

// /personnel:
router.use('/personnels', require('../routes/personnel'));

// /department:
router.use('/departments', require('../routes/department'));

module.exports = router;