const { User } = require('../models');

const userData = [

    {
        "username": "bobby123",
        "email": "bobby@gmail.com",
        "password": "blue576"
    },
    {
        "username": "Leonardo421",
        "email": "leo@gmail.com",
        "password": "red894"
    },
    {
        "username": "Roronoa",
        "email": "roronoa@gmail.com",
        "password": "green323"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;