<template>
  <div class="container is-widescreen">
    <div class="columns is-desktop is-flex is-v-centered is-centered min-100vh">
      <div class="column is-two-fifths">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>
