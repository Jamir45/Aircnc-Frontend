import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {

   const containerStyle = {
      width: '100%',
      height: '85vh'
   };
   const position = {
      lat: 24.4768783,
      lng: 90.2932426
    };
   const onLoad = marker => {
   console.log('marker: ', marker)
   }


   return (
      <div>
         <LoadScript
            // AIzaSyDjvRB2R3fsmcsU_pXTHvhIKOTLyJ3OwNQ
            googleMapsApiKey="AIzaSyBb6wjKD210p0ORAaFyC1EBxF1yJrpLuzk"
         >
         <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={7}
            >
               <Marker
                  onLoad={onLoad}
                  position={position}
               />
            </GoogleMap>
         </LoadScript>
      </div>
    );
};

export default Map;