import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

export function fetchData(requestParams, callback) {
  const { args = {}, type, method, url, requestType } = requestParams;
  const requestFunc = requestType === 'jsonp' ? fetchJsonp(url) : axios[method](url, args);
  return (dispatch) => {
    dispatch({
      type: type.concat('_BEGIN')
    });

    const promise = new Promise((resolve, reject) => {
      requestFunc.then(
        (res) => {
          const {
            err
          } = res;
          if (!err) {
            dispatch({
              type: type.concat('_SUCCESS'),
              status: 'SUCCESS',
              data: res
            });
            resolve();
          } else {
            dispatch({
              type: type.concat('_FAILURE'),
              status: 'FAILURE',
              data: res
            });
            reject(err);
          }
          callback && callback(res);
        }
      )
        .catch(
        (err) => {
          dispatch({
            type: type.concat('_FAILURE'),
            data: { error: err }
          });
        }
        );
    });
    return promise;
  };
}


export function dismissFetchDataError(type) {
  return {
    type: type.concat('_DISMISS')
  };
}

export function fetchDataReducer(state, action, type, variableName) {
  switch (action.type) {
    case type.concat('_BEGIN'):
      return {
        ...state,
        pending: true,
        error: null
      };
    case type.concat('_SUCCESS'):
      return {
        ...state,
        pending: false,
        error: null,
        [variableName]: action.data,
      };
    case type.concat('_FAILURE'):
      return {
        ...state,
        pending: false,
        error: action.data.error,
      };
    case type.concat('_DISMISS'):
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state
      };
  }
}
