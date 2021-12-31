import {makeAPIRequest} from '../helpers/globalFunctions';
import {api, GET} from '../helpers/apiConstants';
import {SET_USER_DETAIL} from './types';

export const getUserInfo = request => async () => {
  return makeAPIRequest({
    method: GET,
    url: api.userInfo,
  })
    .then(response => {
      if (request.onSuccess) request.onSuccess(response);
      dispatch({type: SET_USER_DETAIL, payload: response.data?.data});
    })
    .catch(error => {
      if (request.onFail) request.onFail(error.response.data);
    });
};
