'use strict'
//! SWAGGER WILL ALSO BE ADDED

const Personnel = require('../models/personnel');

module.exports = {

    list: async(req, res) => {
        const data = await res.getModelList(Personnel, {}, 'departmentId');
        res.status(200).send({
            error: false,
            detail: await res.getModelList(Personnel),
            data
        });
    },

    create: async(req, res) => {
        //TODO: isLead control will be here

        const data = await Personnel.create(req.body);
        res.status(201).send({
            error: false,
            data
        });
    },

    read: async(req, res) => {
        const data = await Personnel.findOne({_id: req.params.id});
        res.status(202).send({
            error: false,
            data
        });
    },

    update: async(req, res) => {
        //TODO: isLead control will be here

        const data = await Personnel.updateOne({_id: req.params.id}, req.body, {runValidators: true});
        const newdata = await Personnel.findOne({ _id: req.params.id });
        res.status(203).send({
            error: false,
            data,
            newdata
        });
    },

    delete: async(req, res) => {
        const data = await Personnel.deleteOne({_id: req.params.id});
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },

    //TODO: login logout will be here
};