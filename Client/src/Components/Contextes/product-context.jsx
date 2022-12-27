import { createContext, useState, useEffect } from "react";
import { ProductService,GetProductsByCategory } from "../../services/products-services";

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        ProductService().then(result => {
            console.log(result);
            setProducts(result)
        })
        
    }, []);
    
    useEffect(() => {
        GetProductsByCategory().then(result => {
            console.log(result);
            setProductsByCategory(result)
        })
        
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts,productsByCategory,setProductsByCategory }}>
            {children}
        </ProductContext.Provider>
    )
}