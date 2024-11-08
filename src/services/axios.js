import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true
})

export const csrf = axios.create({
  baseURL: import.meta.env.VITE_CSRF_URL,
  withCredentials: true,
  withXSRFToken: true
})

export const exerciseApi = axios.create({
  baseURL: import.meta.env.VITE_EXERCISE_API_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_EXERCISE_API_KEY
  }
})

export const quoteApi = axios.create({
  baseURL: import.meta.env.VITE_QUOTE_API_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY
  }
})