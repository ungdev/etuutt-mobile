import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import config from '../../../../services/api/config';
import {
  ACCESS_TOKEN_EXPIRATION_KEY,
  ACCESS_TOKEN_KEY,
  CLIENT_ID_KEY,
  CLIENT_SECRET_KEY,
} from '../../../../services/stockage/StorageKey';

export const useLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const autoLogin = async () => {
    try {
      const token = await getToken();
      if (token) {
        navigation.navigate('MainMenu');
      }
    } catch (event) {
      console.log(event);
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const login = async (url) => {
    const params = url.split('?')[1].split('&');
    const clientId = params[0].split('=')[1];
    const clientSecret = params[1].split('=')[1];
    try {
      await AsyncStorage.setItem(CLIENT_ID_KEY, clientId);
      await AsyncStorage.setItem(CLIENT_SECRET_KEY, clientSecret);
      autoLogin();
    } catch (event) {
      console.log(event);
    }
  };

  const api = axios.create({
    baseURL: config.etu_utt_baseuri + '/api/',
  });

  const getToken = async () => {
    const expiration_date = await AsyncStorage.getItem(ACCESS_TOKEN_EXPIRATION_KEY);
    if (expiration_date !== null && moment().isBefore(expiration_date * 1000)) {
      const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      return token;
    } else {
      return renewAccessToken();
    }
  };

  const renewAccessToken = async () => {
    try {
      const clientId = await AsyncStorage.getItem(CLIENT_ID_KEY);
      const clientSecret = await AsyncStorage.getItem(CLIENT_SECRET_KEY);
      if (!clientId || !clientSecret) return null;
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

  return {
    isModalVisible,
    onCloseModal,
    openModal,
  };
};
