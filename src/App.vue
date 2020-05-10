<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import BaseLayout from './layouts/BaseLayout.vue';
import AppLayout from './layouts/AppLayout.vue';

export default {
  name: 'App',
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'base'}-layout`;
    },
  },
  components: {
    BaseLayout,
    AppLayout,
  },
};
</script>
<style lang="scss">
  @import '~bulma/bulma';
  @import '~@brightleaf/animate.scss/animate';
  @import 'assets/scss/index';
</style>
