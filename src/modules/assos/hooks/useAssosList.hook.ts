import useAxios from 'axios-hooks';
import { GetAssosList } from '../interfaces/GetAssosList.interface';

export const useAssosList = () => {
  const [{ data, loading: isLoading, error }] = useAxios<GetAssosList>('orgas');

  return { data, error, isLoading };
};
