'use strict'

const router = require('express').Router();

const { blogCategory, blogPost } = require('../controllers/blog');

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

router.route('posts')
    .get(blogPost.list)
    .post(blogPost.create)

router.route('/posts/:postId')
    .get(blogPost.read)
    .put(blogPost.update)
    .patch(blogPost.update)
    .delete(blogPost.delete)

module.exports = router;