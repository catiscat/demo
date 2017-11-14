import * as types from '../constants/ActionTypes';

const initialState = {
  data: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        status: action.status
      });
    case types.LOUGOUT:
      return Object.assign({}, state, {
        status: action.status
      });
    case types.RESET_PASSWORD:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
}
