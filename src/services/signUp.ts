import api from './api';

export async function signUp(data:any) {
  let url = `/users/`

  const response = await api.post(url, data);

  return response.data;

}