import axiosInstance from 'src/common/utils/axios';
import { IAuth } from './interface';

export const getAuth = (params: IAuth) => {
  return axiosInstance.post('authenticate', params);
};
export const getLogout = () => {
  return axiosInstance.delete('admin/logout');
};
