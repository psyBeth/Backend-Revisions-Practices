'use strict'

const Department = require('../models/department');

module.exports = {

    list: async(req, res) => {
        const data = await res.getModelList(Department);
        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Department),
            data   // data: data
        });
    },

    create: async(req, res) => {
        const data = await Department.create(req.body);
        res.status(201).send({
            error: false,
            // body: req.body,
            data
        });
    },

    read: async(req, res) => {
        const data = await Department.findOne({_id: req.params.id});
        res.status(202).send({
            error: false,
            data
        });
    },

    update: async(req, res) => {
        const data = await Department.updateOne({_id: req.params.id}, req.body, {runValidators: true});
        const newdata = await Department.findOne({_id: req.params.id});
        res.status(203).send({
            error: false,
            data,
            newdata
        });
    },

    delete: async(req, res) => {
        const data = await Department.deleteOne({_id: req.params.id});
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    },

    //TODO: PERSONNELS / WILL BE HERE
};