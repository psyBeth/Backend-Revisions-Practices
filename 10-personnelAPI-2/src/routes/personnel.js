'use strict'

const router = require('express').Router();

const personnel = require('../controllers/personnel');
const permissions = require('../middlewares/permissions');

// URL: /personnels

router.post('/login', personnel.login);
router.all('/logout', personnel.logout);

router.route('/')
    .get(permissions.isAdmin, personnel.list)
    .post(permissions.isAdmin, personnel.create)

router.route('/:id')
    .get(permissions.isAdminOrOwn, personnel.read)
    .put(permissions.isAdminOrOwn, personnel.update)
    .patch(permissions.isAdminOrOwn, personnel.update)
    .delete(permissions.isAdmin, personnel.delete)

module.exports = router;