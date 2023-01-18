const { sequelize, DataTypes } = require("sequelize");
const { FRIEND_ACCEPTED , FRIEND_PENDING } = require('../config/constants');

module.exports = (sequelize , DataTypes ) => {
    const Friend = sequelize.define('Friend',{
        status : {
            type : DataTypes.ENUM(FRIEND_ACCEPTED ,FRIEND_PENDING ),
            allownull : false ,
            defaultValue : FRIEND_PENDING
        }
    },
    { 
        underscored : true
    }
    );
    Friend.associate = db => {
        Friend.belongsTo(db.User, {
            as : 'Requester',
            foreignKey : {
                name : 'requesterId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        Friend.belongsTo(db.User, {
            as : 'Accepter',
            foreignKey : {
                name : 'accepterId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });
        
    }


    return Friend;
};