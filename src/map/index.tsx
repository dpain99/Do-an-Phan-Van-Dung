import React, { useState, useEffect } from 'react';
import mapboxgl, { LngLat, Map } from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Box } from '@mui/material';
import { Marker, MarkerProps } from 'react-map-gl';

export default function MapComponent() {
  const [map, setMap] = useState<Map | null>(null);
  const [destinations, setDestinations] = useState<LngLat[]>([]);
  const [current, setCurrent] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          setCurrent([longitude, latitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZHBhaW45OSIsImEiOiJjbGc5NWkzNTIxNDcxM3JxaTNwa3ZlYzlyIn0.dwjFzgl7WQKbd6rRab5IBg';

    const initializeMap = ({
      setMap,
      mapContainer
    }: {
      setMap: Function;
      mapContainer: any;
    }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [105.84334215287276, 21.003483752699598],
        zoom: 12
      });

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        alternatives: false,
        geometries: 'geojson',
        controls: { instructions: false },
        flyTo: false,
        language: 'vi',
        // destinations: destinations,
        step: true
      });

      map.on('click', (e) => {
        const newDestination = e.lngLat;
        setDestinations([...destinations, newDestination]);
      });

      directions.addWaypoint(0, [106.62964, 10.83122]);

      const marker = new mapboxgl.Marker()
        .setLngLat([105.84334215287276, 21.003483752699598])
        .addTo(map);

      map.addControl(directions, 'top-left');

      map.on('load', () => {
        setMap(map);
      });
      // directions.on('route', (event: any) => {
      //   const route = event.route[0];
      //   // console.log('route', route);
      //   const steps = route.legs[0].steps;
      //   // console.log('steps', steps);
      //   const duration = route.duration;
      //   const distance = route.distance;
      // });
    };

    if (!map) {
      const mapContainer = document.getElementById('map')!;
      initializeMap({ setMap, mapContainer: { current: mapContainer } });
    }
  }, [current]);

  // useEffect(() => {
  //   if (map && !marker) {
  //     const newMarker = new mapboxgl.Marker().setLngLat([106.6297, 10.8231]).addTo(map);
  //     setMarker(newMarker);
  //   }
  // }, [map, marker]);

  return <Box id="map" style={{ height: '100vh' }}></Box>;
}
