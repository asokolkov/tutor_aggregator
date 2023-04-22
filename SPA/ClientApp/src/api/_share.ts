import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const AXIOS_TIMEOUT = 100000000;

const axiosInstance = axios.create({
  timeout: AXIOS_TIMEOUT,
  baseURL: API_URL,
  validateStatus: (status) =>
    status === 200 || status === 300 || status === 302,
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
  id?: string;
  firstName: string;
  lastName: string;
  avatar: string;
  contacts: Contact[];
  description: string;
}

export interface PaginatedResponse<T> {
  items: T[];
}

export interface IValuable {
  id?: string;
  value: string;
}

export interface Subject {
  id?: string;
  description: string;
}

export interface Education extends IValuable {}

export interface Award extends IValuable {}

export interface Requirements extends IValuable {}

export interface Contact extends IValuable {
  type: ContactType;
}

export enum ContactType {
  Phone,
  Email,
  Telegram,
}
