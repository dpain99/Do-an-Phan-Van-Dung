export interface MyFeatureProperties {}

export interface MyFeature extends GeoJSON.Feature {
  properties: MyFeatureProperties;
}

export interface MyFeatureCollection extends GeoJSON.FeatureCollection {
  features: MyFeature[];
}

export interface IValueDistrict {
  idDistrict: number;
  isTurnOn: boolean;
}

export interface IStateSlice {
  valueDistrict: IValueDistrict[];
  selectedDistrict: number[];
  searchResult: number[];
  searchText: string;
  itemValue: any;
}

export interface IDataDistrict {
  src: string;
  layer: string;
  color: string;
  id: number;
  value: MyFeatureCollection;
}

export interface ICallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}
