<template>
  <div class="base-wrapper">
    <div class="container is-widescreen">
      <div class="columns is-desktop is-flex is-v-centered is-centered min-100vh">
        <div class="column is-two-fifths">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>

<style scoped lang="scss">
  .base-wrapper {
    min-height: 100vh;
    background: #415E72;
    // url('../assets/images/base-background-1.jpg') no-repeat center / cover;
  }
</style>
