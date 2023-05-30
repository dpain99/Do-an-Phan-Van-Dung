import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import Iconify from 'src/common/components/Iconify';
import MainFooter from 'src/common/layouts/main/MainFooter';
import { PATH_DASHBOARD } from 'src/common/routes/paths';
import SlickDay from './components/slick/SlickDay';
import SlickNight from './components/slick/SlickNight';
import TitleAnimation from './components/TitleAnimation';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
</style>;

export default function index() {
  const springsLeft = useSpring({
    from: { x: -50 },
    to: { x: 0 },
    config: { duration: 1000 }
  });

  const springsRight = useSpring({
    from: { x: 50 },
    to: { x: 0 },
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
              fontFamily: 'Allura, cursive',
              fontSize: '4.5rem',
              fontWeight: 'bold',
              color: '#ffffff'
              // border: '5px solid white',
              // padding: '0 10px 0 10px'
            }}
          >
            Khám Phá Hà Nội
          </Typography>
          <Typography sx={{ color: 'white', marginTop: 3, fontSize: '25px' }}>
            Những điều thú vị đang chờ bạn phía trước!
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}
          >
            <animated.div style={{ ...springsLeft }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  opacity: 0.8,
                  padding: '5px',
                  width: '180px',
                  transition: 'transform 0.2s ease',
                  borderRadius: '10px',
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
              {/* <Box
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
                </Typography> */}
            </animated.div>

            <Box
              sx={{
                backgroundColor: '#fff',
                opacity: 0.8,
                padding: '5px',
                width: '180px',
                transition: 'transform 0.2s ease',
                borderRadius: '10px',
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

            <animated.div
              style={{
                ...springsRight
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#fff',
                  opacity: 0.8,
                  padding: '5px',
                  width: '180px',
                  transition: 'transform 0.2s ease',
                  borderRadius: '10px',
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
              {/* <Box
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
                </Typography> */}
            </animated.div>
          </Stack>
        </Box>
      </Box>

      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          width: '100%',
          background: 'linear-gradient(to bottom, #2478B4, #AC93BB)'
          // bgcolor: '#5183C0'
          // backgroundImage:
          //   'url("https://nhadepso.com/wp-content/uploads/2023/01/tai-ngay-99-anh-bau-troi-dem-day-sao-dep-lung-linh-huyen-ao_11.jpg")'
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
            <TitleAnimation />
            {/* <Typography
              sx={{
                position: 'absolute',
                top: '20px',
                fontWeight: 600,
                fontSize: '25px'
              }}
            >
              Khám phá địa điểm
            </Typography> */}
            {/* <Iconify
              icon="ph:needle-light"
              sx={{ fontSize: '50px', color: 'red', transform: 'skew(90deg)' }}
            /> */}
            <Stack
              direction="column"
              // // spacing={3}
              sx={{
                alignItems: 'center',
                marginBottom: 4
              }}
            >
              <Box
                // component="img"
                // src="https://vyctravel.com/libs/upload/ckfinder/images/VYC/3b6d6c57182523_59dbacc5e56f8_800x458.jpg"
                // alt="anh-ban-dem"
                sx={{
                  width: '100px',
                  height: '100px',
                  // objectFit: 'cover',
                  borderRadius: '50%',
                  transition: 'transform 1s ease',
                  ':hover': {
                    transform: 'rotate(720deg)',
                    cursor: 'pointer'
                  },
                  bgcolor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
                onClick={() => {
                  navigation(PATH_DASHBOARD.my_itinerary.root);
                }}
              >
                <Iconify icon="logos:discover" />
              </Box>

              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Dancing Script, cursive',
                  marginTop: 2,
                  fontSize: '25px'
                }}
              >
                Khám phá địa điểm
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Stack
        sx={{
          // marginTop: 5,
          width: '100%',
          alignItems: 'center',
          bgcolor: '#AC93BB'
        }}
      >
        <Box
          sx={{
            borderRadius: '10px',
            marginTop: 5,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            height: '550px'
          }}
        >
          <Typography
            sx={{ marginTop: 3, marginBottom: 2, fontSize: '40px', color: 'white' }}
          >
            Hà Nội có gì?
          </Typography>

          <Stack direction="row" spacing={5} sx={{ position: 'relative' }}>
            <Typography
              sx={{
                fontSize: '20px',
                width: '380px',
                color: 'white',
                bgcolor: '#2B2B37',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'justify',
                lineHeight: 1.5
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: 'center', marginBottom: 2 }}
              >
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
              </Stack>
              Hà Nội là điểm đến hấp dẫn nếu bạn muốn khám phá du lịch miền Bắc. Chuyến
              hành trình du lịch Hà Nội “gây thương nhớ” với du khách bởi một màu sắc rất
              riêng, “rất Hà Nội”. Đó là những phố cổ xưa cũ, các di tích lịch sử nhuộm
              màu thời gian và vô số địa điểm giải trí vui hết nấc khác.
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                width: '380px',
                color: 'white',
                bgcolor: '#2B2B37',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'justify',
                lineHeight: 1.5
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: 'center', marginBottom: 2 }}
              >
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
              </Stack>
              Bạn băn khoăn chưa biết địa điểm gần mình có những địa điểm du lịch nào? Bạn
              muốn xem hành trình tới những địa điểm đó? Bạn muốn xem vị trí của những địa
              điểm trên bản đồ? Công cụ này ở đây để giúp bạn. Bắt đầu hành trình của
              chúng ta ngay thôi nào!
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                width: '380px',
                color: 'white',
                bgcolor: '#2B2B37',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'justify',
                lineHeight: 1.5
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: 'center', marginBottom: 2 }}
              >
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
                <Iconify
                  icon="line-md:star-pulsating-loop"
                  sx={{ color: 'yellow', fontSize: '30px' }}
                />
              </Stack>
              Mỗi hành trình đều mang lại nhiều bài học, mỗi bài học khiến bản thân hoàn
              thiện hơn. Dù website còn nhiều thiếu sót, nhưng khi nhận ra ta đang thiếu
              sót, tức là ta đang muốn học hỏi để có thể phát triển. Mọi ý kiến đóng góp
              vui lòng liên hệ vào các địa chỉ dưới cùng trang web.
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <MainFooter />
    </Box>
  );
}
