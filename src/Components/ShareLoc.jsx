import React from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

var loc;
var loc1;

navigator.geolocation.getCurrentPosition(
    (position) => {
        loc =  position.coords.longitude;
        loc1 = position.coords.latitude;
    },
    (error) => console.error("Error fetching location:", error)
  );




const ShareLoc = () => {
    const mapContainerStyle = {
        width: "100%",
        height: "100vh",
      };
    const center = {
        lat: 22.33311, 
        lng: 91.81634, 
      };
  return (
    <div>
      <div>
      <LoadScript loadingElement={<div>Loading...</div>} >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      />
    </LoadScript>
      </div>
    </div>
  )
}

export default ShareLoc
