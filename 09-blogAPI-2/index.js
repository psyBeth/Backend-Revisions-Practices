'use strict'

/*
    npm init -y
    npm i express dotenv express-async-errors
    npm i mongoose
    npm i cookie-session
*/

const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

require('./src/configs/dbConnection');

//? MIDDLEWARES
app.use(require('./src/middlewares/userControl'));
app.use(require('./src/middlewares/findSearchSortPage'));

app.all('/', (req, res) => {
    if (req.isLogin) {
        res.send({
            error: false,
            message: 'WELLCOME BLOG API PROJECT',
            session: req.session,
            user: req.user
        })
    } else {
        res.send({
            error: false,
            message: 'WELLCOME BLOG API PROJECT',
            session: req.session,
        })
    };
});

app.all('/', (req, res) => {
    res.send('wellcome, app is working')
});


//? ROUTES
app.use('/blog', require('./src/routes/blog'));
app.use('/user', require('./src/routes/user'));

//? ERROR HANDLER
app.use(require('./src/middlewares/errorHandler'));

app.listen(PORT, () => console.log(`Server is running on -> http://${HOST}:${PORT}`));