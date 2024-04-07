'use strict'

// this might be needed --> https://www.mongodb.com/docs/manual/reference/operator/query/regex/

module.exports = (req, res, next) => {

    //* FILTER
    const filter = req.query?.filter || {};
    // console.log(filter);

    //* SEARCHING
    const search = req.query?.search || {};
    // console.log(search);
    // { title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }
    for (let key in search) {
        search[key] = { $regex: search[key], $options: 'i' };  //insensitive
    };

    //* SORTING
    const sort = req.query?.sort || {};

    //* PAGINATION

    // LIMIT:
    let limit = Number(req.query?.limit);
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE);
    // PAGE:
    let page = Number(req.query?.page);
    page = page > 0 ? (page - 1) : 1;
    // SKIP: 
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : (page * limit);

    res.getModelList = async function (Model, populate = null) {
        return data = await Model.find({ ...filter, ...search }).sort(sort).skip(10).limit(limit).populate('blogCategoryId');
    };

    //* DETAILS:
    res.getModelListDetails = async (Model) => {

        const data = await Model.find({ ...filter, ...search })

        let details = {
            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        };
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next);
        if (details.totalRecords <= limit) details.pages = false;
        return details;
    };

    next();
};