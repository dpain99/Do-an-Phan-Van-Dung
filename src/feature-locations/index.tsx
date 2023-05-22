import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Iconify from 'src/common/components/Iconify';
import ListLocation from './components/ListLocation';
import MapDirections from './components/MapDirections';
import TransferList from './components/TransferList';
import { TabContext } from '@mui/lab';
import { useSelector } from 'react-redux';
import { setTab, tab } from './slice';
import { dispatch } from 'src/common/redux/store';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function index() {
  // const [value, setValue] = React.useState(0);
  const currentTab = useSelector(tab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setTab(newValue));
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          borderBottom: 2,
          borderColor: 'divider',
          paddingBottom: '5px'
        }}
      >
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto'
            }}
            label="Danh sách"
            icon={
              <Iconify
                sx={{ fontSize: '30px', marginLeft: '4px' }}
                icon="iconoir:media-image-list"
              />
            }
            {...a11yProps(0)}
          />
          <Tab
            label="Chọn địa điểm"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto'
            }}
            icon={
              <Iconify
                sx={{ fontSize: '30px', marginLeft: '5px' }}
                icon="basil:location-plus-solid"
              />
            }
            {...a11yProps(1)}
          />
          <Tab
            label="Map"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto'
            }}
            icon={<Iconify sx={{ fontSize: '30px', marginLeft: '6px' }} icon="uiw:map" />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: 0,
          right: 0,
          margin: 'auto',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <TabPanel value={currentTab} index={0}>
          <ListLocation />
        </TabPanel>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: 0,
          right: 0,
          margin: 'auto'
        }}
      >
        <TabPanel value={currentTab} index={1}>
          <TransferList />
        </TabPanel>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: 0,
          right: 0,
          margin: 'auto'
        }}
      >
        <TabPanel value={currentTab} index={2}>
          <MapDirections />
        </TabPanel>
      </Box>
    </Box>
  );
}
