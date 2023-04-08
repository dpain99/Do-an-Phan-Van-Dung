import axios from 'src/auth/customAxiosForAuth';
import { IAuth } from './interface';

export const getAuth = (params: IAuth) => {
  return axios.post('authenticate', params);
};
export const getLogout = () => {
  return axios.delete('admin/logout');
};
