"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// //? "Router" is special app for URL control in ExpressJS.

// express.Router()
// const router = express.Router()

// 3 URLs 3 methods
// router.get('/', (req, res) => res.send({ message: "Home Area" }))
// router.get('/about', (req, res) => res.send({ message: "About Area" }))
// router.get('/user/:id', (req, res) => res.send({ message: req.params.id }))

// 1 URL multiple methods
// //? router.route()
// router.route('/')
//     .get((req, res) => res.send({ message: "get" }))
//     .post((req, res) => res.send({ message: "post" }))
//     .put((req, res) => res.send({ message: "put" }))
//     .delete((req, res) => res.send({ message: "delete" })) 
    //each one is a route

// //? After finished router-design, it will call with middleware:
// app.use(router)
/* ------------------------------------------------------- */

// const router = require('./routes/index')
// app.use(router)
app.use(require('./routes/')) //shortest

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));