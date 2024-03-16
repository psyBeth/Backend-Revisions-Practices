"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */
//* portable module 

// const express = require('express')
// const router = express.Router()
const router = require('express').Router()

// 3 URLs 3 methods
// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: req.params.id }))

// 1 URL multiple methods
//? router.route()
router.route('/')
    .get((req, res) => res.send({ message: "get" }))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" })) 
    //each one is a route

module.exports = router