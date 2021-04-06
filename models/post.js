// const { Model, DataTypes } = require('sequelize/types');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text_body: {
        type: DataTypes.STRING,
    },
    date_posted: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    });

module.exports = Post;