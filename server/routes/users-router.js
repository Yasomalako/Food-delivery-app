const router = require('express').Router()
const {logIn,register,getUsers}= require('../controllers/users-controller')

router.post('/logIn',logIn)
router.post('/userRegester',register)
router.get('/getUsers',getUsers)

module.exports = router