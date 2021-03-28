import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import moment from 'moment';
import {
  ACCESS_TOKEN_EXPIRATION_KEY,
  ACCESS_TOKEN_KEY,
  CLIENT_ID_KEY,
  CLIENT_SECRET_KEY,
} from '../stockage/StorageKey';
import config from './config';

export const useApi = () => {
  const api = axios.create({
    baseURL: config.etu_utt_baseuri + '/api/',
  });

  const getToken = async () => {
    const expiration_date = await AsyncStorage.getItem(ACCESS_TOKEN_EXPIRATION_KEY);
    if (expiration_date !== null && moment().isBefore(expiration_date * 1000)) {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      return token;
    } else {
      return renewAccessToken();
    }
  };

  const renewAccessToken = async () => {
    try {
      let clientId = await AsyncStorage.getItem(CLIENT_ID_KEY);
      let clientSecret = await AsyncStorage.getItem(CLIENT_SECRET_KEY);
      if (!clientId || !clientSecret) return null;
      const res = await api.post(
        `oauth/token?grant_type=client_credentials&scope=${config.etu_utt_scope}&client_id=${clientId}&client_secret=${clientSecret}`
      );

      await AsyncStorage.setItem(ACCESS_TOKEN_KEY, res.data.access_token);
      await AsyncStorage.setItem(ACCESS_TOKEN_EXPIRATION_KEY, res.data.expires);
      return res.data.access_token;
    } catch (e) {
      console.log(e);
      throw 'NO_TOKEN';
    }
  };

  return {
    api,
    getToken,
    renewAccessToken,
  };
};
