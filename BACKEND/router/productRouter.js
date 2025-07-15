const express = require('express')
const router = express.Router() 

const { addProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController')

router.post('/add', addProduct)
router.get('/products', getProduct)
router.delete('/remove/:id', deleteProduct)
router.put('/update/:id', updateProduct)

module.exports = router