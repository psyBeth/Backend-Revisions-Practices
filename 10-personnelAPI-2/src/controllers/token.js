'use strict'

const Token = require('../models/token');

module.exports = {

    list: async(req, res) => {
        /*
            _swagger.deprecated = true
            #swagger.ignore = true
        */

        const data = await res.getModelList(Token);
        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Token),
            data
        });
    },

    create: async(req, res) => {
        /*
            _swagger.deprecated = true
            #swagger.ignore = true
        */

        const data = await Token.create(req.body);
        res.status(201).send({
            error: false,
            data
        });
    },

    read: async(req, res) => {
        /*
            _swagger.deprecated = true
            #swagger.ignore = true
        */

        const data = await Token.findOne({_id: req.params.id});
        res.status(202).send({
            error: false,
            data
        });
    },

    update: async(req, res) => {
        /*
            _swagger.deprecated = true
            #swagger.ignore = true
        */

        const data = await Token.updateOne({_id: req.params.id}, req.body, {runValidators: true});
        const newdata = await Token.findOne({_id: req.params.id});
        res.status(204).send({
            error: false,
            data,
            newdata
        });
    },

    delete: async(req, res) => {
        /*
            _swagger.deprecated = true
            #swagger.ignore = true
        */
       
        const data = await Token.deleteOne({_id: req.params.id});
        res.status(data.deletedCount? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    }

};