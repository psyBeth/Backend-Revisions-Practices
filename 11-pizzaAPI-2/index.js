'use strict'
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i swagger-autogen
    $ npm i swagger-ui-express
    $ npm i redoc-express
    $ nodemon
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

require('express-async-errors');

//? connect to DB:
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

//? accept JSON:
app.use(express.json());

//? LOGGER:
app.use(require('./src/middlewares/logger'));

//? AUTHENTICATION:
// app.use(require('./src/middlewares/authentication'));

//? FIND, SEARCH, SORT, PAGINATION:
app.use(require('./src/middlewares/queryHandler'));

//? ROUTES:
// app.use('/', require('./src/routes/'));
//homepath:
// app.all('/', (req, res) => {
//     res.send({
//         error: false,
//         message: 'Welcome to PIZZA API',
//         docs: {
//             swagger: "/documents/swagger",
//             redoc: "/documents/redoc",
//             json: "/documents/json",
//         },
//         user: req.user,
//     });
// });

//? ERRORHANDLER:
app.use(require('./src/middlewares/errorHandler'));

//? Run the server:
app.listen(PORT, () => console.log(`Server started at: https://${HOST}:${PORT}`));

//? syncronization:
// require('./src/helpers/sync')();