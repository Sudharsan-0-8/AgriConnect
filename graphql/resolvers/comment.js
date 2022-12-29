// const {  } = require('apollo-server');

const Comment = require('../../models/Comment.js');
const Post = require('../../models/Post.js');
const User = require('../../models/User.js');


module.exports = {
  Comment: {
    user: async function({ userId }, args) {
      const [user] = await User.find({ id: userId });

      if(!user){
        throw new Error('no such user');
      }
      return user;
    },
    post: async  function({ postId }, args) {
      const [post] = await Post.find({ id: postId });

      if(!post){
        throw new Error('no such post');
      }
      return post;
    }
  },
  Query: {
    
  },
  Mutation: {
    
  }
};