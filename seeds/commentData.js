// TODO: seeds for comments
const { Comment } = require('../models');

const commentData = [
    {
        "comment": "I agree with what you're saying here",
        "user_id": "1",
        "post_id": "1"
    },
    {
        "comment": "I like what you're saying here",
        "user_id": "2",
        "post_id": "2"
    },
    {
        "comment": "I don't agree with what you're saying here",
        "user_id": "3",
        "post_id": "3"
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;