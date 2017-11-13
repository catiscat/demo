import { combineReducers } from 'redux';
import users from './users';
import login from './login';
import settings from './settings';

const app = combineReducers({
  users,
  login,
  settings
});

export default app;
