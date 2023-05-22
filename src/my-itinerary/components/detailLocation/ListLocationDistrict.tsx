import {
  Box,
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
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { nameDistrict } from 'src/my-itinerary/constant';
import detailDistrictLocation from 'src/my-itinerary/data/detail-district-locations';
import { selectedDistrict } from 'src/my-itinerary/slice';

export default function ListLocationDistrict() {
  const idDistrict = useSelector(selectedDistrict);
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
          {nameDistrict.find((item) => item.value === idDistrict[0])?.label}
        </Typography>

        <Divider />

        <Stack
          direction="row"
          spacing={4}
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify
              icon="ic:baseline-assistant-direction"
              sx={{ fontSize: '30px', color: 'blue', cursor: 'pointer' }}
            />
            <Typography>Chỉ đường</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify
              icon="ic:round-info"
              sx={{ fontSize: '30px', color: 'blue', cursor: 'pointer' }}
            />
            <Typography>Thông tin</Typography>
          </Stack>
        </Stack>

        <Divider />

        {detailDistrictLocation
          .find((item) => item.id === idDistrict[0])
          ?.data.map((item) => (
            <Stack direction="row" sx={{ alignItems: 'center' }} key={item.id}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '25px',
                  marginRight: 2
                }}
              >
                {item.id}
              </Typography>
              <Card sx={{ width: '350px' }}>
                <CardMedia sx={{ height: 140 }} image={item.src} title="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
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
                      <Button>
                        <Iconify
                          icon="ic:baseline-assistant-direction"
                          sx={{ fontSize: '25px', color: '#04F2F2' }}
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip title={'Hiển thị trên map'} sx={{ zIndex: 2000 }}>
                      <Button>
                        <Iconify
                          icon="majesticons:map-simple-marker-line"
                          sx={{ fontSize: '25px', color: '#04F2F2' }}
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
