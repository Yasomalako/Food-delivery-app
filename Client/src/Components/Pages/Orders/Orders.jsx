import "./Orders.css";
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "../../Features/Map/Map";

function Orders() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDrwvoqJvHWLCBMtBJnwTP7B6rBzrjvHHc",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>loading...</div>;
  return (
    
      <div className="px-8 py-16">
        {!isLoaded ? <div>loading...</div> : <Map />}
      </div>
    
  );
};

export default Orders;
