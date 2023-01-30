const { FRIEND_PENDING, FRIEND_ACCEPTED } = require('../config/constants') 

const { Op } = require('sequelize');
const { Friend } = require('../models/index');
const AppError = require('../utils/appError');

exports.deleteFriend = async (req , res , next) => {
    try{
        const { friendId } = req.params;
        //select * from friends where reuester_id = req.user.id and accepter_id = friendId Or reuester_id = friendId and accepter_id = req.user.id
        const friend = await Friend.findOne({ where : { [Op.or] : [
            { requesterId : req.user.id  , accepterId : friendId },
            { requesterId : friendId  , accepterId : req.user.id }
        ] }});
        
        await friend.destroy();
        
        res.status(204).json({ message : "Delete friend success" });

    } catch(err){
        next(err)
    }
};

exports.createFriend = async (req , res , next) => {
    try{
        const { friendId } = req.params;
        //select * from friends where reuester_id = req.user.id and accepter_id = friendId Or reuester_id = friendId and accepter_id = req.user.id
        const existFriend = await Friend.findOne({ where : { [Op.or] : [
            { requesterId : req.user.id  , accepterId : friendId },
            { requesterId : friendId  , accepterId : req.user.id }
        ] }});
        
        if(existFriend){
            throw new AppError('already add friend or pending', 400);
        }

        await Friend.create({
            status : FRIEND_PENDING,
            requesterId : req.user.id,
            accepterId : friendId
        })
    
        
        res.status(200).json({ message: 'success request friend' });

    } catch(err){
        next(err)
    }
};

exports.updateFriend = async (req , res , next) => {
    try{
        const { friendId } = req.params;
        // //select * from friends where reuester_id = req.user.id and accepter_id = friendId Or reuester_id = friendId and accepter_id = req.user.id
        // const friend = await Friend.findOne({ where : { [Op.or] : [
        //     { requesterId : req.user.id  , accepterId : friendId },
        //     { requesterId : friendId  , accepterId : req.user.id }
        // ] }});
        const waitfriend = await Friend.findOne({ where : { 
            status : FRIEND_PENDING ,requesterId : friendId , accepterId : req.user.id 
        }});
        
        if(!waitfriend){
            throw new AppError('already add friend or wrong friend request', 400);
        }


        await waitfriend.update({
            status : FRIEND_ACCEPTED
        });
        
        // res.status(204).json({ message : "Delete friend success" });
        res.status(200).json({ message: 'success update friend' });

    } catch(err){
        next(err)
    }
};