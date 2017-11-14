import { fetchData } from '../utils/fetchData';
import * as APIs from '../constants/APIs';
import * as types from '../constants/ActionTypes';

export function register(args = {}, callback) {
  const requestParams = {
    args,
    method: 'post',
    url: APIs.API_REGISTER,
    type: types.REGISTER
  };
  return fetchData(requestParams, callback);
}
