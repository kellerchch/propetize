import { combineReducers } from 'redux'

import user from './users'
import stuff from './stuff'


export default combineReducers({ user, stuff })