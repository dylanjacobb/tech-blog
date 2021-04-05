const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init({
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_posted: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id'
        },
    },
},
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    });

module.exports = Comment;