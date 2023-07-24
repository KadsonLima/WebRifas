import useAsync from '../useAsync';

import * as signUp from '../../services/signUp';

export default function useSignUp() {
  const {
    data: user,
    loading: userLoading,
    error: userError,
    act: getUser,
  } = useAsync(signUp.signUp, false);

  return {
    user,
    userLoading,
    userError,
    getUser,
  };
}