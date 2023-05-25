import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from 'src/common/redux/store';
import { ListTravelData } from 'src/night-travels/data/ListTravelData';
import {
  selectLocations,
  setSelectAction,
  setSelectLocations
} from 'src/night-travels/slice';

export default function TravelList() {
  const [checked, setChecked] = React.useState<number[]>([]);

  const selectedLocation = useSelector(selectLocations);
  const handleClose = () => {
    dispatch(setSelectAction(0));
  };

  const handleCreate = () => {
    dispatch(setSelectLocations(checked));
    dispatch(setSelectAction(0));
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {ListTravelData.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value.id} disablePadding>
            <Stack direction="row">
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={handleToggle(value.id)}
                />
              </ListItemIcon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    sx={{ color: '#00C1FE', fontWeight: 600 }}
                    id={labelId}
                    primary={value.label}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{value.des}</Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </ListItem>
        );
      })}
      <Stack
        direction="row"
        spacing={3}
        sx={{ marginTop: 3, justifyContent: 'flex-end' }}
      >
        <Button variant="outlined" sx={{ color: 'grey' }} onClick={handleClose}>
          Hủy
        </Button>
        <Button id="create-direction" variant="outlined" onClick={handleCreate} autoFocus>
          Tạo hành trình
        </Button>
      </Stack>
    </List>
  );
}
