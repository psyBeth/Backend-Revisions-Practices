'use strict'

const express= require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

require('./src/configs/dbConnection');

app.all('/', (req, res) => {
    res.send('wellcome, app is working')
});