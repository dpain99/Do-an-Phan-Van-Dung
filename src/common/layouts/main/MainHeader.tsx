import { useLocation, useNavigate } from 'react-router-dom';
// @mui
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../../config';
// components
import Logo from '../../components/Logo';
//
import navConfig from './MenuConfig';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import { PATH_AUTH } from 'src/common/routes/paths';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  const navigation = useNavigate();

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 }
          })
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && (
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={[]} />
          )}

          {/* <Stack spacing={3} direction="row">
            <Button variant="contained">Đăng ký</Button>
            <Button variant="outlined" onClick={() => {navigation(PATH_AUTH.login)}}>Đăng nhập</Button>
          </Stack> */}

          {/* {!isDesktop && (
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          )} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
