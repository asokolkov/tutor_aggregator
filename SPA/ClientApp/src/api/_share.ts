import axios from 'axios';
import { API_URL, AXIOS_TIMEOUT } from './constants';

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
  validateStatus: (status) =>
    status === 200 || status === 300 || status === 302,
});

axiosInstance.interceptors.request.use((request) => {
  request.headers = {
    'Content-Type': 'application/json',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Access-Control-Allow-Origin': '*',
  };
  request.timeout = 100000000;
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  if (response.status == 302) {
    console.log(response.headers);
  }
  return response;
});

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

export interface Education {
  id: string;
  description: string;
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
