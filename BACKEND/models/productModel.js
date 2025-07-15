const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true 
    },
    desc : {
        type : String,
        required : true 
    },
    price : {
        type : Number,
        required : true
    }, 
    img : {
        type : String,
        requried : true
    }
})

const productModel = mongoose.model( 'product' , productSchema )

module.exports = productModel