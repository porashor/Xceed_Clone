import React from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const ShareLoc = () => {
    const mapContainerStyle = {
        width: "100%",
        height: "400px",
      };
    const center = {
        lat: 23.8103, // Example: Latitude for Dhaka
        lng: 90.4125, // Example: Longitude for Dhaka
      };
  return (
    <div>
      this is shareloc
      <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
      </div>
    </div>
  )
}

export default ShareLoc
