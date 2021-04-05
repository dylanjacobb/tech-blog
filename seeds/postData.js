const { Post } = require('../models');

const postData = [
    {
        "title": "Why MVC is so important",
        "text_body": "MVC allows developers to maintain a true serperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
        "user_id": "1"
    },
    {
        "title": "Authentication vs. Authorization",
        "text_body": "There is a defference between authentication and authorization. Authentication means confirming your own identitiy, whereas authorization means being allowed to access the system.",
        "user_id": "2"
    },
    {
        "title": "Object-Relational-Mapping",
        "text_body": "I really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
        "user_id": "3"
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;