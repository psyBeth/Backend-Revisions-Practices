'use strict'

//TODO: SWAGGER WILL ALSO BE ADDED HERE

const Personnel = require('../models/personnel');

const Token = require('../models/token');

const passwordEncrypt = require('../helpers/passwordEncrypt');

module.exports = {

    login: async (req, res) => {

        const { username, password } = req.body;

        if (username && password) {

            const user = await Personnel.findOne({ username, password });
            if (user && user.isActive) {
                /*  SESSION */
                /* TOKEN */
                // is there a token?
                let tokenData = await Token.findOne({ userId: user._id });

                // if there's no token, create it:
                if (!tokenData) {
                    const tokenKey = passwordEncrypt(user._id + Date.now());
                    // console.log(typeof tokenKey, tokenKey)
                    tokenData = await Token.create({ userId: user._id, token: tokenKey });
                };

                res.status(200).send({
                    error: false,
                    token: tokenData.token,
                    user
                });

            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong Username or Password.');
            }
        } else {
            res.errorStatusCode = 401;
            throw new Error('Please entry username and password.');
        };
    },

    logout: async (req, res) => {
        const auth = req.headers?.authorization || null; // Token ...tokenKey...
        const tokenKey = auth ? auth.split(' ') : null; // ['Token', '...tokenKey...']

        let deleted = null;

        if (tokenKey && tokenKey[0] == 'Token') {
            const deleted = await Token.deleteOne({ token: tokenKey[1] });
        };

        res.status(200).send({
            error: false,
            message: 'Logout: Token Deleted.',
            deleted
        });
    }

};