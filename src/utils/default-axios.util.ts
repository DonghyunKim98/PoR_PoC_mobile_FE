import axios from 'axios';

// TODO : Fix the baseURL

export const defaultAxios = axios.create({
  baseURL: 'http://211.176.107.254:8000/',
  withCredentials: true,
});
