import Header from '../components/Header.vue';
import Loader from '../components/Loader.vue';

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
    Loader,
  },
};
