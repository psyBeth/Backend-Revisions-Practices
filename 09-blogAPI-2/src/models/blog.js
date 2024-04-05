'use strict'

const mongoose = require('mongoose');

//* BLOG CATEGORY

const blogCategorySchema = new mongoose.Schema({
    // _id
    name: {
        type: String,
        trim: true,
        required: true
    }
} , {
    collection: 'blogCategory',
    timestamps: true
});

//* BLOG POST

const blogPostSchema = new mongoose.Schema({
    // _id
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogCategory',
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    }
} , {
    collection: 'blogPost',
    timestamps: true
});


module.exports = {
    blogCategory: mongoose.model('blogCategory', blogCategorySchema),
    blogPost: mongoose.model('blogPost', blogPostSchema)
};