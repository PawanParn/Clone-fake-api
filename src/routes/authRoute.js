const express = require('express');

const authController = require('../controller/authController')

const router = express.Router();

const authenticate = require('../middlewares/authenticate')


router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me',authenticate  , authController.getMe)

module.exports = router ;