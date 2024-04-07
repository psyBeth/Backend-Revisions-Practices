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
    // cookie session will be used

    login: async(req, res) => {
        const { email, password } = req.body;

        if( email && password ) {

            const user = await User.findOne({email: email});

            if( user && user.password == passwordEncrypt(password)) {

                // SESSIONS:
                req.session.email = user.email;
                req.session.password = user.password;

                // COOKIES:
                if(req.body.remindMe) {
                    req.session.remindMe = req.body.remindMe;
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3;     // set maxAge: 3 days
                };

                req.status(200).send({
                    error: false,
                    message: 'login ok.',
                    user: user
                });

            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong e-mail or password.')
            };

        } else {
            res.errorStatusCode = 401;
            throw new Error('E-mail and password are both required.')
        };
    },

    logout: async(req, res) =>{
        req.session = null;
        req.status(200).send({
            error: false,
            message: 'logout ok.'
        });
    }

};