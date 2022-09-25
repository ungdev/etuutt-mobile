import useAxios from 'axios-hooks';

export const useMyUEsList = () => {
  const [{ data, loading: isLoading, error }] = useAxios('public/user/account');

  return { data, error, isLoading };
};
