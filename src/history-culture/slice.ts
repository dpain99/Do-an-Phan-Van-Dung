import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateRedux } from './interface';

const initialState: IStateRedux = {
  location: [],
  tab: 0,
  route: {}
};

export const historyLocationReducer = createSlice({
  name: 'historyLocationReducer',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<number[]>) {
      state.location = action.payload;
    },
    setTab(state, action: PayloadAction<number>) {
      state.tab = action.payload;
    },
    setRoute(state, action: PayloadAction<any>) {
      state.route = action.payload;
    }
  }
});

export const { setLocation, setTab, setRoute } = historyLocationReducer.actions;

export const location = (state: RootState) => state.historyLocationReducer.location;
export const tab = (state: RootState) => state.historyLocationReducer.tab;
export const route = (state: RootState) => state.historyLocationReducer.route;

export default historyLocationReducer.reducer;
