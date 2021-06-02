import useAxios from 'axios-hooks';
import { GetUEComments } from '../interfaces/getUEComments.interface';

export const useUEComments = (slug: string) => {
  const [{ data, loading: isLoading, error }] = useAxios<GetUEComments>(
    'ues/' + slug + '/comments'
  );

  return { data, error, isLoading };
};
