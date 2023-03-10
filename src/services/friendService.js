const { Friend , User } = require('../models/index');
const { Op } = require('sequelize');
const {FRIEND_ACCEPTED , FRIEND_STATUS_ANNONYMOUS, FRIEND_STATUS_ME, FRIEND_STATUS_FRIEND, FRIEND_STATUS_REQUESTER, FRIEND_STATUS_ACCEPTER} = require('../config/constants');



exports.findUserFriendsByUserId = async id => {
    const friends = await Friend.findAll({
        where : {status : FRIEND_ACCEPTED , 
                [Op.or] : [{ requesterId: id } , { accepterId : id}]
        } 
    });
    const friendIds =  friends.map(item => 
        item.requesterId === id ? item.accepterId : item.requesterId
    );

    return await User.findAll({
        where : { id : friendIds },
        attributes : { exclude : "password"}
    })

};


exports.findStatusWithMe = async (meId , userId) =>{

    if(meId === userId){
        return FRIEND_STATUS_ME
    };

    //select * from friends where (requester_id = meId and accepter_id = userId) or (requester_id = userId and accepter_id = neId)
    const friend = await Friend.findOne({
        where :{
            [Op.or] : [
                {requesterId : meId , accepterId :userId},
                {requesterId : userId , accepterId : meId}
            ]
        }
    });

    if(!friend){
        return FRIEND_STATUS_ANNONYMOUS;
    };

    if(friend.status === FRIEND_ACCEPTED){
        return FRIEND_STATUS_FRIEND;
    };

    if(friend.requesterId === meId){
        return FRIEND_STATUS_REQUESTER;
    };

    return FRIEND_STATUS_ACCEPTER

}