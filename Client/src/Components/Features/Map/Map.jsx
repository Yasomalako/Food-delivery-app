import { GoogleMap, CircleF, MarkerF } from "@react-google-maps/api"
import { useState, useRef, useMemo, useCallback } from "react";
import "./Map.css"
export default function Map() {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 31.768318, lng: 35.213711 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUi: true,
      clickableIcons: true,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  return (
    <div className="container">
      <div className="map">
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          <MarkerF
            position={{ lat: 31.768318, lng: 35.213711 }}
          ></MarkerF>
        </GoogleMap>
      </div>
    </div>

  )

}