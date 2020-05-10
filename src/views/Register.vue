<template>
  <form @submit.prevent="register" action="#" class="card animated fadeIn">
    <div class="card-content">
      <h3 class="title">{{ $t('Auth.form.titles.signUp') }}</h3>
      <div class="field">
        <label for="username" class="label">{{ $t('Auth.form.fields.username') }}</label>
        <div class="control has-icons-left">
          <input
            v-model.trim="$v.username.$model"
            :class="{ 'is-danger': $v.username.$error }"
            id="username"
            class="input"
            type="text"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <p
          v-if="!$v.username.required && $v.username.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.required') }}</p>
        <p
          v-if="!$v.username.minLength && $v.username.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.minLength', {count: $v.username.$params.minLength.min}) }}</p>
      </div>
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
        <p
          v-if="!$v.password.minLength && $v.password.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.minLength', {count: $v.password.$params.minLength.min}) }}</p>
      </div>
      <div class="field">
        <label
          for="repeat_password"
          class="label"
        >
          {{ $t('Auth.form.fields.repeatPassword') }}
        </label>
        <div class="control has-icons-left">
          <input
            v-model.trim="$v.repeatPassword.$model"
            :class="{ 'is-danger': $v.repeatPassword.$error }"
            id="repeat_password"
            class="input"
            type="password"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <p
          v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty"
          class="help is-danger"
        >{{ $t('Auth.form.validation.repeatPassword') }}</p>
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
            >{{ $t('Auth.form.buttons.createAccount') }}</button>
          </div>
          <div class="control">
            <router-link
              :to="{name: 'Login'}"
              :disabled="loading"
              class="button is-link is-light"
            >{{ $t('Auth.form.buttons.signIn') }}</router-link>
          </div>
        </div>
      </div>
    </footer>
  </form>
</template>

<script>
import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'Register',
  data: () => ({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  }),
  validations: {
    username: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    async register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch('registerUser', user);
          await this.$router.push({
            name: 'Dashboard',
            query: {
              message: 'Dashboard.welcome',
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
