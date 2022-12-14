const Products = require('../model/products-Modal')
// const main = require('../fakerData')


const getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).send({ data: products })
    } catch (err) {
        res.status(400).send({ error: err })
    }
}

const getProductByCategories = async (req, res) => {
    // main.main()
    try {
        const products = await Products.aggregate([
            { $match: {} },
            {
                $group: {
                    _id: '$category',
                    products: { $push: '$$ROOT' }
                }
            },
            { $project: { name: '$_id', products: 1, _id: 0 } }
        ])
        res.status(200).send({ data: products })
    } catch (err) {
        res.status(400).send({ error: err, message: "something went wrong" })
    }
}

module.exports = {
    getProducts,
    getProductByCategories
}