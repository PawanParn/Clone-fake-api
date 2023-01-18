const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes) => {
    const User = sequelize.define('User' , {
        firstName : {
            type: DataTypes.STRING,
            allownull : false ,
            validate : {
                notEmpty : true
            }
        },
        lastName : {
            type: DataTypes.STRING,
            allownull : false ,
            validate : {
                notEmpty : true
            }
        },
        email : {
            type: DataTypes.STRING,
            unique : true,
            validate : {
                isEmail : true
            }
        },
        mobile : {
            type: DataTypes.STRING,
            unique : true ,
            validate : {
                notEmpty : true
            }
        },
        password : {
            type: DataTypes.STRING,
            allownull : false ,
            validate : {
                notEmpty : true
            }
        },
        profileImage : {
            type: DataTypes.STRING
        },
        coverImage : {
            type: DataTypes.STRING
        }
    },
        {   underscored : true  }
    );
    User.associate = db => {
        User.hasMany(db.Post , {
            foreignKey : {
                name : 'userId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        User.hasMany(db.Comment , {
            foreignKey : {
                name : 'userId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        User.hasMany(db.Like , {
            foreignKey : {
                name : 'userId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        User.hasMany(db.Friend , {
            as : 'Requester',
            foreignKey : {
                name : 'requesterId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });

        User.hasMany(db.Friend , {
            as : 'Accepter',
            foreignKey : {
                name : 'accepterId',
                allownull : false
            },
            onDelete : 'RESTRICT' ,
            onUpdate : 'RESTRICT'
        });
    }

    return User; 
};
