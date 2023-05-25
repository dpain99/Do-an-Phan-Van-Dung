import { Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import Iconify from 'src/common/components/Iconify';
import { dispatch, useSelector } from 'src/common/redux/store';
import { useGetSearch } from 'src/my-itinerary/hooks/useGetSearch';
import {
  searchText,
  setItemValue,
  setSearchResult,
  setSearchText
} from 'src/my-itinerary/slice';

export default function SearchBox() {
  const textValue = useSelector(searchText);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
    setShowResult(true);
  };
  const handleClickResult = (value: number[], name: string, item: any) => {
    dispatch(setSearchResult(value));
    dispatch(setSearchText(name));
    dispatch(setItemValue(item));
    setShowResult(false);
  };
  const handleClearText = () => {
    dispatch(setSearchText(''));
  };

  const { data } = useGetSearch(textValue === 'Vị trí hiện tại' ? '' : textValue);

  return (
    <>
      <Stack direction="column" sx={{ borderRadius: '10px', backgroundColor: 'white' }}>
        <TextField
          size="small"
          label="Search"
          value={textValue}
          InputProps={{
            endAdornment: (
              <>
                {textValue !== '' ? (
                  <Iconify
                    key="x"
                    icon="ph:x-bold"
                    sx={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }}
                    onClick={handleClearText}
                  />
                ) : null}
                <Iconify
                  key="search-icon"
                  icon="mdi:search-web"
                  sx={{ fontSize: '30px' }}
                />
              </>
            )
          }}
          sx={{ width: '350px' }}
          onChange={(e) => handleChange(e)}
        />
        {showResult ? (
          <Stack
            direction="column"
            sx={{
              backgroundColor: 'white',
              width: '350px',
              cursor: 'pointer'
            }}
          >
            {data?.data?.features.map((item: any) => (
              <>
                <Typography
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '350px',
                    '&:hover': {
                      backgroundColor: 'lightgray'
                    }
                  }}
                  key={item.id}
                  onClick={() =>
                    handleClickResult(
                      item.center as unknown as number[],
                      item.place_name as unknown as string,
                      item
                    )
                  }
                >
                  <Iconify
                    icon="basil:map-location-solid"
                    sx={{ marginBottom: '2px' }}
                    key={item.id}
                  />
                  {item.place_name}
                </Typography>
              </>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </>
  );
}
