import { Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from 'src/common/redux/store';
import { nameDistrict } from '../constant';
import { IValueDistrict } from '../interface';
import {
  districtValue,
  selectedDistrict,
  setSelectedDistrict,
  setValueDistrict
} from '../slice';

export default function MenuDistrict() {
  const districtNumber = useSelector(districtValue);
  const idSelected = useSelector(selectedDistrict);
  //   console.log('idSelected', idSelected);

  useEffect(() => {
    return () => {
      dispatch(setValueDistrict([]));
      dispatch(setSelectedDistrict([]));
    };
  }, [dispatch]);
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      {nameDistrict.map((item) => (
        <Box
          key={item.value}
          sx={{
            width: '100px',
            height: '100px',
            backgroundColor:
              idSelected.find((value) => value === item.value) === item.value
                ? 'red'
                : 'white',
            cursor: 'pointer',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => {
            if (idSelected?.find((number) => number === item.value)) {
              const newSelectedDistrict = idSelected.filter((value) => {
                return value !== item.value;
              });
              dispatch(setSelectedDistrict(newSelectedDistrict));
            } else dispatch(setSelectedDistrict([...idSelected, item.value]));

            const hasValueDistrict = districtNumber.find(
              (value) => value.idDistrict === item.value
            );
            if (
              districtNumber.find((value) => value.idDistrict === item.value)
                ?.idDistrict === item.value
            ) {
              const newDistrict: IValueDistrict = {
                isTurnOn: !hasValueDistrict?.isTurnOn,
                idDistrict: item.value
              };
              dispatch(setValueDistrict([newDistrict]));
            } else {
              const districts: IValueDistrict = {
                isTurnOn: true,
                idDistrict: item.value
              };
              dispatch(setValueDistrict([...districtNumber, districts]));
            }
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>
            Quận <br /> {item.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
