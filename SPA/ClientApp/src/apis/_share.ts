import axios from 'axios';
import { API_URL, AUTH_URL, AXIOS_TIMEOUT } from './constants';

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error.response.status === 401) {
      window.location.replace(
        `${AUTH_URL}?redirect_url=${window.location.pathname}`
      );
    }
    return Promise.reject(error);
  }
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

export interface Job {
  id: string;
  place: string;
  post: string;
}

export interface Subject {
  id: string;
  description: string;
}

export interface Contact {
  id: string;
  type: number;
  value: string;
}

export interface Education {
  id: string;
  description: string;
  beginYear: number;
  graduationYear: number;
}

export interface Award {
  id: string;
  description: string;
  year: number;
}

export interface Lesson {
  id: string;
  price: number;
  confirmed: boolean;
  startTime: Date;
  endTime: Date;
}
