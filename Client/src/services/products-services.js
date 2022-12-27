const productsApi = 'http://localhost:8000/api/products/getProducts'
const productByCategorysApi = 'http://localhost:8000/api/products//product-by-categories'

export const ProductService = async () => {

    try {
        return await fetch(productsApi)
        .then(res => res.json())
        // .then(result = console.log(result))
        
    } catch (err) {
        console.log(err);
    }
}
export const GetProductsByCategory = async () => {

    try {
        return await fetch(productByCategorysApi)
        .then(res => res.json())
        // .then(result = console.log(result))
        
    } catch (err) {
        console.log(err);
    }
}

