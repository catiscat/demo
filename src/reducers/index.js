import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import settings from './settings';
import register from './register';

const app = combineReducers({
  users,
  auth,
  settings,
  register
});

export default app;
