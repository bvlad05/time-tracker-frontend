import api from '../../services/api';

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async loginUser({ commit }, { identifier, password }) {
      commit('setLoading', true);
      try {
        const { data } = await api.post('auth/local', JSON.stringify({
          identifier,
          password,
        }));
        commit('setUser', data.user);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
  },
};
