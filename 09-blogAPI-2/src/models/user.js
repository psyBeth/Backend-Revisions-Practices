'use strict'

const mongoose = require('mongoose');

const passwordEncrypt = require('../helpers/passwordEncrypt');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: [ true, 'E-mail is required.'],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Invalid e-mail format!'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    }, 

    firstName: String,

    lastName: String

} , {
    collection: 'user',
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);