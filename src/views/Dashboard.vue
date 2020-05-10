<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted() {
    if (this.$route.query.message) {
      const { message, type } = this.$route.query;
      this.$toast.open({
        message: this.$t(message),
        type,
      });
    }
  },
};
</script>
