import useAxios from 'axios-hooks';
import { GetAssosList } from '../interfaces/GetAssosList.interface';

export const useMyAssosList = () => {
  const [{ data, loading: isLoading, error }] = useAxios<GetAssosList>(
    'private/user/organizations'
  );

  return { data, error, isLoading };
};
