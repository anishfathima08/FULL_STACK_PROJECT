const productModel = require('../models/productModel')

const addProduct = async (req, res) => {
    try{

        const productData = new productModel({
            name : req.body.name,
            category : req.body.category,
            desc : req.body.desc,
            price : req.body.price,
            img: req.body.img
        })

        await productData.save()
        res.status(200).send('Data Added')
    }
    catch(err){
        res.status(404).send(err)
    }
}

const getProduct = async (req, res) => {
    try{
        const productData = await productModel.find()
        res.status(200).send(productData)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const deleteProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send('Product Deleted !')
    }
    catch(err){
        res.status(404).send(err)
    }
}

const updateProduct = async (req, res) => {
    try{
        const updateProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.status(200).send(updateProduct)
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = { addProduct, getProduct, deleteProduct, updateProduct }