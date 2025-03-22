import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import Home from './routes/Home'
import Upload from './routes/Upload'
import './App.css'

function App() {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route index={true} path="/" element={<Home />} />
            <Route index={true} path="/upload-image" element={<Upload />} />
            {/* Redirect unknown routes to main page */}
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
        {/* <APIProvider apiKey={apiKey}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
                defaultZoom={10}
            >
                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
            </Map>
        </APIProvider> */}
        </>
    )
}

export default App