import { Box, Button, Stack, Typography } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import Iconify from 'src/common/components/Iconify';
import SlickDay from './components/slick/SlickDay';
import SlickNight from './components/slick/SlickNight';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'src/common/routes/paths';
import MainFooter from 'src/common/layouts/main/MainFooter';

export default function index() {
  const springsLeft = useSpring({
    from: { x: 0 },
    to: { x: 70 },
    config: { duration: 1000 }
  });

  const springsRight = useSpring({
    from: { x: 0 },
    to: { x: -70 },
    config: { duration: 1000 }
  });

  const navigation = useNavigate();

  return (
    <Box sx={{ width: '99vw', height: '100vh' }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="https://www.uplevo.com/img/designbox/anh-bia-facebook-pho-ta-hien.jpg"
          alt="anh-ha-noi"
          sx={{ width: '99vw', height: '70vh', objectFit: 'cover' }}
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
              onClick={() => {
                navigation(PATH_DASHBOARD.feature_location.root);
              }}
            >
              <Iconify icon="mdi:location-favorite" fontSize="30px" />
              <br />
              <Typography sx={{ fontWeight: 600, color: 'red' }}>
                Địa điểm nổi bật
              </Typography>
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
              onClick={() => {
                navigation(PATH_DASHBOARD.history_culture.root);
              }}
            >
              <Iconify icon="arcticons:locationprivacy" fontSize="30px" />
              <br />
              <Typography sx={{ fontWeight: 600, color: 'red' }}>
                {' '}
                Lịch sử & văn hóa
              </Typography>
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
              onClick={() => {
                navigation(PATH_DASHBOARD.food_locations.root);
              }}
            >
              <Iconify icon="ic:sharp-food-bank" fontSize="30px" />
              <br />
              <Typography sx={{ fontWeight: 600, color: 'red' }}>
                {' '}
                Ẩm thực địa phương
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          width: '100%',
          backgroundImage:
            'url(https://media.istockphoto.com/id/1200966145/vi/vec-to/h%C3%ACnh-%E1%BA%A3nh-ho%E1%BA%A1t-h%C3%ACnh-%C4%91%E1%BA%B9p-ngang-n%C3%BAi-v%E1%BB%9Bi-con-%C4%91%C6%B0%E1%BB%9Dng-kh%C3%A1i-ni%E1%BB%87m-thi%C3%AAn-nhi%C3%AAn-beatiful-ki%E1%BB%83u-ph%E1%BA%B3ng.jpg?s=612x612&w=0&k=20&c=o6vGcfrki_HJGv8n3RJwKWIAa2Ce3N2d2fEjn_57zTM=)'
        }}
      >
        <Stack
          sx={{
            width: '32vw',
            height: '38%',
            padding: '10px'
          }}
        >
          <SlickNight />
        </Stack>
        <Stack sx={{ width: '32vw', height: '38%', padding: '10px' }}>
          <SlickDay />
        </Stack>
      </Stack>
      <Stack sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '63vh',
            margin: '0 auto',
            width: '35vw',
            height: '50%',
            objectFit: 'cover',
            zIndex: '100',
            borderRadius: '10px',
            bgcolor: 'white',
            boxShadow: '0 0 5px #000',
            backgroundImage:
              'url(https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-1-3.jpg)'
          }}
        >
          <Stack
            direction="column"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              width: '100%'
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                top: '20px',
                fontWeight: 600,
                fontSize: '25px'
              }}
            >
              Chọn hành trình
            </Typography>
            <Iconify
              icon="ph:needle-light"
              sx={{ fontSize: '50px', color: 'red', transform: 'skew(90deg)' }}
            />
            <Stack
              direction="row"
              spacing={3}
              sx={{
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <animated.div style={{ ...springsLeft }}>
                <Box
                  component="img"
                  src="https://png.pngtree.com/thumb_back/fw800/20160925/pngtree-Skyscraper-City-Skyline-Night-background-photo-790203.jpg"
                  alt="anh-ban-dem"
                  sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    transition: 'transform 1s ease',
                    ':hover': {
                      transform: 'rotate(720deg)',
                      pointer: 'cursor'
                    }
                  }}
                  onClick={() => {
                    navigation(PATH_DASHBOARD.night_travels.root);
                  }}
                />
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Ban Đêm
                </Typography>
              </animated.div>

              <animated.div
                style={{
                  ...springsRight
                }}
              >
                <Box
                  component="img"
                  src="https://img.freepik.com/vetores-premium/carros-na-rodovia-para-a-cidade-vista-em-perspectiva-da-estrada-da-cidade-paisagem-urbana-com-carros-e-ilustracao-dos-desenhos-animados-do-vetor-de-viagens-de-carro-automoveis-indo-em-direcao-a-megalopole-com-arranha-ceus-e-edificios-modernos_102902-2494.jpg"
                  alt="anh-ban-dem"
                  sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    transition: 'transform 1s ease',
                    ':hover': {
                      transform: 'rotate(720deg)'
                    }
                  }}
                />
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Ban Ngày
                </Typography>
              </animated.div>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Stack
        sx={{
          marginTop: 5,
          width: '100%',
          alignItems: 'center',
          marginBottom: 5
        }}
      >
        <Box
          sx={{
            borderRadius: '10px',
            width: '60vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyea252bkYoYgpPi52T2_kjlNBy5lMjmM-w&usqp=CAU")',
            backgroundSize: 'cover'
          }}
        >
          <Typography sx={{ marginBottom: 3, fontSize: '20px', color: 'white' }}>
            Khám phá địa điểm
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigation(PATH_DASHBOARD.my_itinerary.root);
            }}
          >
            Bắt đầu
          </Button>
        </Box>
      </Stack>
      <MainFooter />
    </Box>
  );
}
