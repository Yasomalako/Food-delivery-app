const { faker } = require('@faker-js/faker');
const MongoClint = require('mongodb').MongoClient;
const _ = require('lodash')

async function main() {
    const uri = 'mongodb+srv://yasomalako:0506522015@cluster0.nt0itcx.mongodb.net/delivery-app?retryWrites=true&w=majority'
    const client = new MongoClint(uri);

    try {
        await client.connect();
        const productsCollection = client.db("delivery-app").collection("products");
        const categoriesCollection = client.db("delivery-app").collection("categories");

        // productsCollection.drop();
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let products = [];
        for (let i = 0; i < 20; i++) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories)

            };
            products.push(newProduct)

        }
        await productsCollection.insertMany(products)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
module.exports = {
    main
}