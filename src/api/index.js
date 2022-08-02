import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://loumar-api.herokuapp.com/'
});



export default api;