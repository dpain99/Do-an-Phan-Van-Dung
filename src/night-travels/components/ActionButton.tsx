import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from 'src/common/redux/store';
import { setSelectAction } from '../slice';

const actions = [
  { icon: <Iconify icon="zondicons:travel-walk" />, name: 'Hành trình', id: 1 },
  { icon: <Iconify icon="majesticons:list-box-line" />, name: 'Danh sách', id: 2 },
  { icon: <Iconify icon="ic:baseline-directions" />, name: 'Chỉ đường', id: 3 }
];

export default function ActionButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = (id: number) => {
    setOpen(false);
    dispatch(setSelectAction(id));
  };

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, zIndex: 500 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        open={open}
        onClick={handleOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClose(action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
