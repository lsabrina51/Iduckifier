import React from 'react';
import { LoadScript } from '@react-google-maps/api'; // Import LoadScript
import Mapping from '../components/Mapping';
import Header from "../components/Header.jsx";

const MappingPage = () => {
  const storedAddress = localStorage.getItem('address'); // retrieve the address from localStorage
  const storedDuckType = localStorage.getItem('duckType'); // retrieve the duck type from localStorage
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!storedAddress) {
    return <div>Error: Address not found!</div>; // You can return a fallback UI here
  }

  return (
    <div>
      <Header/>
      <LoadScript googleMapsApiKey={apiKey}>
        <Mapping address={storedAddress} duckType={storedDuckType} />
      </LoadScript>
    </div>
  );
};

export default MappingPage;

