import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Box, Stack } from '@mui/material';
import mapboxgl, { LngLat, Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import ActionButton from './components/ActionButton';
import Travel from './components/actions/Travel';
import { useSelector } from 'react-redux';
import { selectLocations } from './slice';
import { ListTravelData } from './data/ListTravelData';
import { current } from '@reduxjs/toolkit';
import { map } from 'lodash';
import { dispatch } from 'src/common/redux/store';
import { setRoute } from 'src/feature-locations/slice';
import useDeepEffect from 'src/common/hooks/useDeepEffect';

export default function index() {
  const [map, setMap] = useState<Map | null>(null);
  const [destinations, setDestinations] = useState<LngLat[]>([]);
  const [current, setCurrent] = useState<number[]>([0, 0]);

  const selectedLocation = useSelector(selectLocations);

  const listCoordinate = selectedLocation
    .map((item) => {
      return ListTravelData.filter((value) => value.id === item);
    })
    .flat();

  console.log('listCoordinate', listCoordinate);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current !== null) {
      divRef.current.style.backgroundColor = 'red';
    }
  }, []);

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
        center: [current[0], current[1]],
        zoom: 12
      });

      //   const marker = new mapboxgl.Marker().setLngLat([current[0], current[1]]).addTo(map);
    };

    if (!map) {
      const mapContainer = document.getElementById('map')!;
      initializeMap({ setMap, mapContainer: { current: mapContainer } });
    }
  }, [current]);

  const { useDeepCompareEffect } = useDeepEffect();

  useDeepCompareEffect(() => {
    if (map !== null) {
      const marker = new mapboxgl.Marker().setLngLat([current[0], current[1]]).addTo(map);
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        alternatives: false,
        geometries: 'geojson',
        controls: { instructions: false },
        flyTo: false,
        language: 'vi',
        step: true
      });

      listCoordinate.map((item, index) => {
        const markerEl = document.createElement('div');
        markerEl.className = 'marker';
        markerEl.innerText = String(index + 1);
        markerEl.style.cssText = `
              background-color: red;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              border: 1px solid black;
              color: white;
              `;

        const coordinateMaker = new mapboxgl.Marker({
          element: markerEl
        })
          .setLngLat([item.coordinate[0], item.coordinate[1]])
          .addTo(map);
        if (index !== 0 && index !== listCoordinate.length - 1) {
          console.log('index', index);
          directions.addWaypoint(index, [item.coordinate[0], item.coordinate[1]]);
        } else null;

        map.addControl(directions, 'top-left');

        map.on('load', () => {
          setMap(map);
          directions.setOrigin([
            listCoordinate[0].coordinate[0],
            listCoordinate[0].coordinate[1]
          ]);
          directions.setDestination([
            listCoordinate[listCoordinate.length - 1].coordinate[0],
            listCoordinate[listCoordinate.length - 1].coordinate[1]
          ]);
        });
        directions.on('route', (event: any) => {
          const route = event.route[0];
        });
      });
    }
  }, [selectedLocation]);

  return (
    <>
      <Box
        id="map"
        style={{
          height: '99vh',
          width: '95vw',
          position: 'relative'
        }}
      >
        <Box sx={{ position: 'absolute', right: 10, bottom: 10, zIndex: 500 }}>
          <ActionButton />
        </Box>

        <Box>
          <Travel />
        </Box>
      </Box>
    </>
  );
}
