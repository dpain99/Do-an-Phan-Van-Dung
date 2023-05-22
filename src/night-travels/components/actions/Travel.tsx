import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { selectAction, setSelectAction } from 'src/night-travels/slice';
import { dispatch } from 'src/common/redux/store';
import TransferList from 'src/feature-locations/components/TransferList';
import TravelList from './TravelList';

export default function Travel() {
  const idAction = useSelector(selectAction);

  const handleClose = () => {
    dispatch(setSelectAction(0));
  };

  return (
    <div>
      <Dialog
        open={idAction === 1 ? true : false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Chọn các địa điểm để tạo hành trình
        </DialogTitle>
        <DialogContent>
          <TravelList />
        </DialogContent>
        {/* <DialogActions>
          <Button variant="outlined" sx={{ color: 'grey' }} onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Tạo hành trình
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
