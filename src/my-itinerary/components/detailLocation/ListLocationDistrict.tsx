import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import { nameDistrict } from 'src/my-itinerary/constant';
import locationsOnDistricts from 'src/my-itinerary/data/locations';
import {
  clickShowMarker,
  selectedDistrict,
  setClickShowMarker,
  setDeleteOneMarker,
  setOneMarker,
  setShowDirectionBox
} from 'src/my-itinerary/slice';

export default function ListLocationDistrict() {
  const idDistrict = useSelector(selectedDistrict);
  const lastIdDistrict = idDistrict[idDistrict.length - 1];
  const showMarker = useSelector(clickShowMarker);
  const [arrMarker, setArrMarker] = useState<{ coordinate: number[]; name: string }[]>(
    []
  );

  const handleClickShowMarker = (value: number[], item: string) => {
    const newShowMarker = showMarker.filter((marker) => {
      return !(
        marker.coordinate[0] === value[0] &&
        marker.coordinate[1] === value[1] &&
        marker.name === item
      );
    });

    newShowMarker.push({ coordinate: value, name: item });
    const visitedMarkers = new Set<{ value: number[]; item: string }>();
    const isMarkerVisited = visitedMarkers.has({ value, item });
    if (!isMarkerVisited) {
      dispatch(setOneMarker({ coordinate: value, name: item }));
      visitedMarkers.add({ value, item });
    }

    dispatch(setOneMarker({ coordinate: value, name: item }));
  };

  const handleClickDeleteMarker = (value: number[], item: string) => {
    const newShowMarker = showMarker.filter((marker) => {
      return !(
        marker.coordinate[0] === value[0] &&
        marker.coordinate[1] === value[1] &&
        marker.name === item
      );
    });

    newShowMarker.push({ coordinate: value, name: item });
    const visitedMarkers = new Set<{ value: number[]; item: string }>();
    const isMarkerVisited = visitedMarkers.has({ value, item });
    if (!isMarkerVisited) {
      dispatch(setDeleteOneMarker({ coordinate: value, name: item }));
      visitedMarkers.add({ value, item });
    }

    dispatch(setDeleteOneMarker({ coordinate: value, name: item }));
  };

  const handleClickDirection = (value: number[], item: string) => {
    dispatch(setOneMarker({ coordinate: value, name: item }));
    dispatch(setShowDirectionBox(true));
  };

  const handleClickShowAll = () => {
    locationsOnDistricts
      .find((item) => item.id === idDistrict[0])
      ?.value.features.map((value) => {
        const locationOne = value.geometry.coordinates as unknown as number[];
        setArrMarker([
          ...arrMarker,
          { coordinate: locationOne, name: value.properties.name }
        ]);
      });
    dispatch(setClickShowMarker(arrMarker));
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: '400px',
          height: '100%',
          backgroundColor: 'white',
          overflowY: 'auto',
          whiteSpace: 'nowrap'
          //   alignItems: 'center'
        }}
      >
        <Typography
          sx={{ marginTop: 2, fontWeight: 600, fontSize: '20px', alignSelf: 'center' }}
        >
          Danh sách địa điểm ở{' '}
          {nameDistrict.find((item) => item.value === lastIdDistrict)?.label}
        </Typography>

        <Divider />

        {/* <Stack
          direction="row"
          spacing={4}
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify
              icon="mdi:map-marker-multiple-outline"
              sx={{ fontSize: '30px', color: 'blue', cursor: 'pointer' }}
              onClick={handleClickShowAll}
            />
            <Typography>Đánh Dấu Địa Điểm</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify
              icon="mdi:map-marker-off-outline"
              sx={{ fontSize: '30px', color: 'blue', cursor: 'pointer' }}
            />
            <Typography>Hủy Đánh Dấu</Typography>
          </Stack>
        </Stack> */}

        {/* <Divider /> */}

        {locationsOnDistricts
          .find((item) => item.id === lastIdDistrict)
          ?.value.features.map((item) => (
            <Stack direction="row" sx={{ alignItems: 'center' }} key={item.properties.id}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '25px',
                  marginRight: 2
                }}
              >
                {item.properties.id}
              </Typography>
              <Card sx={{ width: '350px' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.properties.src}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.properties.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      width: '100%',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Tooltip title={'Chỉ đường'} sx={{ zIndex: 2000 }}>
                      <Button
                        onClick={() =>
                          handleClickDirection(
                            item.geometry.coordinates as unknown as number[],
                            item.properties.name
                          )
                        }
                      >
                        <Iconify
                          icon="ic:baseline-assistant-direction"
                          sx={{ fontSize: '25px', color: '#34A853' }}
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip title={'Hiển thị trên map'} sx={{ zIndex: 2000 }}>
                      <Button
                        onClick={() =>
                          handleClickShowMarker(
                            item.geometry.coordinates as unknown as number[],
                            item.properties.name
                          )
                        }
                      >
                        <Iconify
                          icon="majesticons:map-simple-marker-line"
                          sx={{ fontSize: '25px', color: '#04F2F2' }}
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip title={'Xóa khỏi trên map'} sx={{ zIndex: 2000 }}>
                      <Button
                        onClick={() =>
                          handleClickDeleteMarker(
                            item.geometry.coordinates as unknown as number[],
                            item.properties.name
                          )
                        }
                      >
                        <Iconify
                          icon="ep:remove"
                          sx={{ fontSize: '25px', color: '#BA3329' }}
                        />
                      </Button>
                    </Tooltip>
                  </Stack>
                </CardActions>
              </Card>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
