import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from './apiConstants';

export const makeAPIRequest = ({
  method,
  url,
  data,
  params,
  header,
  token = true,
}) =>
  new Promise(async (resolve, reject) => {
    const access_token = await AsyncStorage.getItem('idToken');

    const apiHeader = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      ...(header && header),
      ...(token && {Authorization: `${access_token}`}),
    };
    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers: apiHeader,
      params,
    };
    axios(option)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
