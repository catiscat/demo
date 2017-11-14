import { combineReducers } from 'redux';
import users from './users';
import login from './login';
import settings from './settings';
import register from './register';

const app = combineReducers({
  users,
  login,
  settings,
  register
});

export default app;
