'use strict'

const Token = require('../models/token');

module.exports = async(req, res, next) => {

    // Authorization: Token ...
    // Authorization: ApiKey ...
    // Authorization: X-API-KEY ...
    // Authorization: x-auth-token ...
    // Authorization: Bearer ...

    const auth = req.headers?.authorization || null;  // Token ....tokenKey...
    const tokenKey = auth ? auth.split(' ') : null;  //['Token', '...tokenKey...']  
    
    if(tokenKey && tokenKey[0]=='Token') {
        const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId');
        if(tokenData) req.user = tokenData.userId;
    };

    next();

};