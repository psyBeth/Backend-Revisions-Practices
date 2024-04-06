'use strict'

require('express-async-errors');

const User = require('../models/user');
const passwordEncrypt = require('../helpers/passwordEncrypt');

module.exports = {

    list: async(req, res) => {
        const data = await res.getModelList(User);
        res.status(200).send({
            error: false,
            data: data
        });
    },

    create: async(req, res) => {
        const data = await User.create(req.body);
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        });
    },

    read: async(req, res) => {
        const data = await User.find({_id: req.params.userId});
        res.status(202).send({
            error: false,
            data: data
        });
    },

    update: async(req, res) => {
        const data = await User.updateOne({_id: req.params.userId}, req.body);
        const newdata = await User.findOne({_id: req.params.userId});
        res.status(203).send({
            error: false,
            body: req.body,
            data: data,
            newdata: newdata
        });
    },

    delete: async(req, res) => {
        const data = await User.deleteOne({_id: req.params.userId});
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    },

    //? LOGIN & LOGOUT 

}