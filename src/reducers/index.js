import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './users';
import stuff from './stuff';


export default combineReducers({ user, stuff, form: formReducer });