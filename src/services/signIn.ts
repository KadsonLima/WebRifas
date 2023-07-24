import api from './api';

export async function signIn(data:any) {
  let url = `/auth/sign-in/`

  const response = await api.post(url, data);

  return response.data;

}