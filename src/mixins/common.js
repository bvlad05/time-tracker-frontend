import Header from '../components/Header.vue';

export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
  },
  components: {
    Header,
  },
};
