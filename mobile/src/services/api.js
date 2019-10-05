import axios from 'axios';
import localhostConfig from '../config/localhost';

const api = axios.create({
  baseURL: `http://${localhostConfig.LOCALHOST}:3333`,
});

export default api;
