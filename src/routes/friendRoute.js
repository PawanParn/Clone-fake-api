
const express = require('express');

const friendController = require('../controller/friendController')

const router = express.Router();

router.delete('/:friendId',friendController.deleteFriend);

module.exports = router