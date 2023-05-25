import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { route } from 'src/my-itinerary/slice';

export default function DetailDirection() {
  const dataRoute = useSelector(route);
  return (
    <>
      <Stack
        direction="column"
        sx={{
          width: '400px',
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
          gian chuyến đi: {dataRoute?.duration} {'phút'}
        </Typography>
        <Typography>
          <Iconify icon="emojione:motorway" sx={{ paddingTop: '3px' }} /> Tổng quãng đường
          chuyến đi: {dataRoute?.distance} {'m'}
        </Typography>
        <Typography sx={{ fontWeight: 600, color: 'red' }}>
          Các bước di chuyển:
        </Typography>
        {dataRoute?.legs?.map((item: any, index: number) => (
          <Stack key={index}>
            <Typography sx={{ fontWeight: 600, fontStyle: 'italic' }} key={index}>
              <Iconify icon="fluent:circle-16-filled" sx={{ paddingTop: '3px' }} />
              Lần {index + 1}
            </Typography>
            {item.steps.map((value: any, id: number) => (
              <Typography key={id}>
                {id + 1}. {value.maneuver.instruction}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>
    </>
  );
}
