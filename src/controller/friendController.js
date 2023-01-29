const { Op } = require('sequelize');
const { Friend } = require('../models/index')

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