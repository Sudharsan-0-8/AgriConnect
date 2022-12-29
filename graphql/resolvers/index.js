const register = require('./register.js');
const post = require('./post.js');

module.exports = {
    Query: {
        test: ()=>'Test',
        ...post.Query,
    },
    Mutation: {
        ...register.Mutation,
        ...post.Mutation,
    },
    Post: post.Post,
};