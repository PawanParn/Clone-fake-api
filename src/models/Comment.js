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
    )


    return Post;
};