<template>
  <form @submit.prevent="login" action="#" class="card animated fadeIn">
    <div class="card-content">
      <h3 class="title">{{ $t('Auth.form.titles.signIn') }}</h3>
      <div class="field">
        <label for="email" class="label">{{ $t('Auth.form.fields.email') }}</label>
        <div class="control has-icons-left">
          <input
            v-model.trim="$v.email.$model"
            :class="{ 'is-danger': $v.email.$error }"
            id="email"
            class="input"
            type="email"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <p
          v-if="!$v.email.required && $v.email.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.required') }}</p>
        <p
          v-if="!$v.email.email && $v.email.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.email') }}</p>
      </div>
      <div class="field">
        <label for="password" class="label">{{ $t('Auth.form.fields.password') }}</label>
        <div class="control has-icons-left">
          <input
            v-model.trim="$v.password.$model"
            :class="{ 'is-danger': $v.password.$error }"
            id="password"
            class="input"
            type="password"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <p
          v-if="!$v.password.required && $v.password.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.required') }}</p>
      </div>
      <article class="message is-danger" v-if="error">
        <div class="message-body">{{ $t(error) }}</div>
      </article>
    </div>
    <footer class="card-footer">
      <div class="card-content">
        <div class="field is-grouped">
          <div class="control">
            <button
              :class="{ 'is-loading': loading }"
              :disabled="loading"
              class="button is-link"
            >{{ $t('Auth.form.buttons.login') }}</button>
          </div>
          <div class="control">
            <router-link
              :to="{name: 'Register'}"
              :disabled="loading"
              class="button is-link is-light"
            >{{ $t('Auth.form.buttons.signUp') }}</router-link>
          </div>
        </div>
      </div>
    </footer>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: {
      required,
      email,
    },
    password: { required },
  },
  mounted() {
    if (this.$route.query.message) {
      const { message, type } = this.$route.query;
      this.$toast.open({
        message: this.$t(message),
        type,
      });
    }
  },
  methods: {
    async login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.$store.dispatch('loginUser', {
            email: this.email,
            password: this.password,
          });
          await this.$router.push({
            name: 'Dashboard',
            query: {
              message: 'Dashboard.hello',
              type: 'success',
            },
          });
        } catch (error) {
          // Dummy
        }
      }
    },
  },
};
</script>
