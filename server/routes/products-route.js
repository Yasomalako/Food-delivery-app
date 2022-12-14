const {getProducts,getProductByCategories} = require('../controllers/products-controller')
const router = require('express').Router()


router.get('/getProducts',getProducts)
router.get('/product-by-categories',getProductByCategories)

module.exports = router