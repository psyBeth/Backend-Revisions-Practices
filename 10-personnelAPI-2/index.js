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

// CONFIGURATION DATABASE:
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

//? DOCUMENTATION:
//* https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

//JSON:
app.use('/documents/json', (req, res) => {
    res.sendFile('swagger.json', { root: '.' })
});
// check here:
// http://127.0.0.1:8000/documents/json
// if there's a problem here, redoc will not work

// SWAGGER:
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require("./swagger.json");
app.use('/documents/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, { swaggerOptions: { persistAuthorization: true } }));
// check here:
// http://127.0.0.1:8000/documents/swagger/

// REDOC:
const redoc = require('redoc-express');
app.use('/documents/redoc', redoc({
    title: 'PersonnelAPI',
    specUrl: '/documents/json'
}));
// check here: 
// http://127.0.0.1:8000/documents/redoc

//? MIDDLEWARES:
//  ACCEPT JSON:
app.use(express.json());

// LOGGING:
app.use(require('./src/middlewares/logging'));

// COOKIE-SESSIONS:
app.use(require('cookie-session')({ secret: process.env.SECRET_KEY }));

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'));

// AUTHENTICATION: (simple token)
app.use(require('./src/middlewares/authentication'));

//? ROUTES:
// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PERSONNEL API',
        // session: req.session,
        // isLogin: req.isLogin,
        user: req.user,
        api: {
            documents: {
                swagger: 'http://127.0.0.1:8000/documents/swagger',
                redoc: 'http://127.0.0.1:8000/documents/redoc',
                json: 'http://127.0.0.1:8000/documents/json',
            },
            contact: 'contact@clarusway.com'
        },
    });
});

app.use(require('./src/routes/'));

//? ERROR HANDLER:
app.use(require('./src/middlewares/errorHandler'));

//? RUN SERVER:
app.listen(PORT, () => console.log(`Server started at: https://${HOST}:${PORT}`));

//? SYNCRONIZATION:
// require('./src/helpers/sync')();