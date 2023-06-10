import axios from 'axios';

const API_URL = '';
const AXIOS_TIMEOUT = 100000000;

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosInstance;
