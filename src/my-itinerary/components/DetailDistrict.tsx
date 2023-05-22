import { Box, Stack } from '@mui/material';

export default function DetailDistrict() {
  return (
    <>
      <Stack
        direction="row"
        spacing={3}
        sx={{ width: '430px', height: '100%', backgroundColor: 'white' }}
      >
        <Box
          component="img"
          src="https://mediaim.expedia.com/destination/1/1adf01dfa910e7131ec1a7c714ee80d0.jpg"
          alt="quan-ba-dinh"
          sx={{ width: '430px', height: '450px', objectFit: 'contain' }}
        />
      </Stack>
    </>
  );
}
