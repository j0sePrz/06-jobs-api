const Product = require('../models/products')
const {StatusCodes} =  require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllProducts = async (req, res) =>{
    res.send('get all products')
}

const getProduct = async (req, res) =>{
    res.send('get product')
}

const createProduct = async (req, res) =>{
    req.body.createdBy = req.user.userId
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}

const updateProduct = async (req, res) =>{
    res.send('update product')
}

const deleteProduct = async (req, res) =>{
    res.send('delete product')
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}