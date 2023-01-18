const { sequelize, DataTypes } = require("sequelize");
const { FRIEND_ACCEPTED , FRIEND_PENDING } = require('../config/constants');

module.exports = (sequelize , DataTypes ) => {
    const Like = sequelize.define('Like',{
        status : {
            type : DataTypes.ENUM(FRIEND_ACCEPTED ,FRIEND_PENDING ),
            allownull : false ,
            defaultValue : FRIEND_PENDING
        }
    },
    { 
        underscored : true
    }
    )


    return Like;
};