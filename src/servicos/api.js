import axios from 'axios';

const api = axios.create({
  baseURL: 'http://easyplan.ddns.net:3333',
  //baseURL: 'http://10.10.254.103:3333',
});

export default api;
