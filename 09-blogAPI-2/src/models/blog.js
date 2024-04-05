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


module.exports = {
    blogCategory: mongoose.model('blogCategory', blogCategorySchema)
}