import axios from 'axios';

const API_URL = '';
const AXIOS_TIMEOUT = 100000000;

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'application/json',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Access-Control-Allow-Origin': '*',
  };
  return config;
});

export default axiosInstance;

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  contacts: Contact[];
  description: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  count: number;
  next: string;
  previous: string;
}

export interface Valuable {
  id?: string;
  value: string;
}

export interface Subject {
  id?: string;
  description: string;
}

export interface Education extends Valuable {}

export interface Award extends Valuable {}

export interface Requirements extends Valuable {}

export interface Contact extends Valuable {
  type: ContactType;
}

export enum ContactType {
  Phone,
  Email,
  Telegram,
}
