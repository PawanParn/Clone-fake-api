const cloudinary = require('../utils/cloundinary');
const { User } = require('../models/index');
const fs = require('fs')


exports.updateUser = async(req , res ,next ) => {
    try{

        const { password , ...updateValue } = req.body;

        

        if(req.files.profileImage){

            const dbProfileImage = req.user.profileImage ;

            const secureUrl = await cloudinary.upload(req.files.profileImage[0].path , dbProfileImage ? cloudinary.getPublicId(dbProfileImage) : null)
            updateValue.profileImage = secureUrl;
            fs.unlinkSync(req.files.profileImage[0].path)
        };
    


        if(req.files.coverImage){

            const dbCoverImage = req.user.coverImage ;

            const secureUrl = await cloudinary.upload(req.files.coverImage[0].path , dbCoverImage ? cloudinary.getPublicId(dbCoverImage) : null )
            updateValue.coverImage = secureUrl;
            fs.unlinkSync(req.files.coverImage[0].path)
        }



        await User.update(
            updateValue ,
            {where :  {id : req.user.id }} 
        );

        const updateU = await User.findOne({ where : { id : req.user.id } ,
            attributes :{exclude : 'password'} });

        res.status(200).json({user : updateU });
    }catch(err){
        next(err);
    }
};