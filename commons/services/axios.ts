import axios from 'axios';

export const steamApi = axios.create({
  baseURL: process.env.STEAM_API_URL,
  params: { key: process.env.STEAM_API_KEY, language: 'pt_br' }
});

export const appApi = axios.create({
  baseURL: `http://localhost:3000/api`,
});