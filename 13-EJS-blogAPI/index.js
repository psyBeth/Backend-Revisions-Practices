"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000
/* ------------------------------------------------------- */
//* TEMPLATE

// default: open and close delimiter -> <% ... %>
// const ejs = require('ejs');
// ejs.delimiter = '#'   //!  <# ... #>
// ejs.openDelimiter = '{'  //!  {# ...#>
// ejs.closeDelimiter = '}'  //! {# ... #}

app.set('view engine', 'ejs');
app.set('view options', {
    // delimiter: '%',
    openDelimiter: '{',
    closeDelimiter: '}',
})
app.set('views', './public');

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session")
app.use(session({ secret: process.env.SECRET_KEY || 'secret_keys_for_cookies' }))
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// accept form-data:
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB with Mongoose:
require('./src/dbConnection')

// Searching&Sorting&Pagination:
app.use(require('./src/middlewares/findSearchSortPage'))

app.use((req, res, next) => {
    res.locals.user = req.session?.user;
    next();
});

// HomePage: deleted comments 
app.all('/', (req, res) => {
    res.redirect('/views/blog/post');
    // res.send('<h1>Welcome to Blog APP</h1>');
})

// VIEW Routes:
app.use('/', require('./src/routes/views/userRoute'))
app.use('/views/blog', require('./src/routes/views/blogRoute'))

// API Routes:
app.use('/api/user', require('./src/routes/api/userRoute'))
app.use('/api/blog', require('./src/routes/api/blogRoute'))

// StaticFiles:
app.use('/assets', express.static('./public/assets'));
// TinyMCE static files:
app.use('/tinymce', express.static('./node_modules/tinymce'));

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require('./src/errorHandler'));

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT));