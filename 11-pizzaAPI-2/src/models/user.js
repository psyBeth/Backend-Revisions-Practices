'use strict'

const { mongoose } = require('../configs/dbConnection');

const passwordEncrypt = require('../helpers/passwordEncrypt');

const UserSchema = new mongoose.Schema({
    //_id

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    email: {

    },

    isActive: {

    },

    isAdmin: {

    }

} , {
    collection: 'users',
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);