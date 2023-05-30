import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import Iconify from 'src/common/components/Iconify';

// ----------------------------------------------------------------------

const LINKS = [
  // {
  //   headline: 'Minimal',
  //   children: [
  //     { name: 'About us', href: PATH_PAGE.about },
  //     { name: 'Contact us', href: PATH_PAGE.contact },
  //   ]
  // },
  // {
  //   headline: 'Legal',
  //   children: [
  //     { name: 'Terms and Condition', href: '#' },
  //     { name: 'Privacy Policy', href: '#' }
  //   ]
  // },
  {
    headline: 'Contact',
    children: [
      { name: 'dung30763@gmail.com', href: '#' },
      { name: 'https://www.facebook.com/dungphan349', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      <Grid container sx={{ width: '100%', marginTop: 4 }}>
        <Grid item xs={6}>
          <Stack direction="column" sx={{ marginLeft: 9 }}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '5px'
              }}
            >
              Công cụ giới thiệu địa điểm & hướng dẫn đường đi
            </Typography>
            <Typography>
              {' '}
              {
                <Iconify
                  icon="fluent:location-12-filled"
                  sx={{ marginRight: 1, paddingTop: '3px', color: '#009792' }}
                />
              }
              Địa chỉ: Nam Từ Liêm, Hà Nội
            </Typography>
            <Typography>
              {' '}
              {
                <Iconify
                  icon="carbon:phone-filled"
                  sx={{ marginRight: 1, paddingTop: '3px', color: '#009792' }}
                />
              }
              Điện thoại: 0981787551
            </Typography>
            <Typography>
              {' '}
              {
                <Iconify
                  icon="tabler:mail-filled"
                  sx={{ marginRight: 1, paddingTop: '3px', color: '#009792' }}
                />
              }
              Email: phandung3499@gmail.com
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: 9
          }}
        >
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '16px',
              marginBottom: '5px'
            }}
          >
            Kết nối với chúng tôi
            <br />
          </Typography>

          <Stack direction="row" spacing={3}>
            <Iconify icon="fa:facebook-square" />
            <Iconify icon="uil:instagram" />
            <Iconify icon="icon-park-solid:youtube" />
            <Iconify icon="iconoir:tiktok" />
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
