import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authLoginReducer from 'src/auth/login/auth.slice';
import loginReducer from 'src/auth/login/login.slice';

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'vitadairy',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authLogin', 'login'],
};

const rootReducer = combineReducers({
  authLogin: authLoginReducer,
  login: loginReducer,
});

export { rootPersistConfig, rootReducer };
