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
        firstName : {
            type: DataTypes.STRING
        }
    },
        {   underscored : true  }
    )
    return User; 
};
