import useAxios from 'axios-hooks';
import { GetAssosListSimple } from '../interfaces/getAssosSimple.interface';

export const useAssosListSimple = () => {
  const [{ data, loading: isLoading, error }] = useAxios<GetAssosListSimple>('/public/listorgas');

  return { data, error, isLoading };
};
