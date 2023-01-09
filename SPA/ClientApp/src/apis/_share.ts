import axios from 'axios';
import { API_URL, AXIOS_TIMEOUT } from './constants';

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response
);

export default axiosInstance;

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
}

export interface PaginatedResponse<T> {
  items: T[];
}
