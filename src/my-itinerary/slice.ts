import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateSlice, IValueDistrict } from './interface';

const initialState: IStateSlice = {
  valueDistrict: [],
  selectedDistrict: [],
  searchResult: [],
  searchText: '',
  itemValue: {}
};

export const itineraryReducer = createSlice({
  name: 'itineraryReducer',
  initialState,
  reducers: {
    setValueDistrict(state, action: PayloadAction<IValueDistrict[]>) {
      state.valueDistrict = action.payload;
    },

    setSelectedDistrict(state, action: PayloadAction<number[]>) {
      state.selectedDistrict = action.payload;
    },
    setSearchResult(state, action: PayloadAction<number[]>) {
      state.searchResult = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    setItemValue(state, action: PayloadAction<any>) {
      state.itemValue = action.payload;
    }
  }
});

export const {
  setValueDistrict,
  setSelectedDistrict,
  setSearchResult,
  setSearchText,
  setItemValue
} = itineraryReducer.actions;

export const districtValue = (state: RootState) => state.itineraryReducer.valueDistrict;
export const selectedDistrict = (state: RootState) =>
  state.itineraryReducer.selectedDistrict;
export const searchResult = (state: RootState) => state.itineraryReducer.searchResult;
export const searchText = (state: RootState) => state.itineraryReducer.searchText;
export const itemValue = (state: RootState) => state.itineraryReducer.itemValue;

export default itineraryReducer.reducer;
