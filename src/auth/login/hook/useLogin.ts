import { useMutation } from 'react-query';
import { dispatch } from 'src/common/redux/store';
import { setAccessToken, setLogin } from '../auth.slice';
import { ILoginCallback } from '../interface';
import { getAuth } from '../service';
export const useAuthlogin = (callback: ILoginCallback) => {
  return {
    ...useMutation(getAuth, {
      onSuccess: (data, context) => {
        if (!data) return;
        const { token } = data.data.response;
        dispatch(setAccessToken('Bearer ' + token));
        dispatch(setLogin(true));
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
