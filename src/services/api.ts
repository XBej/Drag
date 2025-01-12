import axios from 'axios';

const API_URL = 'https://apisn-jet.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          localStorage.removeItem('apiKey');
          window.location.href = '/login';
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const register = (userData: {
  name: string;
  phoneNumber: string;
  email: string;
  username: string;
  password: string;
}) => api.post('/register', userData);

export const login = (credentials: { email: string; password: string }) =>
  api.post('/login', credentials);

// User APIs
export const getProfile = () => api.get('/profile');

// Gift Code APIs
export const redeemGiftCode = (codeValue: string) =>
  api.post('/giftcode/redeem', { codeValue });

export default api;

