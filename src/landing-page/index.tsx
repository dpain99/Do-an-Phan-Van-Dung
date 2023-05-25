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
    to: { x: 50 },
    config: { duration: 1000 }
  });

  const springsRight = useSpring({
    from: { x: 0 },
    to: { x: -50 },
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
                opacity: 0.8,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
              onClick={() => {
                navigation(PATH_DASHBOARD.feature_location.root);
              }}
            >
              <Iconify
                icon="fluent:globe-location-20-regular"
                fontSize="30px"
                sx={{ color: '#05C101' }}
              />
              <br />
              <Typography sx={{ fontWeight: 600 }}>Địa điểm nổi bật</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.8,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
              onClick={() => {
                navigation(PATH_DASHBOARD.history_culture.root);
              }}
            >
              <Iconify icon="emojione-v1:flag-for-vietnam" sx={{ fontSize: '30px' }} />
              <br />
              <Typography sx={{ fontWeight: 600 }}> Lịch sử & văn hóa</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.8,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                  bgcolor: '#BC956C',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}
              onClick={() => {
                navigation(PATH_DASHBOARD.food_locations.root);
              }}
            >
              <Iconify
                icon="carbon:noodle-bowl"
                fontSize="30px"
                sx={{ color: '#00C0A7' }}
              />
              <br />
              <Typography sx={{ fontWeight: 600 }}> Ẩm thực địa phương</Typography>
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
            'url("https://nhadepso.com/wp-content/uploads/2023/01/tai-ngay-99-anh-bau-troi-dem-day-sao-dep-lung-linh-huyen-ao_11.jpg")'
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
              'url(https://toigingiuvedep.vn/wp-content/uploads/2021/08/anh-bau-troi-dep-de-ghep-anh.jpg)'
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Emblem_of_Hanoi.svg/1200px-Emblem_of_Hanoi.svg.png"
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
                    navigation(PATH_DASHBOARD.feature_location.root);
                  }}
                />
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Nổi bật
                </Typography>
              </animated.div>

              <Stack
                sx={{
                  display: 'flex',
                  alignSelf: 'center'
                }}
              >
                <Box
                  component="img"
                  src="https://vyctravel.com/libs/upload/ckfinder/images/VYC/3b6d6c57182523_59dbacc5e56f8_800x458.jpg"
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
                  onClick={() => {
                    navigation(PATH_DASHBOARD.history_culture.root);
                  }}
                />

                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Lịch sử
                </Typography>
              </Stack>

              <animated.div
                style={{
                  ...springsRight
                }}
              >
                <Box
                  component="img"
                  src="https://cafefcdn.com/2018/7/19/photo-2-1531984647242593960017.png"
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
                  onClick={() => {
                    navigation(PATH_DASHBOARD.food_locations.root);
                  }}
                />

                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Ẩm thực
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
              'url("https://img6.thuthuatphanmem.vn/uploads/2022/03/04/background-bau-troi-de-thuong_034129499.jpg")',
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
