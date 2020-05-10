import Cookies from 'js-cookie';
import axios from 'axios';
import Vue from 'vue';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = Cookies.get('token');

if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}
Vue.prototype.api = api;

export default api;
