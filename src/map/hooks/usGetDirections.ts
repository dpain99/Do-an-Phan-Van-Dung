import { useQuery } from 'react-query';
import { DirectionsParams } from '../interface';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { directionsApi } from '../service';

export const useGetDirections = (params: DirectionsParams) => {
  return {
    ...useQuery([QUERY_KEYS.MAP_DIRECTIONS, params], () => directionsApi(params))
  };
};
