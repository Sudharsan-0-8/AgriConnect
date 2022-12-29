const { UserInputError, AuthenticationError } = require('apollo-server');

const Post = require('../../models/Post.js');
const User = require('../../models/User.js');
const Comment = require('../../models/Comment.js');

module.exports = {
  Post: {
    user: async function({ userId }, args) {
      console.log('user');
      const [user] = await User.find({ id: userId });

      if (!user) {
        throw new UserInputError('no such user');
      }

      return user;
    },
    comments: async function({ id }, args) {
      const comments = await Comment.find({ postId: id });

      return comments;
    }
  },
  Query: {
    allPosts: async function(parent, args) {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      }
      catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    addPost: async function(parent, { body, userId }) {

      const newPost = new Post({
        body,
        userId,
        createdAt: new Date().toISOString(),
        likes: [],
        likesCount: 0,
        comments: [],
        commentsCount: 0,
      })
      const res = await newPost.save();

      return {
        id: res._id,
        ...res._doc
      };
    }
  }
}