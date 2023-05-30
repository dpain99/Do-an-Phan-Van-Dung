import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import { setStyleMap, styleMap } from 'src/my-itinerary/slice';

const actions = [
  {
    style: 'mapbox://styles/mapbox/streets-v11',
    name: 'Mặc Định',
    id: 1,
    url: 'https://digital-geography.com/wp-content/uploads/2016/05/1-2.png'
  },
  {
    style: 'mapbox://styles/dpain99/cli3o7vro02j301prc30dddwd',
    name: 'Hình ảnh',
    id: 2,
    url: 'https://miro.medium.com/v2/resize:fit:900/0*si0GnRAqoAwGL5GD.jpg'
  },
  {
    style: 'mapbox://styles/dpain99/cli42wnep02jd01pr7k5r5svc',
    name: 'Ban đêm',
    id: 3,
    url: 'https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5ec3ea5513550c9d8fab58b3_qt_hero_1-poster-00001.jpg'
  },
  {
    style: 'mapbox://styles/mapbox/light-v10',
    name: 'Tối giản',
    id: 4,
    url: 'https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9db83e241283e854d764ed_light_ma.jpg'
  }
];

export default function ActionButton() {
  const [open, setOpen] = React.useState(false);
  const mapStyle = useSelector(styleMap);
  const handleOpen = () => setOpen(!open);
  const handleClose = (style: string) => {
    setOpen(false);
    dispatch(setStyleMap(style));
  };

  const backgroundImg = actions.find((item) => item.style === mapStyle)?.url;

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, zIndex: 500 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        open={open}
        onClick={handleOpen}
        direction="right"
        FabProps={{
          style: {
            borderRadius: '9px',
            width: '65px',
            height: '65px',
            border: '2px solid white',
            backgroundImage: `url(${backgroundImg})`,
            objectFit: 'cover'
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            onClick={() => handleClose(action.style)}
            FabProps={{
              style: {
                borderRadius: '9px',
                width: '65px',
                height: '65px',
                backgroundImage: `url(${action.url})`
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
