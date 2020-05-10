<template>
  <div class="container is-desktop">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link
          class="navbar-item has-text-info is-uppercase has-text-weight-bold"
          :to="{name: 'Dashboard'}"
        >
          <img :src="logo" alt="">
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
              <router-link :to="{name: 'Account'}" class="button is-small">
                <span class="icon is-small">
                  <i class="fas fa-user"></i>
                </span>
              </router-link>
              <button class="button is-small" @click="logout">
                <span class="icon is-small">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/images/logo.svg';

export default {
  name: 'Header',
  data: () => ({
    logo,
  }),
  methods: {
    logout() {
      this.$store.dispatch('logoutUser');
      this.$router.push({ name: 'Login', query: { message: 'Auth.buy', type: 'success' } });
    },
  },
};
</script>
