'use strict'

/*
    npm init -y
    npm i express dotenv express-async-errors
    npm i mongoose
*/

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




app.use(require('./src/middlewares/errorHandler'));

app.listen(PORT, () => console.log(`Server is running on -> http://${HOST}:${PORT}`));