const {FRIEND_ACCEPTED ,FRIEND_PENDING} = require('../config/constants')
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //1,2,7,13,23

    return queryInterface.bulkInsert('friends',[
      {
        status : FRIEND_ACCEPTED ,
        created_at : new Date() ,
        updated_at : new Date() ,
        requester_id :  1,
        accepter_id : 23
      },
      {
        status : FRIEND_ACCEPTED ,
        created_at : new Date() ,
        updated_at : new Date() ,
        requester_id :  1,
        accepter_id : 2
      },
      {
        status : FRIEND_ACCEPTED ,
        created_at : new Date() ,
        updated_at : new Date() ,
        requester_id :  7,
        accepter_id : 23
      },
      {
        status : FRIEND_ACCEPTED ,
        created_at : new Date() ,
        updated_at : new Date() ,
        requester_id :  13,
        accepter_id : 23
      },
      {
        status : FRIEND_ACCEPTED ,
        created_at : new Date() ,
        updated_at : new Date() ,
        requester_id :  13,
        accepter_id : 7
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
