import { FETCH_USERS } from '../constants/ActionTypes';


const initialState = {
  data: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {
        status: action.status,
        data: action.items
      });
    default:
      return state;
  }
}
