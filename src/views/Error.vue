<template>
  <div class="has-text-centered">
    <div class="is-size-1-desktop">404</div>
    <h2 class="title">{{ $t('Error.notFound.title') }}</h2>
    <button @click.prevent="goBack" class="button">
      <span class="icon">
        <i class="fas fa-arrow-left"></i>
      </span>
      <span>{{ $t('Error.notFound.action') }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
