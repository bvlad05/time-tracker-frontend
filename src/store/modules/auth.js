import cookies from 'js-cookie';
import api from '../../services/api';

export default {
  state: {
    token: cookies.get('token') || '',
    user: cookies.get('user') ? JSON.parse(cookies.get('user')) : null,
  },
  getters: {
    isAuth: (state) => !!state.token,
    user: (state) => state.user,
    token: (state) => state.token,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      cookies.set('user', user);
    },
    clearUser(state) {
      state.user = null;
      cookies.remove('user');
    },
    setToken(state, token) {
      state.token = token;
      cookies.set('token', token);
    },
    clearToken(state) {
      state.token = '';
      cookies.remove('token');
      delete api.defaults.headers.common.Authorization;
    },
  },
  actions: {
    async loginUser({ commit }, { email: identifier, password }) {
      commit('setLoading', true);
      try {
        const { data } = await api.post('auth/local', JSON.stringify({ identifier, password }));
        const { jwt: token } = data;
        commit('setToken', token);
        commit('setUser', data.user);
        commit('clearError');
      } catch (error) {
        commit('setError', error.response.data.message[0].messages[0].id);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    },
    async registerUser({ commit }, user) {
      commit('setLoading', true);
      try {
        const { data } = await api.post('auth/local/register', JSON.stringify({ ...user }));
        const { jwt: token } = data;
        commit('setToken', token);
        commit('setUser', data.user);
        commit('clearError');
      } catch (error) {
        commit('setError', error.response.data.message[0].messages[0].id);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    },
    logoutUser({ commit }) {
      commit('clearUser');
      commit('clearToken');
    },
  },
};
