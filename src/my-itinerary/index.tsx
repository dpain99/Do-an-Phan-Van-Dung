import { Box, Button, Slide, Stack } from '@mui/material';
import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import MenuDistrict from './components/MenuDistrict';
import ChangeStyle from './components/change-style/ChangeStyle';
import ListLocationDistrict from './components/detailLocation/ListLocationDistrict';
import DirectionBox from './components/directions/DirectionBox';
import SearchBox from './components/search/SearchBox';
import './css/text-marker.css';
import districts from './data';
import locationsOnDistricts from './data/locations';
import { MyFeature } from './interface';
import {
  currentPoint,
  deleteDirection,
  deleteOneMarker,
  districtValue,
  oneMarker,
  route,
  searchResult,
  searchText,
  selectedDistrict,
  setClickShowMarker,
  setCurrentPoint,
  setOneMarker,
  setRoute,
  setSearchResult,
  setSelectedDistrict,
  setShowDirectionBox,
  setValueDistrict,
  showDirectionBox,
  styleMap
} from './slice';

export default function index() {
  const [map, setMap] = useState<Map | null>(null);
  const [hasDistrict, setHasDistrict] = useState<number[]>([]);
  const current = useSelector(currentPoint);
  const idDistrict = useSelector(districtValue);
  const idSelected = useSelector(selectedDistrict);
  const locationResultSearch = useSelector(searchResult);
  const showOneMarker = useSelector(oneMarker);
  const delOneMarker = useSelector(deleteOneMarker);
  const dataRoute = useSelector(route);
  const showDirection = useSelector(showDirectionBox);
  const delDirection = useSelector(deleteDirection);
  const mapStyle = useSelector(styleMap);
  const textSearch = useSelector(searchText);

  const [showStack, setShowStack] = useState(false);
  const [showLocationDistrict, setShowLocationDistrict] = useState(false);

  const handleButtonClick = () => {
    setShowStack(!showStack);
  };

  const handleDetailLocation = () => {
    setShowLocationDistrict(!showLocationDistrict);
  };

  const handleDirection = () => {
    dispatch(setShowDirectionBox(!showDirection));
  };

  // an/hien danh sach dia diem
  useEffect(() => {
    if (idSelected.length === 0) {
      setShowLocationDistrict(false);
    } else setShowLocationDistrict(true);
  }, [idSelected]);

  // lay vi tri hien tai
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          dispatch(setCurrentPoint([longitude, latitude]));
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // hien thi map
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
        zoom: 11,
        attributionControl: false
      });

      map.on('load', () => {
        setMap(map);
      });
    };

    if (!map) {
      const mapContainer = document.getElementById('map')!;
      initializeMap({ setMap, mapContainer: { current: mapContainer } });
    }
  }, [current]);

  // thay doi style cua map
  useEffect(() => {
    map?.setStyle(mapStyle);
  }, [mapStyle]);

  // hien thi layer cho tung quan
  useEffect(() => {
    districts.forEach((item) => {
      if (map?.getSource(item.src) === undefined) {
        map?.addSource(item.src, {
          type: 'geojson',
          data: item.value
        });
      }
    });

    locationsOnDistricts.map((item) => {
      if (map?.getSource(item.src) === undefined) {
        map?.addSource(item.src, {
          type: 'geojson',
          data: item.value
        });
      }
    });

    const pickedDistrict = districts.filter((value) => {
      return idSelected.includes(value.id);
    });

    const idPickedDistrict = pickedDistrict.map((item) => item.id);
    setHasDistrict(idPickedDistrict);

    pickedDistrict.map((data) => {
      if (hasDistrict.includes(data.id)) {
        console.log('da ton tai');
      } else {
        map?.addLayer({
          id: data.layer,
          type: 'line',
          source: data.src,
          paint: {
            'line-color': data.color,
            'line-width': 2
            // 'fill-opacity': 0.4
          }
        });
        const centerZoom = data.value.features[0].properties.center;
        map?.flyTo({ center: centerZoom, zoom: 12 });
      }
    });

    const unPickedDistrict = districts.filter((value) => {
      return !idSelected.includes(value.id);
    });
    const idUnPickedDistrict = unPickedDistrict.map((item) => item.id);

    unPickedDistrict.map((data) => {
      const layer = map?.getLayer(data.layer);
      if (layer) {
        map?.removeLayer(data.layer);
      }
    });
  }, [idDistrict]);

  // hien thi marker khi click vao ket qua tim kiem
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  useEffect(() => {
    if (map !== null) {
      if (markerRef.current) {
        markerRef.current.remove();
      }
      if (map?.getSource('search-text')) {
        map.removeLayer('search-text');
        map.removeSource('search-text');
      }
      if (locationResultSearch.length >= 2) {
        const marker = new mapboxgl.Marker()
          .setLngLat([locationResultSearch[0], locationResultSearch[1]])
          .addTo(map);
        map.flyTo({
          center: [locationResultSearch[0], locationResultSearch[1]],
          zoom: 13
        });

        markerRef.current = marker;

        map.addLayer({
          id: 'search-text',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [locationResultSearch[0], locationResultSearch[1]]
              },
              properties: {
                name: `${textSearch}`
              }
            }
          },
          layout: {
            'text-field': ['format', ['get', 'name'], { 'font-scale': 1 }],
            'text-size': 12,
            'text-offset': [0, 2]
          },
          paint: {
            'text-color': 'black'
          }
        });
      }
    }
  }, [locationResultSearch, map]);

  // show tat ca Marker
  // useEffect(() => {
  //   if (map !== null) {
  //     if (showMarkerLocation.length > 1) {
  //       showMarkerLocation.map((item) => {
  //         const marker = new mapboxgl.Marker()
  //           .setLngLat([item.coordinate[0], item.coordinate[1]])
  //           .addTo(map);

  //         const handleClickRemove = (popup: mapboxgl.Popup) => {
  //           marker.remove();
  //           popup.remove();
  //           const markerLabel = document.createElement('div');
  //           markerLabel.className = 'marker-label';
  //           markerLabel.textContent = item.name;

  //           const markerElement = marker.getElement();
  //           markerElement.appendChild(markerLabel);

  //           marker.getElement().addEventListener('click', () => {
  //             const popup = new mapboxgl.Popup({ closeOnClick: false })
  //               .setLngLat([item.coordinate[0], item.coordinate[1]])
  //               .setHTML(
  //                 `
  //                 <div>
  //                   <button id="button1">Xóa Marker</button>
  //                 </div>
  //               `
  //               )
  //               .addTo(map);
  //             const button1 = document.getElementById('button1');
  //             button1?.addEventListener('click', () => handleClickRemove(popup));
  //           });
  //         };
  //       });
  //     }
  //   }
  // }, [showMarkerLocation, map]);

  // hien thi layer direction
  useEffect(() => {
    if (dataRoute !== undefined) {
      if (map !== null) {
        if (dataRoute) {
          // map.on('click', 'current-point', function (e) {
          //   if (map.getSource('current-point')) {
          //     map.removeLayer('current-point');
          //     map.removeSource('current-point');
          //   }
          //   if (map.getSource('current-text')) {
          //     map.removeLayer('current-text');
          //     map.removeSource('current-text');
          //   }
          // });

          if (map?.getSource('route')) {
            map.removeLayer('route');
            map.removeSource('route');
          }

          if (map?.getSource('current-point')) {
            map.removeLayer('current-point');
            map.removeSource('current-point');
          }
          if (map?.getSource('current-text')) {
            map.removeLayer('current-text');
            map.removeSource('current-text');
          }

          map?.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: { name: 'direction' },
              geometry: {
                type: 'LineString',
                coordinates: dataRoute?.geometry?.coordinates
              }
            }
          });

          map?.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });

          map.addLayer({
            id: 'current-point',
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [
                    dataRoute?.geometry?.coordinates[0][0],
                    dataRoute?.geometry?.coordinates[0][1]
                  ]
                },
                properties: {
                  name: 'Bạn đang ở đây'
                }
              }
            },
            paint: {
              'circle-color': '#FFD166',
              'circle-radius': 10,
              'circle-stroke-color': '#EF476F',
              'circle-stroke-width': 2
            }
          });

          map.addLayer({
            id: 'current-text',
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [
                    dataRoute?.geometry?.coordinates[0][0],
                    dataRoute?.geometry?.coordinates[0][1]
                  ]
                },
                properties: {
                  name: 'Điểm bắt đầu'
                }
              }
            },
            layout: {
              // 'text-field': ['format', ['get', 'name'], { 'font-scale': 1 }],
              'text-size': 12,
              'text-offset': [0, 2]
            },
            paint: {
              'text-color': 'black'
            }
          });
        }

        const handleDeleteLayerAndSource = () => {
          if (map?.getLayer('route')) {
            map.removeLayer('route');
          }
          if (map?.getSource('route')) {
            map.removeSource('route');
          }

          if (map.getSource(`${showOneMarker.name}-background`)) {
            map.removeLayer(`${showOneMarker.name}-background`);
            map.removeSource(`${showOneMarker.name}-background`);
          }
          if (map.getSource(`${showOneMarker.name}-point`)) {
            map.removeLayer(`${showOneMarker.name}-point`);
            map.removeSource(`${showOneMarker.name}-point`);
          }
          if (map.getSource(`${showOneMarker.name}-text`)) {
            map.removeLayer(`${showOneMarker.name}-text`);
            map.removeSource(`${showOneMarker.name}-text`);
          }

          // markerCurrent.remove();
          dispatch(setRoute({}));
          dispatch(setShowDirectionBox(!showDirection));
        };
        const deleteButton = document.getElementById(delDirection);
        deleteButton?.addEventListener('click', handleDeleteLayerAndSource);
      }
    }
  }, [dataRoute]);

  // hien thi layer khi click tung diem
  useEffect(() => {
    if (map !== null) {
      if (showOneMarker.coordinate.length > 1) {
        /* Them layer khi click tung dia diem */
        const point: MyFeature = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [showOneMarker.coordinate[0], showOneMarker.coordinate[1]]
          },
          properties: {
            name: showOneMarker.name
          }
        };

        // map.addLayer({
        //   id: `${showOneMarker.name}-point`,
        //   type: 'circle',
        //   source: {
        //     type: 'geojson',
        //     data: point
        //   },
        //   paint: {
        //     'circle-color': 'black',
        //     'circle-radius': 9,
        //     'circle-stroke-color': 'white',
        //     'circle-stroke-width': 2
        //   }
        // });

        map.addLayer({
          id: `${showOneMarker.name}-background`,
          type: 'circle',
          source: {
            type: 'geojson',
            data: point
          },
          paint: {
            'circle-color': 'white',
            'circle-radius': 10,
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1
          }
        });

        map.addLayer({
          id: `${showOneMarker.name}-point`,
          type: 'circle',
          source: {
            type: 'geojson',
            data: point
          },
          paint: {
            'circle-color': 'black',
            'circle-radius': 8
          }
        });

        map.addLayer({
          id: `${showOneMarker.name}-text`,
          type: 'symbol',
          source: {
            type: 'geojson',
            data: point
          },
          layout: {
            'text-field': ['format', ['get', 'name'], { 'font-scale': 1 }],
            'text-size': 12,
            'text-offset': [0, 2]
          },
          paint: {
            'text-color': 'black',
            'text-halo-color': 'white',
            'text-halo-width': 0.5
          }
        });

        /* ----------------------------------------------------------------- */
      }
    }
  }, [showOneMarker]);

  // delete marker location
  useEffect(() => {
    if (map?.getSource(`${delOneMarker.name}-background`)) {
      map?.removeLayer(`${delOneMarker.name}-background`);
      map?.removeSource(`${delOneMarker.name}-background`);
    }
    if (map?.getSource(`${delOneMarker.name}-point`)) {
      map?.removeLayer(`${delOneMarker.name}-point`);
      map?.removeSource(`${delOneMarker.name}-point`);
    }
    if (map?.getSource(`${delOneMarker.name}-text`)) {
      map?.removeLayer(`${delOneMarker.name}-text`);
      map?.removeSource(`${delOneMarker.name}-text`);
    }
  }, [delOneMarker]);

  // giai phong bo nho khi unmount component
  useEffect(() => {
    return () => {
      dispatch(setValueDistrict([]));
      dispatch(setSelectedDistrict([]));
      dispatch(setSearchResult([]));
      dispatch(setClickShowMarker([]));
      // dispatch(setCurrentPoint([]));
      dispatch(setOneMarker({ coordinate: [], name: '' }));
      dispatch(setRoute({}));
      dispatch(setShowDirectionBox(false));
    };
  }, []);

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

        <Slide direction="right" in={showLocationDistrict}>
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

        <Slide direction="right" in={showDirection}>
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
            <DirectionBox />
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

        <Stack
          sx={{
            position: 'absolute',
            bottom: '5px',
            left: '380px',
            zIndex: 1000,
            width: '70px'
          }}
        >
          <ChangeStyle />
        </Stack>

        <Button
          onClick={handleDetailLocation}
          sx={{
            position: 'absolute',
            left: showLocationDistrict ? '380px' : '0px',
            top: '15%',
            transform: 'translateY(-50%)',
            zIndex: 500,
            transition: 'all 0.2s ease'
          }}
          size="small"
        >
          {showLocationDistrict ? (
            <Iconify
              sx={{ fontSize: '30px' }}
              icon="solar:double-alt-arrow-left-bold-duotone"
            />
          ) : (
            <Iconify
              sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
              icon="solar:double-alt-arrow-left-bold-duotone"
            />
          )}
        </Button>

        <Button
          onClick={handleDirection}
          sx={{
            position: 'absolute',
            left: showDirection ? '437px' : '0px',
            top: '20%',
            transform: 'translateY(-50%)',
            zIndex: 500,
            transition: 'all 0.2s ease'
          }}
          size="small"
        >
          {showDirection ? (
            <Iconify
              sx={{ fontSize: '30px' }}
              icon="solar:double-alt-arrow-left-bold-duotone"
            />
          ) : (
            <Iconify
              sx={{ fontSize: '30px', transform: 'rotate(180deg)' }}
              icon="solar:double-alt-arrow-left-bold-duotone"
            />
          )}
        </Button>
      </Box>
    </>
  );
}
