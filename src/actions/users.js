import { fetchData } from '../utils/fetchData';
import * as APIs from '../constants/APIs';
import * as types from '../constants/ActionTypes';

export function getUsers(args = {}, callback) {
  const requestParams = {
    args,
    method: 'get',
    url: APIs.API_GET_USERS,
    type: types.FETCH_USERS,
    requestType: 'jsonp',
  };
  return fetchData(requestParams, callback);
}
