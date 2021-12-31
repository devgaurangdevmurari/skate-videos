import {SET_USER_DETAIL} from '../actions/types';

const INITIAL_STATE = {
  userDetails: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {...state, userDetails: action.payload};
    default:
      return state;
  }
};
