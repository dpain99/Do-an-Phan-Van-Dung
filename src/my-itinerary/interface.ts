export interface MyFeatureProperties {
  name: string;
  id?: number;
  src?: string;
  center?: [number, number];
}

export interface MyFeature extends GeoJSON.Feature {
  properties: MyFeatureProperties;
  geometry: GeoJSON.Point | GeoJSON.LineString | GeoJSON.Polygon;
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
  clickShowMarker: { coordinate: number[]; name: string }[];
  oneMarker: { coordinate: number[]; name: string };
  deleteOneMarker: { coordinate: number[]; name: string };
  route: any;
  currentPoint: number[];
  showDirectionBox: boolean;
  directionVehicle: string;
  deleteDirection: string;
  styleMap: string;
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
