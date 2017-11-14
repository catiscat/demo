import { fetchData } from '../utils/fetchData';
import * as APIs from '../constants/APIs';
import * as types from '../constants/ActionTypes';

export function login(args = {}, callback) {
  const requestParams = {
    args,
    method: 'post',
    url: APIs.API_LOGIN,
    type: types.LOGIN
  };
  return fetchData(requestParams, callback);
}
