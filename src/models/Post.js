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
    )


    return Post;
};