const { model, Schema } = require('mongoose');

const CommentSchema = new Schema({
    body: String,
    user_id: String,
    post_id: String,
});

module.exports = model('Comment', CommentSchema);