import * as types from '../constants/ActionTypes';
import { fetchDataReducer } from '../utils/fetchData';


export default function users(state, action) {
  return fetchDataReducer(state, action, types.FETCH_USERS, 'userList');
}
