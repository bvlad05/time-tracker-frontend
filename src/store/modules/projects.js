import api from '../../services/api';

export default {
  state: {
    projects: [],
  },
  getters: {
    projectCount: (state) => state.projects.length,
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      commit('setLoading', true);
      try {
        const { data } = await api.get('projects/private');
        commit('setProjects', data);
        commit('clearError');
      } catch (error) {
        commit('setError', error.statusCode);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    },
  },
};
