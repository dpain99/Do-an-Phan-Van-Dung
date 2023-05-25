import { Divider, IconButton, Paper, Stack, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import { useGetDirection } from 'src/my-itinerary/hooks/useGetDirection';
import {
  currentPoint,
  directionVehicle,
  oneMarker,
  setRoute,
  setSearchText
} from 'src/my-itinerary/slice';
import SearchBox from '../search/SearchBox';
import DetailDirection from './DetailDirection';
import Vehicle from './Vehicle';

export default function DirectionBox() {
  const [startPoint, setStartPoint] = useState<number[]>([]);
  const dataDestination = useSelector(oneMarker);
  const profileDirection = useSelector(directionVehicle);

  const current = useSelector(currentPoint);

  const endPoint = dataDestination.coordinate;
  const handleClickCurrent = () => {
    setStartPoint(current);
    dispatch(setSearchText('Vị trí hiện tại'));
  };

  const handleClickRoute = () => {
    useGetDirection(profileDirection, startPoint, endPoint)
      .then((routeData) => {
        dispatch(setRoute(routeData));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: '450px',
          height: '100%',
          backgroundColor: 'white'
          // overflowY: 'auto',
          // whiteSpace: 'nowrap',
        }}
      >
        <Paper
          elevation={4}
          sx={{ padding: '6px', margin: '2px 3px 0 2px', position: 'sticky', top: 0 }}
        >
          <Stack>
            <Vehicle />

            <Divider />

            <Stack direction="column" spacing={3} sx={{ marginTop: 3, marginBottom: 3 }}>
              <Stack
                direction="row"
                sx={{ justifyContent: 'start', alignItems: 'center' }}
              >
                <Iconify
                  icon="ep:location-filled"
                  sx={{
                    fontSize: '25px',
                    marginRight: 1,
                    color: '#75CFF0'
                  }}
                />
                <SearchBox />
                <Tooltip title="Lấy vị trí hiện tại">
                  <IconButton sx={{ marginLeft: 1 }} onClick={handleClickCurrent}>
                    <Iconify
                      icon="akar-icons:flag"
                      sx={{
                        fontSize: '25px',
                        color: '#75CFF0',
                        cursor: 'pointer'
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                sx={{ justifyContent: 'start', alignItems: 'center' }}
              >
                <Iconify
                  icon="fluent:my-location-20-filled"
                  sx={{ fontSize: '25px', marginRight: 1, color: '#D15251' }}
                />
                <TextField
                  size="small"
                  sx={{ width: '350px' }}
                  value={dataDestination.name}
                  disabled
                />
                <Tooltip title="Bắt đầu tìm đường">
                  <IconButton sx={{ marginLeft: 1 }} onClick={handleClickRoute}>
                    <Iconify
                      icon="material-symbols:not-started-outline-rounded"
                      sx={{
                        fontSize: '25px',
                        color: '#D15251',
                        cursor: 'pointer'
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
        </Paper>

        <Stack>
          <DetailDirection />
        </Stack>
      </Stack>
    </>
  );
}
