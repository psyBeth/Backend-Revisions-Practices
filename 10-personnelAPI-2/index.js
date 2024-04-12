'use strict'

/*
    npm i express express-async-errors mongoose dotenv
    npm i cookie-session
    npm i jsonwebtoken
*/

const express = require('express');
const app = express();

require('dotenv').config();
const HOST = process.env?.HOST || 8000;
const PORT = process.env.PORT;

require('express-async-errors');

//? DOCUMENTATION:
//* https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express


// SWAGGER

// REDOC

// CONFIGURATION DATABASE:
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

//? MIDDLEWARES:

// JSON:
app.use(express.json());

// COOKIE-SESSIONS:
app.use(require('cookie-session')({secret: process.env.SECRET_KEY}));

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'));

// LOGIN & LOGOUT CONTROL:
app.use( async(req, res, next) => {
    const Personnel = require('./src/models/personnel');

    req.isLogin = false;

    if(req.session?.id){
        const user = await Personnel.findOne({ _id: req.session.id });
        req.isLogin = user && user.password == req.session.password
    };
    console.log('isLogin', req.isLogin);

    next();
});

//? ROUTES:
app.use('/departments', require('./src/routes/department'));
app.use('/personnels', require('./src/routes/personnel'));


//? ERROR HANDLER:
app.use(require('./src/middlewares/errorHandler'));

//? RUN SERVER:
app.listen(PORT, () => console.log(`Server started at: https://${HOST}:${PORT}`));

//? SYNCRONIZATION:
// require('./src/helpers/sync')();