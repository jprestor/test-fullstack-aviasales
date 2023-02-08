import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.API_KEY,
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

export default api;
