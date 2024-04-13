'use strict'

module.exports = async(req, res, next) => {
    const Personnel = require('./src/models/personnel');

    req.isLogin = false;

    if(req.session?.id){
        const user = await Personnel.findOne({ _id: req.session.id });
        req.isLogin = user && user.password == req.session.password
    };
    console.log('isLogin', req.isLogin);

    next();
};