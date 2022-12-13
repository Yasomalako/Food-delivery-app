const router = require('express').Router()
const {logIn,register}= require('../controllers/users-controller')

router.post('/logIn',logIn)
router.post('/userRegester',register)

module.exports = router