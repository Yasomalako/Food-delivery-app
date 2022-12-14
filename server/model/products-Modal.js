const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true }

    },
    {
        timestamps: true
        ,
    })

const ProductsSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        adjective: { type: String, require: true },
        description: { type: String, require: true },
        price: { type: String, require: true },
        category: { type: String, require: true },
    },
    {
        timestamps: true
        ,
    })

module.exports = mongoose.model("products", ProductsSchema)
