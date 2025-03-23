import { APIProvider, Map, AdvancedMarker, useMapsLibrary } from '@vis.gl/react-google-maps';
import React, { useState, useEffect } from 'react';
import '../css/DuckMap.css';

function DuckMap({ markers }) {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID;

    return (
        <div className="duck-container">
        {<APIProvider apiKey={apiKey}>
            <Map
                style={{ width: '50vw', height: '100vh' }}
                defaultCenter={{ lat: 44.182205, lng: -84.506836 }}
                defaultZoom={7.5}
                mapId={mapId}  // Pass Map ID here
            >
            </Map>
        </APIProvider>}
        </div>
    )
}

export default DuckMap;
