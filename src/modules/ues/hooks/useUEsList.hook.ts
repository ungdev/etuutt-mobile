import useAxios from 'axios-hooks';

export const useUEsList = () => {
  const [{ data, loading: isLoading, error }] = useAxios('ues');

  return { data, error, isLoading };
};
