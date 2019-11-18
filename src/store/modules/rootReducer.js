import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  toast,
});
