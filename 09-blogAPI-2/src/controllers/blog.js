'use strict'

require('express-async-errors');

const { blogCategory } = require('../models/blog');

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
        res.sendStatus((data.deletedCount>=1)? 204:404);
    }
};