import { combineReducers } from 'redux';
import usuario from './usuario/reducer';
import auth from './auth/reducer';

export default combineReducers({ auth, usuario });
