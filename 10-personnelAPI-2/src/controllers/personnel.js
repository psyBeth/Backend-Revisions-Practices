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
        // isLead control:
        const isLead = req.body?.isLead || false;
        if(isLead) {
            const xyz = await Personnel.updateMany({departmentId: req.body.departmentId, isLead: true}, {isLead: false});
        };

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
        // isLead control:
        const isLead = req.body?.isLead || false;
        if(isLead) {
            const { departmentId } = await Personnel.findOne({_id: req.params.id}, {departmentId: 1});
            await Personnel.updateMany({ departmentId, isLead: true }, { isLead: false })
        };

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

    //? LOGIN & LOGOUT

    login: async(req, res) => {
        const { username, password } = req.body;

        if(username && password){

            const user = await Personnel.findOne({ username, password})
            
            if(user) {
                // set session
                req.session = {
                    id: user._id,
                    password: user.password
                };

                // set cookie
                if(req.body?.rememberMe){
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 days
                }

                res.status(200).send({
                    error: false,
                    user
                });

            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong username or password.');
            }

        } else {
            res.errorStatusCode = 401;
            throw new Error('Please enter username and password.')
        }

    },


    logout: async(req, res) => {
        // set session to null:
        req.session = null;
        res.status(200).send({
            error: false,
            message: 'LOGOUT: sessions deleted'
        });
    }
};