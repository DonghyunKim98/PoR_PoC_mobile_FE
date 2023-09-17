import axios from 'axios';

// TODO : Fix the baseURL

export const defaultAxios = axios.create({
  baseURL: 'http://218.238.83.130/',
  withCredentials: true,
});
