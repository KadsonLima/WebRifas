import useAsync from '../useAsync';

import * as signIn from '../../services/signIn';

export default function useSignIn() {
  const {
    data: user,
    loading: userLoading,
    error: userError,
    act: getUser,
  } = useAsync(signIn.signIn, false);

  return {
    user,
    userLoading,
    userError,
    getUser,
  };
}