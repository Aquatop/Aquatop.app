import axios from 'axios';

const api = axios.create({ baseURL: 'http://104.248.58.252:80' });

export default api;
