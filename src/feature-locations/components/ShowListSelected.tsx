import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { location } from '../slice';
import { convertNumber } from '../utils/convertNumber';

export default function ShowListSelected() {
  const listLocation = useSelector(location);
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        width: '300px',
        height: '450px',
        backgroundColor: 'white',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        borderRadius: '10px',
        padding: 1
      }}
    >
      <Typography sx={{ fontWeight: 600, color: 'red' }}>
        Danh sách bạn đã chọn
      </Typography>
      {listLocation?.map((item, index) => (
        <Typography key={index}>
          {index + 1}. {convertNumber(item)?.label}
        </Typography>
      ))}
    </Stack>
  );
}
