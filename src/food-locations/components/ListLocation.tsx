import { Box, Card, Grid, Stack, Tooltip, Typography } from '@mui/material';
import 'animate.css';
import Iconify from 'src/common/components/Iconify';
import { BlogLocation } from '../data/BlogLocation';

export default function ListLocation() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Tooltip
        placement="top-start"
        title="Lên đầu trang"
        sx={{ position: 'fixed', right: '23px', top: '73vh' }}
      >
        <Box>
          <Iconify
            sx={{
              fontSize: '25px',
              position: 'fixed',
              right: '23px',
              top: '70vh',
              zIndex: 999,
              width: '30px',
              height: '40px',
              color: 'red',
              cursor: 'pointer'
            }}
            icon="material-symbols:keyboard-double-arrow-up-rounded"
            onClick={() => {
              const topPage = document.getElementById('top-page');
              topPage?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </Box>
      </Tooltip>

      <Typography
        sx={{ fontFamily: 'Helvetica', fontWeight: 600, fontSize: '35px' }}
        id="top-page"
      >
        Danh sách 9 địa điểm du lịch Hà Nội về lịch sử - văn hóa
      </Typography>

      <Typography>D Pain, 03/04/2023, 9 min read</Typography>

      <Stack spacing={3} sx={{ width: '70vw', marginTop: 3, justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 600, lineHeight: 2, textAlign: 'justify' }}>
          <b>
            <i>
              Chất chứa rất nhiều bản sắc văn hóa lâu đời, các địa điểm du lịch ở Hà Nội
              không chỉ mang đến một cảm giác hoài niệm về lịch sử nghìn năm văn hiến mà
              còn khiến du khách ấn tượng không thể quên với không khí sầm uất của 36 phố
              phường và nét thanh lịch của con người Hà Nội.
            </i>
          </b>
          <br />
          Đến Hà Nội, bạn sẽ cảm nhận được một cuộc sống đầy náo nhiệt và năng động từ
          buổi sớm tinh mơ cho đến tận khuya. Bên cạnh đó là các di tích lịch sử nổi
          tiếng, với hơn 600 đền, chùa, cùng nhiều công trình văn hóa khác tạo nên một bản
          sắc rất riêng. D Pain xin giới thiệu các địa điểm du lịch ở Hà Nội không thể bỏ
          qua nếu bạn có dịp ghé thăm nơi đây nhé: (Lưu ý: những địa điểm trùng với phần
          Địa điểm nổi bật sẽ không xuất hiện ở bài viết này)
        </Typography>
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          {BlogLocation.map((item) => (
            <Grid key={item.id} item xs={3.5}>
              <Card
                key={item.id}
                sx={{
                  transition: 'transform 0.2s ease-in-out',
                  ':hover': {
                    transform: 'scale(1.1)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
                  height: '230px',
                  width: '300px'
                }}
                onClick={() => {
                  const vanMieu = document.getElementById(`${item.id}`);
                  vanMieu?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt="anh"
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '200px'
                  }}
                />
                <Typography>{item.label}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {BlogLocation.map((item, index) => (
          <Stack sx={{ width: '50vw', alignSelf: 'center' }} id={item.id} key={item.id}>
            <Typography sx={{ fontWeight: 550, textAlign: 'justify', lineHeight: 1.8 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '25px', marginBottom: 2 }}>
                {index + 1}. {item.label}
              </Typography>
              {item.content}
            </Typography>
            <Box
              component="img"
              src={item.src}
              alt="anh"
              sx={{
                objectFit: 'cover'
              }}
            />
            <Typography
              sx={{ alignSelf: 'center', fontStyle: 'italic', fontSize: '15px' }}
            >
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
