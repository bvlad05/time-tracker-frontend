<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import AuthLayout from './layouts/AuthLayout.vue';
import AppLayout from './layouts/AppLayout.vue';

export default {
  name: 'App',
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'auth'}-layout`;
    },
  },
  components: {
    AuthLayout,
    AppLayout,
  },
};
</script>
<style lang="scss">
  @import 'assets/index';
</style>
