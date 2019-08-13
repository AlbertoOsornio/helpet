const express = require('express')
const router = express.Router()

const UserController = require('../api/controllers/user_controller')

router.post('/login',UserController.authUser)

router.get('/getUsers',UserController.getUsers)

router.post('/register-user',UserController.create)

router.post('/register-user2',UserController.create2)

module.exports = router