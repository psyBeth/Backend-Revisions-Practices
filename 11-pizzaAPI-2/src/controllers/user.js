'use strict'

const User = require('../models/user');

module.exports = {

    list: async(req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       // only allow to see their own records:
       const customFilters = req.user?.isAdmin? {} : {_id: req.user._id};

       const data = await res.getModelList(User, customFilters);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User, customFilters),
            data
        });
    },

    create: async(req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
        */
        // admin/staff = false in new records
        req.body.isStaff = false;
        req.body.isAdmin = false;

        const data = await User.create(req.body);

        res.status(201).send({
            error: false,
            data
        });
    },

    read: async(req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

        const data = await User.findOne({_id:req.params.id});

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async(req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
        */

        const data = await User.updateOne({_id:req.params.id}, req.body, {runValidators: true});
        const newdata = await User.findOne({_id:req.params.id});

        res.status(202).send({
            error: false,
            data,
            newdata
        });
    },

    delete: async(req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        const data = await User.deleteOne({_id:req.params.id});

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        });
    }

};