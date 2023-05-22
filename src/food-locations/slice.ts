import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateRedux } from 'src/food-locations/interface';

const initialState: IStateRedux = {
  location: [],
  tab: 0,
  route: {}
};

export const foodLocationReducer = createSlice({
  name: 'foodLocationReducer',
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

export const { setLocation, setTab, setRoute } = foodLocationReducer.actions;

export const location = (state: RootState) => state.foodLocationReducer.location;
export const tab = (state: RootState) => state.foodLocationReducer.tab;
export const route = (state: RootState) => state.foodLocationReducer.route;

export default foodLocationReducer.reducer;
