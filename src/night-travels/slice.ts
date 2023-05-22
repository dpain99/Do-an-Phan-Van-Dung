import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateRedux } from './interface';

const initialState: IStateRedux = {
  selectAction: 0,
  selectLocations: []
};

export const nightTravelReducer = createSlice({
  name: 'nightTravelReducer',
  initialState,
  reducers: {
    setSelectAction(state, action: PayloadAction<number>) {
      state.selectAction = action.payload;
    },
    setSelectLocations(state, action: PayloadAction<number[]>) {
      state.selectLocations = action.payload;
    }
  }
});

export const { setSelectAction, setSelectLocations } = nightTravelReducer.actions;

export const selectAction = (state: RootState) => state.nightTravelReducer.selectAction;
export const selectLocations = (state: RootState) =>
  state.nightTravelReducer.selectLocations;

export default nightTravelReducer.reducer;
