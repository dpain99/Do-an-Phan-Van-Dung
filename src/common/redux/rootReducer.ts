import featureLocationReducer from './../../feature-locations/slice';
import historyLocationReducer from '../../history-culture/slice';
import foodLocationReducer from '../../food-locations/slice';
import itineraryReducer from './../../my-itinerary/slice';
import nightTravelReducer from '../../night-travels/slice';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authLoginReducer from 'src/auth/login/auth.slice';
import loginReducer from 'src/auth/login/login.slice';

// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'vitadairy',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authLogin', 'login']
};

const rootReducer = combineReducers({
  authLogin: authLoginReducer,
  login: loginReducer,
  featureLocationReducer: featureLocationReducer,
  itineraryReducer: itineraryReducer,
  historyLocationReducer: historyLocationReducer,
  foodLocationReducer: foodLocationReducer,
  nightTravelReducer: nightTravelReducer
});

export { rootPersistConfig, rootReducer };
