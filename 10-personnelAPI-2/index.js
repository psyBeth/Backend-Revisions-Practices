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
app.use(require('./src/middlewares/loginControl'));

//? ROUTES:
// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PERSONNEL API',
        // session: req.session,
        // isLogin: req.isLogin,
        user: req.user
    });
});

app.use(require('./src/routes/'));

//? ERROR HANDLER:
app.use(require('./src/middlewares/errorHandler'));

//? RUN SERVER:
app.listen(PORT, () => console.log(`Server started at: https://${HOST}:${PORT}`));

//? SYNCRONIZATION:
// require('./src/helpers/sync')();