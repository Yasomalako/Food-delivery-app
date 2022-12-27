import "./Products.css";
import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../Contextes/product-context";


function Products() {
  const { products, productsByCategory } = useContext(ProductContext)
  // console.log(products)
  // console.log(productsByCategory.data, 'kkkk')
  const filteredProductsByCategoryBreakfastAndDrinks = productsByCategory.data?.filter((item) => {
    return (item.name.name === "breakfast" || "drinks");
  })
  const filteredProductsByCategoryLunchAndDrinks = productsByCategory.data?.filter(item => {
    return (item.name.name === 'lunch', 'drinks')
  })
  const filteredProductsByCategoryDinnerAndDrinks = productsByCategory.data?.filter(item => {
    return (item.name.name === 'dinner', 'drinks')
  })
  const filteredProductsByCategoryDrinks = productsByCategory.data?.filter(item => {
    return (item.name.name === 'drinks')
  })
  // console.log(filteredProductsByCategoryBreakfastAndDrinks, "llllll")
  console.log(filteredProductsByCategoryLunchAndDrinks)
  // console.log(filteredProductsByCategoryDinnerAndDrinks)
  console.log(filteredProductsByCategoryDrinks)
  return (

    <div>
      <section className="py-16 ">
        <div className="container mx-auto my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[300px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProductsByCategoryBreakfastAndDrinks?.map((product) => {
              return <div key={product.id}>{product.name.name}</div>;
            }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
