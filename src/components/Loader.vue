<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/variables';
  @keyframes loader-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .loader {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 3px solid $light;
    border-radius: 50%;
    border-top-color: $primary;
    animation: loader-rotate .4s ease-in-out infinite;
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
    }
  }
</style>
