import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateRedux } from './interface';

const initialState: IStateRedux = {
  location: [],
  tab: 0,
  route: {}
};

export const featureLocationReducer = createSlice({
  name: 'featureLocationReducer',
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

export const { setLocation, setTab, setRoute } = featureLocationReducer.actions;

export const location = (state: RootState) => state.featureLocationReducer.location;
export const tab = (state: RootState) => state.featureLocationReducer.tab;
export const route = (state: RootState) => state.featureLocationReducer.route;

export default featureLocationReducer.reducer;
