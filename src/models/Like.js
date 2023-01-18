const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes ) => {
    const Like = sequelize.define('Like',{},
    { 
        underscored : true
    }
    );
    Like.associate = db => {
        Like.belongsTo(db.User, {
            foriegnKey : {
                name : 'userId',
                allownull : false
            },
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
        });

        Like.belongsTo(db.Post, {
            foriegnKey : {
                name : 'postId',
                allownull : false
            },
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
        });
    }


    return Like;
};