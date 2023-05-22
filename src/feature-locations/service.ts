import axiosInstance from 'src/common/utils/axios';
import { directionParams } from './interface';

export const getDirection = (params: directionParams) => {
  return axiosInstance.get(
    `directions/v5/mapbox/${params.vehicle}/${params.coordinate}`,
    {
      params: {
        geometries: params.geometries,
        access_token: params.access_token
      }
    }
  );
};
