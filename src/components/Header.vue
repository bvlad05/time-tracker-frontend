<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
        class="navbar-item has-text-info is-uppercase has-text-weight-bold"
        :to="{name: 'Dashboard'}"
      >
        Time Tracker
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'Dashboard'}" class="navbar-item" exact>Dashboard</router-link>
        <router-link :to="{name: 'Projects'}" class="navbar-item" exact>Projects</router-link>
        <router-link :to="{name: 'Clients'}" class="navbar-item" exact>Clients</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              :to="{name: 'Account'}"
              class="button is-light"
            >{{ $t('account.account') }}</router-link>
            <button class="button is-light" @click="logout">{{ $t('account.logout') }}</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      // this.$store.dispatch('logoutUser');
      // this.$router.push({ name: 'Login', query: { message: 'goodBuy', type: 'success' } });
    },
  },
};
</script>
