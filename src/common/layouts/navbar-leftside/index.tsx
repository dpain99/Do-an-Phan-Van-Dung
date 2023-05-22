import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Iconify from 'src/common/components/Iconify';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'src/common/routes/paths';

export default function TemporaryDrawer() {
  const navigation = useNavigate();

  const handleClickRoute = (text: string) => {
    if (text === 'Địa Điểm Nổi Bật') {
      navigation(PATH_DASHBOARD.feature_location.root);
    }
    if (text === 'Lịch Sử & Văn Hóa') {
      navigation(PATH_DASHBOARD.history_culture.root);
    }
    if (text === 'Ẩm Thực Địa Phương') {
      navigation(PATH_DASHBOARD.food_locations.root);
    }
    if (text === 'Khám Phá') {
      navigation(PATH_DASHBOARD.my_itinerary.root);
    }
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer =
    (anchor: 'left', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: 'left') => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography sx={{ padding: '15px', fontWeight: 600 }}>Menu</Typography>
      <Divider />
      <List>
        {['Địa Điểm Nổi Bật', 'Lịch Sử & Văn Hóa', 'Ẩm Thực Địa Phương', 'Khám Phá'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClickRoute(text)}>
                <ListItemIcon>
                  {index === 0 ? <Iconify icon="carbon:location-star" /> : null}
                  {index === 1 ? (
                    <Iconify icon="icon-park-outline:history-query" />
                  ) : null}
                  {index === 2 ? <Iconify icon="mdi:food-ramen" /> : null}
                  {index === 3 ? <Iconify icon="carbon:ibm-watson-discovery" /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Stack direction="column" spacing={3} sx={{ alignItems: 'center' }}>
            <Iconify
              icon="line-md:home-simple-twotone"
              sx={{
                fontSize: '45px',
                marginTop: '12px',
                cursor: 'pointer',
                color: '#75CFF0'
              }}
              onClick={() => navigation(PATH_DASHBOARD.lading_page)}
            />
            {/* <Box
              component="img"
              src="./common/image/PaperPlane.png"
              alt="logo"
              sx={{ width: '30px', height: '30px', objectFit: 'contain' }}
            /> */}
            <Button onClick={toggleDrawer(anchor, true)}>
              {<Iconify sx={{ fontSize: '26px' }} icon="line-md:menu-fold-right" />}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Stack>
        </React.Fragment>
      ))}
    </div>
  );
}
