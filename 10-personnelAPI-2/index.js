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

// MIDDLEWARES:


// ROUTES:


// ERROR HANDLER:


//