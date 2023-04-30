const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide a name'],
        maxlength:50
    },
    description:{
        type:String,
        required:[true, 'please provide a description'],
        maxlength:100
    },
    price:{
        type:Number,
        required:[true, 'please provide a price']
    },
    status:{
        type:String,
        enum:['available', 'sold', 'sale pending'],
        defualt: 'available'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    }  
},{timestamps:true})

module.exports = mongoose.model('Product',ProductSchema)