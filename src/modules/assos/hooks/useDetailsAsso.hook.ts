import useAxios from 'axios-hooks';
import { GetAssosList } from '../interfaces/GetAssosList.interface';

export const useDetailsAsso = (name: string) => {
  const [{ data, loading: isLoading, error }] = useAxios<GetAssosList>('public/orgas/' + name);
  return { data, error, isLoading };
};
