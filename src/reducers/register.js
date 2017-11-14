import * as types from '../constants/ActionTypes';

const initialState = {
  data: []
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER:
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
}