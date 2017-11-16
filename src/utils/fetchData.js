
export function fetchData(requestParams, callback) {
  const { args = {}, type, method, url } = requestParams;
  const params = method === 'get' ? { params: args } : { body: JSON.stringify(args) };
  const fetchResult = fetch(url, {
    method,
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    ...params
  }).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  });

  return (dispatch) => {
    dispatch({
      type: type.concat('_BEGIN')
    });

    const promise = new Promise((resolve, reject) => {
      fetchResult.then(
        (res) => {
          const {
            err
          } = res;
          const result = err ? { status: 'FAILURE', ...res } : { status: 'SUCCESS', ...res };
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
          callback && callback(result);
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
        [variableName]: {
          pending: true,
          error: null
        }
      };
    case type.concat('_SUCCESS'):
      return {
        ...state,
        [variableName]: {
          data: action.data,
          pending: false,
          error: null,
        }
      };
    case type.concat('_FAILURE'):
      return {
        ...state,
        [variableName]: {
          pending: false,
          error: action.data.error,
        }
      };
    case type.concat('_DISMISS'):
      return {
        ...state,
        [variableName]: {
          error: null,
        }
      };
    default:
      return {
        ...state
      };
  }
}
