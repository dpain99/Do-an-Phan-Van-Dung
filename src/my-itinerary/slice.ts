import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from 'src/common/redux/store';
import { IStateSlice, IValueDistrict } from './interface';

const initialState: IStateSlice = {
  valueDistrict: [],
  selectedDistrict: [],
  searchResult: [],
  searchText: '',
  itemValue: {},
  clickShowMarker: [{ coordinate: [], name: '' }],
  oneMarker: { coordinate: [], name: '' },
  deleteOneMarker: { coordinate: [], name: '' },
  route: {},
  currentPoint: [105.8206194674218, 21.036038930998174],
  showDirectionBox: false,
  directionVehicle: 'driving-traffic',
  deleteDirection: 'delete-direction',
  styleMap: 'mapbox://styles/mapbox/streets-v11'
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
    },
    setClickShowMarker(
      state,
      action: PayloadAction<{ coordinate: number[]; name: string }[]>
    ) {
      state.clickShowMarker = action.payload;
    },
    setOneMarker(state, action: PayloadAction<{ coordinate: number[]; name: string }>) {
      state.oneMarker = action.payload;
    },
    setDeleteOneMarker(
      state,
      action: PayloadAction<{ coordinate: number[]; name: string }>
    ) {
      state.deleteOneMarker = action.payload;
    },
    setRoute(state, action: PayloadAction<any>) {
      state.route = action.payload;
    },
    setCurrentPoint(state, action: PayloadAction<number[]>) {
      state.currentPoint = action.payload;
    },
    setShowDirectionBox(state, action: PayloadAction<boolean>) {
      state.showDirectionBox = action.payload;
    },
    setDirectionVehicle(state, action: PayloadAction<string>) {
      state.directionVehicle = action.payload;
    },
    setDeleteDirection(state, action: PayloadAction<string>) {
      state.deleteDirection = action.payload;
    },
    setStyleMap(state, action: PayloadAction<string>) {
      state.styleMap = action.payload;
    }
  }
});

export const {
  setValueDistrict,
  setSelectedDistrict,
  setSearchResult,
  setSearchText,
  setItemValue,
  setClickShowMarker,
  setOneMarker,
  setRoute,
  setCurrentPoint,
  setShowDirectionBox,
  setDirectionVehicle,
  setDeleteDirection,
  setStyleMap,
  setDeleteOneMarker
} = itineraryReducer.actions;

export const districtValue = (state: RootState) => state.itineraryReducer.valueDistrict;
export const selectedDistrict = (state: RootState) =>
  state.itineraryReducer.selectedDistrict;
export const searchResult = (state: RootState) => state.itineraryReducer.searchResult;
export const searchText = (state: RootState) => state.itineraryReducer.searchText;
export const itemValue = (state: RootState) => state.itineraryReducer.itemValue;
export const clickShowMarker = (state: RootState) =>
  state.itineraryReducer.clickShowMarker;
export const oneMarker = (state: RootState) => state.itineraryReducer.oneMarker;
export const deleteOneMarker = (state: RootState) =>
  state.itineraryReducer.deleteOneMarker;
export const route = (state: RootState) => state.itineraryReducer.route;
export const currentPoint = (state: RootState) => state.itineraryReducer.currentPoint;
export const showDirectionBox = (state: RootState) =>
  state.itineraryReducer.showDirectionBox;
export const directionVehicle = (state: RootState) =>
  state.itineraryReducer.directionVehicle;
export const deleteDirection = (state: RootState) =>
  state.itineraryReducer.deleteDirection;
export const styleMap = (state: RootState) => state.itineraryReducer.styleMap;

export default itineraryReducer.reducer;
