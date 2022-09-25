import useAxios from 'axios-hooks';
import { GetUE } from '../interfaces/getUE.interface';

export const useUEDetails = (slug: string) => {
  const [{ data, loading: isLoading, error }] = useAxios<GetUE>('ues/' + slug);

  return { data, error, isLoading };
};
