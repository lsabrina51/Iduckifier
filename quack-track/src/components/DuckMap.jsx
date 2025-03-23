import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import Home from '../routes/Home'
import Upload from '../routes/Upload'
import '../css/DuckMap.css'

function DuckMap() {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID;  // Access the Map ID from the environment variables


    return (
        <>
       
        {<APIProvider apiKey={apiKey}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 44.182205, lng: -84.506836 }}
                defaultZoom={7.5}
                mapId={mapId}  // Pass Map ID here
            >
            <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
            </Map>
        </APIProvider>}
        </>
    )
}

export default DuckMap

