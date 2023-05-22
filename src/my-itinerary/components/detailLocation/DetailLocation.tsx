import { Box, Divider, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { itemValue } from 'src/my-itinerary/slice';

export default function DetailLocation() {
  const resultData = useSelector(itemValue);
  console.log('resultData', resultData);

  return (
    <>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: '400px',
          height: '100%',
          backgroundColor: 'white'
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/tvlk/blog/2023/02/lang-chu-tich%E2%80%93ho-chi-minh-2.png?tr=dpr-2,w-675"
          alt="anh-lang-bac"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '250px'
          }}
        />
        <Stack>
          <Typography>{resultData.place_name_vi}</Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          spacing={4}
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify
              icon="ic:baseline-assistant-direction"
              sx={{ fontSize: '30px', color: 'blue' }}
            />
            <Typography>Chỉ đường</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify icon="ic:round-save" sx={{ fontSize: '30px', color: 'blue' }} />
            <Typography>Lưu</Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Iconify icon="ic:round-info" sx={{ fontSize: '30px', color: 'blue' }} />
            <Typography>Thông tin</Typography>
          </Stack>
        </Stack>
        <Divider />

        <Stack>
          <Typography>Ảnh</Typography>
        </Stack>
      </Stack>
    </>
  );
}
