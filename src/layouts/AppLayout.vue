<template>
  <div>
    <Header />
    <div class="container is-desktop">
      <transition name="router" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>
