import Axios, { AxiosInstance } from 'axios';
import { configure } from 'axios-hooks';
import { getAccessToken } from '../../authentification/services/authentification.service';
import config from '../config';
export let axios: AxiosInstance;

export const setupAxiosClient = () => {
  axios = Axios.create({
    baseURL: config.etu_utt_baseuri + '/api/',
  });

  // add accessToken to header
  //permet de savoir ce qu'on fait pour les requêtes (ce qu'on fait avant et en cas d'erreur)
  //avant chaque requête, on recupère le token => dans le header
  axios.interceptors.request.use(
    async (config) => {
      try {
        const accessToken = await getAccessToken();

        if (accessToken) {
          config.headers = {
            authorization: `Bearer ${accessToken}`,
          };
        }

        return config;
      } catch (error) {
        return config;
      }
    },
    (error) => Promise.reject(error)
  );

  // if response is 401, refresh token
  //interceptor est appelé à un moment donné
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config } = error;

      if (error.response.status === 401 && !config._retry) {
        config._retry = true;
        try {
          const accessToken = await getAccessToken();

          if (accessToken) {
            config.headers = {
              authorization: `Bearer ${accessToken}`,
            };
          }
          if (axios === null) {
            return Promise.reject(error);
          }

          return axios(config);
        } catch (error) {}
      }

      return Promise.reject(error);
    }
  );

  configure({ axios });
};
