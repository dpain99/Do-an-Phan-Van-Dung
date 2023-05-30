import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import * as React from 'react';
import useMessage from 'src/common/hooks/useMessage';
import { dispatch } from 'src/common/redux/store';
import { setLocation, setTab } from '../slice';
import { convertNumber } from '../utils/convertNumber';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly number[], b: readonly number[]) {
  return [...a, ...not(b, a)];
}

export default function TransferList() {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [right, setRight] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const handleCreate = () => {
    if (right.length === 1) {
      showErrorSnackbar('Danh sách đã chọn phải có ít nhất 2 địa điểm');
    } else if (right.length === 0) {
      showErrorSnackbar('Bạn chưa chọn địa điểm nào');
    } else {
      dispatch(setLocation(right));
      setLoading(true);
      dispatch(setTab(2));
      showSuccessSnackbar('Khởi tạo hành trình thành công');
    }
  };

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly number[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: readonly number[]) => (
    <Card sx={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)' }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected'
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 450,
          height: 400,
          bgcolor: 'background.paper',
          overflow: 'auto'
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItem
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
              sx={{
                backgroundImage: `url(${convertNumber(value).link})`,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                height: '100px',
                width: '100%',
                opacity: 0.8,
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                '& .MuiCheckbox-root': {
                  color: 'linear-gradient(to right bottom, #6a5af9, #f62682)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&.Mui-checked': {
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                  }
                }
              }}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId
                  }}
                />
              </ListItemIcon>
              <Typography
                id={labelId}
                sx={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: '20px',
                  padding: '0 4px 0 4px',
                  background: ' rgba(255, 255, 255, 0.5)',
                  borderRadius: '10px'
                }}
              >
                {convertNumber(value)?.label}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Danh sách Địa Điểm', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)' }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)' }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Danh sách bạn chọn', right)}</Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2
        }}
      >
        <LoadingButton loading={loading} variant="contained" onClick={handleCreate}>
          Tạo lịch trình
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
