import api from '@/src/api';

export const checkUserEmail = async (email: string) => {
  const response = await api.post('/counter', { email });
  return response;
};
