'use strict'

const User = require('../src/models/user');
const { blogCategory, blogPost } = require('../src/models/blog');

/* example data */

module.exports = async() => {

    // delete all previous records:
    await User.deleteMany().then(() => console.log(' - User Deleted All'));
    await blogCategory.deleteMany().then(() => console.log(' - BlogCategory Deleted All'));
    await blogPost.deleteMany().then(() => console.log(' - BlogPost Deleted All'));

    // example user:
    const user = await User.create({
        email: 'testing@test.com',
        password: '12345678',
        firstName: 'Test',
        lastName: 'Test'
    });

    // example category:
    const BlogCategory = await blogCategory.create({
        name: 'Testing category'
    });

    // example posts: with for loop
    for( let key in [...Array(200)]) {
        await blogPost.create({
            userId: user._id,
            blogCategoryId: BlogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key%2)
        });
    };

    // the end:
    console.log(' *** Synnronized *** ');
};