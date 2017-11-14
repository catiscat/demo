import axios from 'axios';

export function fetchData(requestParams, callback) {
  const { args = {}, type, method, url } = requestParams;
  return (dispatch) => {
    dispatch({
      type: type.concat('_BEGIN')
    });

    const promise = new Promise((resolve, reject) => {
      const paramsName = method === 'get' ? 'params' : 'data';
      axios[method](url, {
        [paramsName]: args,
      })
        .then(
        (res) => {
          const {
            code,
            message = '',
          } = res.data;
          if (code === '200000') {
            dispatch({
              type: type.concat('_SUCCESS'),
              data: res.data
            });
            resolve();
          } else {
            dispatch({
              type: type.concat('_FAILURE'),
              data: { error: message }
            });
            reject(message);
          }
          callback && callback(res.data);
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
