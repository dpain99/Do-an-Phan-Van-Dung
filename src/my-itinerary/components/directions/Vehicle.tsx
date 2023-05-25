import { Stack } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import {
  deleteDirection,
  directionVehicle,
  setDeleteDirection,
  setDirectionVehicle
} from 'src/my-itinerary/slice';

export default function Vehicle() {
  // const [activeIcon, setActiveIcon] = useState<string | null>('traffic');
  const profileDirection = useSelector(directionVehicle);
  const delDirection = useSelector(deleteDirection);

  const handleIconClick = (icon: string) => {
    if (profileDirection === icon) {
      console.log('Dang chon phuong tien nay');
    } else {
      dispatch(setDirectionVehicle(icon));
    }
  };

  // const handleClickDelete = () => {
  //   dispatch(setDeleteDirection('delete'));
  // };

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ justifyContent: 'space-around', padding: 3 }}
    >
      <Iconify
        icon="tabler:direction-sign"
        sx={{
          fontSize: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor:
            profileDirection === 'driving-traffic' ? '#E0ECFD' : 'transparent',
          color: profileDirection === 'driving-traffic' ? 'red' : null
        }}
        onClick={() => handleIconClick('driving-traffic')}
      />
      <Iconify
        icon="bxs:car"
        sx={{
          fontSize: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor: profileDirection === 'driving' ? '#E0ECFD' : 'transparent',
          color: profileDirection === 'driving' ? 'red' : null
        }}
        onClick={() => handleIconClick('driving')}
      />
      <Iconify
        icon="ion:bicycle"
        sx={{
          fontSize: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor: profileDirection === 'cycling' ? '#E0ECFD' : 'transparent',
          color: profileDirection === 'cycling' ? 'red' : null
        }}
        onClick={() => handleIconClick('cycling')}
      />
      <Iconify
        icon="ic:round-directions-walk"
        sx={{
          fontSize: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor: profileDirection === 'walking' ? '#E0ECFD' : 'transparent',
          color: profileDirection === 'walking' ? 'red' : null
        }}
        onClick={() => handleIconClick('walking')}
      />

      <Iconify
        icon="heroicons:x-mark-20-solid"
        sx={{
          fontSize: '30px',
          borderRadius: '50%',
          cursor: 'pointer',
          backgroundColor: delDirection ? '#E0ECFD' : 'transparent',
          color: delDirection ? 'red' : null
        }}
        id={delDirection}
      />
    </Stack>
  );
}
