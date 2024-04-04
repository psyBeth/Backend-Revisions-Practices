'use strict'

const mongoose = require('mongoose');

const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB FAILED TO CONNECT", err))