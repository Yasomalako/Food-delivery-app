import "./LandingPage.css";
import React, { useContext, useState } from "react";
import heroImge from '../deliveryguy.jpg'
import { ProductContext } from '../../Contextes/product-context'
import { UsersContext } from '../../Contextes/users-context'
import Map from "../../Features/Map/Map";
import MapHome from "../../Features/Map";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function LandingPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ,
    libraries: ["places"],
  });
  const { products, productsByCategory } = useContext(ProductContext)
  const { users, usersByCategory } = useContext(UsersContext)

  console.log(products)
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

  const backgroundImageStyle = {
    backgroundImage: `url("${heroImge}")`,
    backgroundSize: "cover",
  }
  if (!isLoaded) return <div>loading...</div>;
  return (
    <div className="pt-16 h-screen ">
      <div className=" overflow-hidden text-white" id="hero-image" style={backgroundImageStyle}>
        <div className=" px-10 py-16 bg-gradient-to-r from-black">
          <div className=" max-w-xl grid grid-cols-1 gap-9">
            <h2 className="text-xl uppercase font-bold">it's all about you</h2>
            <h1 className="text-6xl font-bold">
              sing up and get a free coupon!
            </h1>
            <p className="text-lg">
              The art of delivering is rooted in the service
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">your next fresh meal delivery,made possible by us </h2>
        </div>
        <div>
          {/* <div className="px-8 py-16">
            {!isLoaded ? <div>loading...</div> : <Map />}
          </div> */}
          <div>

            {users ? <section className="py-16 px-8 ">
              <div className="container mx-11 my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[300px] max-w-sm mx-auto md:max-w-none md:mx-0">
                  {filteredProductsByCategoryBreakfastAndDrinks?.map((product) => {
                    console.log(product.id)
                    return <div className="w-full h-[300px] bg-black mb-4" key={product.id}
                    >
                      {product.name.name}
                    </div>;
                  }
                  )}
                </div>
              </div>
            </section> : ""}
          </div>
        </div>

        
        <div className=" grid grid-cols-2  gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2"> Share what you love</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem ipsa quod rem aut laboriosam dolorum maiores?
              Recusandae natus laboriosam aliquam explicabo vel, asperiores veroin repellendus, veniam molestias fugit.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2"> host how you want to</h3>
            <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatibus quos consequuntur laudantium, harum obcaecati unde architecto eius
              omnis exercitationem veniam fugit possimus? Accusamus, ea quas harum in nisi accusantium.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage
