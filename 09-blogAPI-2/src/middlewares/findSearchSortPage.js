'use strict'

// this might be needed --> https://www.mongodb.com/docs/manual/reference/operator/query/regex/

module.exports = (req, res, next) => {

    //* FILTER
    const filter = req.query?.filter || {};
    console.log(filter);

    //* SEARCHING
    const search = req.query?.search || {}
    // console.log(search);
    // { title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }

    //* SORTING



    //* PAGINATION


    //? details

    // next()
};