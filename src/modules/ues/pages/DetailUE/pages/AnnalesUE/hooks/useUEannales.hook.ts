import useAxios from 'axios-hooks';
import { GetUEAnnales } from '../interfaces/getUEAnnales.interface';

export const useUEAnnales = (slug: string) => {
  const [{ data, loading: isLoading, error }] = useAxios<GetUEAnnales>('ues/' + slug + '/reviews');

  return { data, error, isLoading };
};
