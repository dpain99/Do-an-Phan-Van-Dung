import { useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { getSearch } from '../service';

export const useGetSearch = (params: string) => {
  const queryClient = useQueryClient();

  const query = useQuery([QUERY_KEYS.SEARCH_LOCATION, params], () => getSearch(params));

  const setSearchData = (data: any) => {
    const queryKey = [QUERY_KEYS.SEARCH_LOCATION, params];
    queryClient.setQueryData(queryKey, data);
    queryClient.invalidateQueries(queryKey);
  };

  return {
    ...query,
    setSearchData
  };
};
