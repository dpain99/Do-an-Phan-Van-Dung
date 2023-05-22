import { keyframes } from '@emotion/react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Box, Button, Slide, Stack } from '@mui/material';
import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuDistrict from './components/MenuDistrict';
import DetailLocation from './components/detailLocation/DetailLocation';
import ListLocationDistrict from './components/detailLocation/ListLocationDistrict';
import SearchBox from './components/search/SearchBox';
import districts from './data';
import locationsOnDistricts from './data/locations';
import { districtValue, searchResult, selectedDistrict } from './slice';
import Iconify from 'src/common/components/Iconify';

export default function index() {
  const [map, setMap] = useState<Map | null>(null);
  const [current, setCurrent] = useState<number[]>([0, 0]);
  const [hasDistrict, setHasDistrict] = useState<number[]>([]);
  const idDistrict = useSelector(districtValue);
  const idSelected = useSelector(selectedDistrict);
  const locationResultSearch = useSelector(searchResult);

  const [showStack, setShowStack] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showLocationDistrict, setShowLocationDistrict] = useState(false);
  const [buttonBottom, setButtonBottom] = useState(160);

  const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

  const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

  const handleButtonClick = () => {
    setShowStack(!showStack);
    setButtonBottom(showStack ? 0 : 160);
  };

  // lay vi tri hien tai
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

      // map.addControl(directions, 'top-left');

      map.on('load', () => {
        setMap(map);
        districts.map((item) => {
          map.addSource(item.src, {
            type: 'geojson',
            data: item.value
          });
        });

        locationsOnDistricts.map((item) => {
          map.addSource(item.src, {
            type: 'geojson',
            data: item.value
          });
        });
      });
    };

    if (!map) {
      const mapContainer = document.getElementById('map')!;
      initializeMap({ setMap, mapContainer: { current: mapContainer } });
    }
  }, [current]);

  useEffect(() => {
    const pickedDistrict = districts.filter((value) => {
      return idSelected.includes(value.id);
    });

    const idPickedDistrict = pickedDistrict.map((item) => item.id);
    setHasDistrict(idPickedDistrict);

    pickedDistrict.map((data) => {
      if (hasDistrict.includes(data.id)) {
        console.log('da ton tai');
      } else
        map?.addLayer({
          id: data.layer,
          type: 'fill',
          source: data.src,
          paint: {
            'fill-color': data.color,
            'fill-opacity': 0.5
          }
        });

      // su kien click vao layer
      map?.on('click', data.layer, function (e) {
        map.setCenter(e.lngLat);
        map.setZoom(13);
        locationsOnDistricts.map((value) => {
          map.addLayer({
            id: value.layer,
            type: 'circle',
            source: value.src,
            paint: {
              'circle-radius': 10,
              'circle-color': 'white'
            }
          });
          map.addLayer({
            id: `${value.layer}-name`,
            type: 'symbol',
            source: value.src,
            layout: {
              'text-field': ['format', ['get', 'name'], { 'font-scale': 1 }],
              'text-size': 12,
              'text-offset': [0, 2]
            },
            paint: {
              'text-color': 'white'
            }
          });
        });
      });
      // map?.on('mouseenter', data.layer, function () {
      //   <Typography>Hello</Typography>;
      // });
    });

    const unPickedDistrict = districts.filter((value) => {
      return !idSelected.includes(value.id);
    });
    const idUnPickedDistrict = unPickedDistrict.map((item) => item.id);

    unPickedDistrict.map((data) => {
      if (idUnPickedDistrict.includes(data.id)) {
        // remove district
        map?.removeLayer(data.layer);

        // remove location on district
        const unPickedLocation = locationsOnDistricts.filter(
          (item) => item.id === data.id
        );
        unPickedLocation.map((item) => {
          map?.removeLayer(item.layer);
          map?.removeLayer(`${item.layer}-name`);
        });
      } else {
        console.log('nothing');
      }
    });
  }, [idDistrict]);

  // hien thi marker khi click vao ket qua tim kiem
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  useEffect(() => {
    if (map !== null) {
      if (markerRef.current) {
        markerRef.current.remove(); // Xóa marker cũ
      }
      if (locationResultSearch.length >= 2) {
        const marker = new mapboxgl.Marker()
          .setLngLat([locationResultSearch[0], locationResultSearch[1]])
          .addTo(map);
        map.setCenter([locationResultSearch[0], locationResultSearch[1]]);
        map.setZoom(13);
        markerRef.current = marker;
      }
    }
  }, [locationResultSearch, map]);

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
        <Stack sx={{ position: 'absolute', left: 10, top: 10, zIndex: 1000 }}>
          <SearchBox />
        </Stack>

        <Slide direction="right" in={showDetail}>
          <Stack
            sx={{
              width: '400px',
              height: '100%',
              zIndex: 500,
              position: 'absolute',
              borderTop: 0,
              left: 0,
              right: 0,
              backgroundColor: 'white'
            }}
          >
            <DetailLocation />
          </Stack>
        </Slide>

        <Slide direction="right" in={idSelected.length > 0 ? true : false}>
          <Stack
            sx={{
              width: '400px',
              height: '100%',
              zIndex: 1001,
              position: 'absolute',
              borderTop: 0,
              left: 0,
              right: 0,
              backgroundColor: 'white'
            }}
          >
            <ListLocationDistrict />
          </Stack>
        </Slide>

        <Slide direction="up" in={showStack}>
          <Stack
            sx={{
              width: '100%',
              height: '25vh',
              alignSelf: 'bottom',
              zIndex: 1002,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'white',
              alignContent: 'center'
              // visibility: showStack ? 'visible' : 'hidden'
            }}
            direction="row"
            spacing={2}
          >
            <MenuDistrict />
          </Stack>
        </Slide>

        <Button
          onClick={handleButtonClick}
          sx={{
            position: 'absolute',
            bottom: showStack ? '160px' : '10px',
            right: 0,
            transform: 'translateX(-50%)',
            zIndex: 1000,
            transition: 'all 0.2s ease',
            backgroundColor: 'white',
            width: '70px'
          }}
          size="small"
          variant="outlined"
        >
          {showStack ? (
            <Iconify
              sx={{ fontSize: '30px' }}
              icon="solar:double-alt-arrow-down-bold-duotone"
            />
          ) : (
            <Iconify
              sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
              icon="solar:double-alt-arrow-down-bold-duotone"
            />
          )}
        </Button>

        {/* <Box
          sx={{
            position: 'absolute',
            right: 0,
            bottom: buttonBottom,
            zIndex: 1001
          }}
        >
          <Button variant="contained" onClick={handleButtonClick} style={{}}>
            {showStack ? 'Hide' : 'Show'} Menu
          </Button>
        </Box> */}
      </Box>
    </>
  );
}
