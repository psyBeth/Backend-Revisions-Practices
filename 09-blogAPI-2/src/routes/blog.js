'use strict'

const router = require('express').Router();

const { blogCategory } = require('../controllers/blog');
const blog = require('../models/blog');

//* BLOG CATEGORY

router.route('/categories')
    .get(blogCategory.list)
    .post(blogCategory.create)

router.route('/categories/:categoryId')
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

//* BLOG POST


module.exports = router;