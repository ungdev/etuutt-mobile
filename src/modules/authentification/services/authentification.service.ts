import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import moment from 'moment';
import {
  ACCESS_TOKEN_EXPIRATION_KEY,
  ACCESS_TOKEN_KEY,
  CLIENT_ID_KEY,
  CLIENT_SECRET_KEY,
} from '../../../services/stockage/StorageKey';
import config from '../../api/config';

export const api = axios.create({
  baseURL: config.etu_utt_baseuri + '/api/',
});

export const getAccessToken = async () => {
  const expiration_date = await AsyncStorage.getItem(ACCESS_TOKEN_EXPIRATION_KEY);
  if (expiration_date !== null && moment().isBefore(Number(expiration_date) * 1000)) {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    console.log('token = ', token);

    return token;
  } else {
    return renewAccessToken();
  }
};

const renewAccessToken = async () => {
  try {
    const clientId = await AsyncStorage.getItem(CLIENT_ID_KEY);
    const clientSecret = await AsyncStorage.getItem(CLIENT_SECRET_KEY);
    console.log('client=', clientId);
    console.log('secret=', clientSecret);
    if (!clientId || !clientSecret) {
      return null;
    }
    const res = await api.post(
      `oauth/token?grant_type=client_credentials&scope=${config.etu_utt_scope}&client_id=${clientId}&client_secret=${clientSecret}`
    );

    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, res.data.access_token);
    await AsyncStorage.setItem(ACCESS_TOKEN_EXPIRATION_KEY, res.data.expires);

    return res.data.access_token;
  } catch (event) {
    console.log(event);
    throw 'NO_TOKEN';
  }
};
