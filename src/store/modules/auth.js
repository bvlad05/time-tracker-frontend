import cookies from 'js-cookie';
import api from '../../services/api';

export default {
  state: {
    token: cookies.get('token') || '',
  },
  getters: {
    isAuth: (state) => !!state.token,
    token: (state) => state.token,
  },
  mutations: {
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
        commit('clearError');
      } catch (error) {
        commit('setError', error.response.data.message[0].messages[0].id);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    },
    logoutUser({ commit }) {
      commit('clearToken');
    },
  },
};
