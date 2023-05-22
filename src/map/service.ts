import axiosInstance from 'src/common/utils/axios';
import { DirectionsParams, IDataReturnDirections } from './interface';

export const directionsApi = (params: DirectionsParams) => {
  return axiosInstance.get<unknown, IDataReturnDirections>(
    `directions/v5/mapbox/${params.vehicle}/${params.coordinates}`,
    { params: params }
  );
};
