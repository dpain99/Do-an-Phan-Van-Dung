import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Box, Button, Slide, Stack, Tooltip } from '@mui/material';
import mapboxgl, { LngLat, Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import { location, setLocation, setRoute } from '../slice';
import DetailDirection from './DetailDirection';
import './MapboxDirections.css';
import ShowListSelected from './ShowListSelected';
import { convertCoordinate } from '../utils/convertCoordinate';

export default function MapDirections() {
  const [map, setMap] = useState<Map | null>(null);
  const [destinations, setDestinations] = useState<LngLat[]>([]);
  const [current, setCurrent] = useState<number[]>([0, 0]);
  const [showTextDirection, setShowTextDirection] = useState<boolean>(false);
  const [showListLocation, setShowListLocation] = useState<boolean>(true);

  const handleToggleStack = () => {
    setShowTextDirection(!showTextDirection);
  };
  const handleToggleSelected = () => {
    setShowListLocation(!showListLocation);
  };
  const listLocation = useSelector(location);

  const listCoordinate = listLocation.map((item) => convertCoordinate(item));

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

      // directions.setOrigin([current[0], current[1]]);
      // directions.setDestination([105.83349154918317, 21.036051756957065]);
      // directions.setDestination([
      //   listCoordinate[listCoordinate.length - 1].coordinate[0],
      //   listCoordinate[listCoordinate.length - 1].coordinate[1]
      // ]); // lon2, lat2 là tọa độ điểm kết thúc

      // map.on('style.load', function () {
      //   map.on('click', function (e) {
      //     const coordinates = e.lngLat;
      //     // new mapboxgl.Popup()
      //     //   .setLngLat(coordinates)
      //     //   .setHTML('you clicked here: <br/>' + coordinates)
      //     //   .addTo(map);
      //     setDestinations([...destinations, coordinates]);
      //   });
      // });

      const marker = new mapboxgl.Marker().setLngLat([current[0], current[1]]).addTo(map);

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
      });

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
        dispatch(setRoute(route));
        setShowTextDirection(true);
      });
    };

    if (!map) {
      const mapContainer = document.getElementById('map')!;
      initializeMap({ setMap, mapContainer: { current: mapContainer } });
    }
  }, [current]);

  useEffect(() => {
    return () => {
      dispatch(setLocation([]));
      dispatch(setRoute({}));
    };
  }, []);

  return (
    <Box
      id="map"
      style={{
        height: '80vh',
        width: '100%',
        borderRadius: '5px',
        position: 'relative'
      }}
    >
      <Slide direction="right" in={showTextDirection}>
        <Stack
          sx={{
            position: 'absolute',
            left: 10,
            top: 50,
            zIndex: 1000,
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <DetailDirection />
        </Stack>
      </Slide>

      <Slide direction="left" in={showListLocation}>
        <Stack
          sx={{
            position: 'absolute',
            right: 10,
            top: 50,
            zIndex: 1000,
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <ShowListSelected />
        </Stack>
      </Slide>

      <Tooltip title="Đóng/mở chỉ dẫn đường">
        <Button
          onClick={handleToggleStack}
          sx={{
            position: 'absolute',
            left: showTextDirection ? '410px' : '0px',
            top: '13%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            transition: 'all 0.2s ease'
          }}
          size="small"
        >
          {showTextDirection ? (
            <Iconify
              sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
              icon="solar:double-alt-arrow-right-bold"
            />
          ) : (
            <Iconify sx={{ fontSize: '30px' }} icon="solar:double-alt-arrow-right-bold" />
          )}
        </Button>
      </Tooltip>

      <Tooltip title="Đóng/mở danh sách đã chọn">
        <Button
          onClick={handleToggleSelected}
          sx={{
            position: 'absolute',
            right: showListLocation ? '310px' : '0px',
            top: '13%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            transition: 'all 0.2s ease'
          }}
          size="small"
        >
          {showListLocation ? (
            <Iconify sx={{ fontSize: '30px' }} icon="solar:double-alt-arrow-right-bold" />
          ) : (
            <Iconify
              sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
              icon="solar:double-alt-arrow-right-bold"
            />
          )}
        </Button>
      </Tooltip>
    </Box>
  );
}
