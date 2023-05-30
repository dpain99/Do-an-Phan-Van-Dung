import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';

import './styleScroll.css';
import { route } from '../slice';

export default function DetailDirection() {
  const dataRoute = useSelector(route);
  const minuteDuration = Math.round(dataRoute.duration / 60).toFixed(1);
  const kmDistance = Math.round(dataRoute.distance / 1000).toFixed(1);
  const showIcon = (value: string) => {
    if (value.indexOf('trái') !== -1) {
      return (
        <Iconify
          icon="majesticons:arrow-up"
          sx={{ transform: 'rotate(270deg)', fontSize: '20px', color: '#75CFF0' }}
        />
      );
    }
    if (value.indexOf('phải') !== -1) {
      return (
        <Iconify
          icon="majesticons:arrow-up"
          sx={{ transform: 'rotate(90deg)', fontSize: '20px', color: '#75CFF0' }}
        />
      );
    }
    if (value.indexOf('đích.') !== -1) {
      return (
        <Iconify
          icon="fluent:target-arrow-16-regular"
          sx={{ fontSize: '20px', color: 'red' }}
        />
      );
    }
    if (value.indexOf('vòng xuyến') !== -1) {
      return (
        <Iconify
          icon="ic:sharp-roundabout-left"
          sx={{ fontSize: '20px', color: '#75CFF0' }}
        />
      );
    }
    return (
      <Iconify icon="majesticons:arrow-up" sx={{ fontSize: '20px', color: '#75CFF0' }} />
    );
  };

  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: '450px',
          height: '450px',
          backgroundColor: 'white',
          overflowY: 'auto',
          whiteSpace: 'nowrap',
          borderRadius: '10px',
          padding: 1
        }}
      >
        <Typography sx={{ fontWeight: 600, color: 'red' }}>Chi tiết chuyến đi</Typography>
        <Typography>
          <Iconify icon="icon-park-solid:time" sx={{ paddingTop: '3px' }} /> Tổng thời
          gian chuyến đi: {minuteDuration !== undefined ? minuteDuration : ''} {'phút'}
        </Typography>
        <Typography>
          <Iconify icon="emojione:motorway" sx={{ paddingTop: '3px' }} /> Tổng quãng đường
          chuyến đi: {kmDistance !== undefined ? kmDistance : ''} {'km'}
        </Typography>
        <Typography sx={{ fontWeight: 600, color: 'red' }}>
          Các bước di chuyển:
        </Typography>
        {dataRoute?.legs?.map((item: any, index: number) => (
          <Stack key={index} sx={{ whiteSpace: 'normal' }}>
            <Typography sx={{ fontWeight: 600, fontStyle: 'italic' }} key={index}>
              <Iconify icon="fluent:circle-16-filled" sx={{ paddingTop: '3px' }} />
              Lần {index + 1}
            </Typography>
            {item.steps.map((value: any, id: number) => (
              <Stack key={id} direction="column" sx={{ marginBottom: 2 }}>
                <Stack direction="row">
                  {showIcon(value.maneuver.instruction)}
                  <Typography sx={{ marginLeft: 2 }}>
                    {value.maneuver.instruction}
                  </Typography>
                </Stack>

                <Stack direction="row" sx={{ width: '100%' }}>
                  <Typography
                    sx={{ marginLeft: '34px', fontSize: '14px', fontFamily: '' }}
                  >
                    {Math.round(value.distance) +
                      'm' +
                      ` (${Math.round(value.duration)})s`}{' '}
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      borderBottom: '1px solid black',
                      marginBottom: 1,
                      marginLeft: 1
                    }}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </>
  );
}
