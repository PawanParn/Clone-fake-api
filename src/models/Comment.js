const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes ) => {
    const Comment = sequelize.define('Comment',{
        title : {
            type : DataTypes.STRING,
            allownull : false,
            validate : {
                notEmpty : true
            }
        }
    },
    { 
        underscored : true
    }
    );
    Comment.associate = db => {
        Comment.belongsTo(db.User, {
            foriegnKey : {
                name : 'userId',
                allownull : false
            },
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
        });

        
        Comment.belongsTo(db.Post, {
            foriegnKey : {
                name : 'postId',
                allownull : false
            },
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
        });
    }

    return Comment;
};