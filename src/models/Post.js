const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes ) => {
    const Post = sequelize.define('Post',{
        title : {
            type : DataTypes.STRING
        },
        image : {
            type : DataTypes.STRING
        }
    },
    { 
        underscored : true
    }
    );
    Post.associate = db => {
        Post.belongsTo(db.User ,{
            foriegnKey : {
                name : 'userId',
                allownull : false
            },
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
        });

        Post.hasMany(db.Like , {
            foreignKey : {
                name : 'postId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        Post.hasMany(db.Comment , {
            foreignKey : {
                name : 'postId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });
    }


    return Post;
};