import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactMapGL, { Map } from 'react-map-gl';
import { MapMarker } from './components';

export default function index() {
  return (
    <Box display="flex" justifyContent="center">
      <ReactMapGL
        initialViewState={{
          latitude: 21.02052848388505,
          longitude: 105.76393888360214,
          zoom: 16
        }}
        style={{ width: '80vw', height: '80vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGc5NWkzNTIxNDcxM3JxaTNwa3ZlYzlyIn0.dwjFzgl7WQKbd6rRab5IBg"
      >
        <MapMarker
          latitude={21.02052848388505}
          longitude={105.76393888360214}
        ></MapMarker>
      </ReactMapGL>
    </Box>
  );
}
