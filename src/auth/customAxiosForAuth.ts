import axios from 'axios';
import { HOST_API_AUTH } from 'src/config';

// config
import { store } from '../common/redux/store';
import { PATH_AUTH } from '../common/routes/paths';
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API_AUTH
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error.response;
    if (response?.status === 401 && response?.data?.meta?.status === 1003) {
      window.location.href = PATH_AUTH.login;
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(async (config) => {
  const token = store.getState()?.authLogin.accessToken;
  if (token) {
    try {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    } catch (e) {
      console.log(e);
    }
  }
  return {
    ...config,
  };
});
export default axiosInstance;
