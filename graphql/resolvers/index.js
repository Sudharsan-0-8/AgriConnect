const register = require('./register.js');
const post = require('./post.js');
const comment = require('./comment.js');
const like = require('./like.js');
const user = require('./user.js');

module.exports = {
    Query: {
        test: ()=>'Test',
        ...post.Query,
        ...user.Query,
    },
    Mutation: {
        ...register.Mutation,
        ...post.Mutation,
        ...comment.Mutation,
        ...like.Mutation
    },
    Post: post.Post,
    Comment: comment.Comment,
    Like: like.Like
};