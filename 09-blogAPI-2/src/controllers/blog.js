'use strict'

require('express-async-errors');

const { blogCategory, blogPost } = require('../models/blog');

module.exports.blogCategory = {
    list: async(req, res) => {
        const data = await res.getModelList(blogCategory);
        res.status(200).send({
            error: false,
            details: await res.getModelList(blogCategory),
            data: data
        });
    },

    create: async(req, res) => {
        const data = await blogCategory.create(req.body);
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        });
    },

    read: async(req, res) => {
        const data = await blogCategory.find({_id: req.params.categoryId});
        res.status(202).send({
            error: false,
            data: data
        });
    },

    update: async(req, res) => {
        const data = await blogCategory.updateOne({_id: req.params.categoryId}, req.body);
        const newdata = await blogCategory.updateOne({_id: req.params.categoryId}, req.body);
        res.status(203).send({
            error: false,
            body: req.body,
            data: data,
            newdata: newdata
        });
    },

    delete: async(req, res) => {
        const data = await blogCategory.deleteOne({_id: req.params.categoryId});
        // console.log(data);
        res.sendStatus((data.deletedCount>=1)? 204 : 404);
    }
};

module.exports.blogPost = {
    //TODO: filtering, searching, sorting, pagination will be here -- or in a seperate file
    //! DON'T FORGETTTT!!!!

    list: async(req, res) => {
        const data = await res.getModelList(blogPost, 'blogCategoryId');
        res.status(200).send({
            error: false,
            details: await res.getModelList(blogPost),
            data: data
        });
    },

    create: async(req, res) => {
        const data = await blogPost.create(req.body);
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        });
    },

    read: async(req, res) => {
        const data = await blogPost.find({_id: req.params.postId});
        res.status(202).send({
            error: false,
            data: data
        });
    },

    update: async(req, res) => {
        const data = await blogPost.updateOne({_id: req.params.postId}, req.body);
        const newdata = await blogPost.find({_id: req.params.postId});
        res.status(203).send({
            error: false,
            body: req.body,
            data: data,
            newdata: newdata
        })
    },

    delete: async(req, res) => {
        const data = await blogPost.deleteOne({_id: req.param.postId});
        res.sendStatus((data.deletedCount >= 1)? 204 : 404)
    }
};