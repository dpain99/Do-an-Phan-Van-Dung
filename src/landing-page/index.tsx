import { Box, Button, Stack, Typography } from '@mui/material';
import Iconify from 'src/common/components/Iconify';

export default function index() {
  return (
    <Box sx={{ width: '99vw', height: '100vh' }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="https://www.uplevo.com/img/designbox/anh-bia-facebook-pho-ta-hien.jpg"
          alt="anh-ha-noi"
          sx={{ width: '99vw', height: '50%', objectFit: 'cover' }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#D8C4A0',
            opacity: '0.3',
            zIndex: 1
          }}
        />
        {/* <Stack
          sx={{ position: 'absolute', left: 'calc(99vw - 240px)', top: 10 }}
          spacing={3}
          direction="row"
        >
          <Button variant="contained" sx={{ '&:hover': { cursor: 'pointer' } }}>
            Đăng ký
          </Button>
          <Button variant="outlined" sx={{ '&:hover': { cursor: 'pointer' } }}>
            Đăng nhập
          </Button>
        </Stack> */}

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            width: 'fit-content'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Arial',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#ffffff',
              border: '5px solid white',
              padding: '0 10px 0 10px'
            }}
          >
            Khám Phá Hà Nội
          </Typography>
          <Typography sx={{ color: 'white', marginTop: 3 }}>
            Những điều thú vị đang chờ bạn phía trước! tham gia ngay với chúng tôi
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}
          >
            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.4,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  opacity: 0.9,
                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
            >
              <Iconify icon="mdi:location-favorite" fontSize="30px" />
              <br />
              Địa điểm nổi bật
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.4,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  opacity: 0.9,
                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
            >
              <Iconify icon="arcticons:locationprivacy" fontSize="30px" />
              <br />
              Lịch sử & văn hóa
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.4,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  opacity: 0.9,
                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
            >
              <Iconify icon="ic:sharp-food-bank" fontSize="30px" />
              <br />
              Ẩm thực địa phương
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
        <Typography>Về chúng tôi</Typography>
      </Stack>
    </Box>
  );
}
