import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 300
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true
})

api.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});


api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);


export const csrf = axios.create({
  baseURL: import.meta.env.VITE_CSRF_URL,
  withCredentials: true,
  withXSRFToken: true
})

export const quoteApi = axios.create({
  baseURL: import.meta.env.VITE_QUOTE_API_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY
  }
})