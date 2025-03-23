import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 44.182205, // Default latitude
  lng: -84.506836 // Default longitude
};

function Mapping({ address, duckType }) {
  const [markerPosition, setMarkerPosition] = useState(center);

  useEffect(() => {
    if (address) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          setMarkerPosition(results[0].geometry.location);
        } else {
          console.error('Geocode failed:', status);
        }
      });
    }
  }, [address]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={10}
      >
        <Marker position={markerPosition} title={duckType || 'Duck Marker'} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Mapping;
