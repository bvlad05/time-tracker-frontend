<template>
  <form @submit.prevent="register" action="#" class="card">
    <div class="card-content">
      <h3 class="title">{{ $t('auth.sign_up') }}</h3>
      <div class="field">
        <label for="name" class="label">{{ $t('account.name') }}</label>
        <div class="control">
          <input
            v-model.trim="$v.name.$model"
            :class="{ 'is-danger': $v.name.$error }"
            id="name"
            class="input"
            type="text"
          >
        </div>
        <p
          v-if="!$v.name.required && $v.name.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.required') }}</p>
        <p
          v-if="!$v.name.minLength && $v.name.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.min_length', {count: $v.name.$params.minLength.min}) }}</p>
      </div>
      <div class="field">
        <label for="email" class="label">{{ $t('account.email') }}</label>
        <div class="control">
          <input
            v-model.trim="$v.email.$model"
            :class="{ 'is-danger': $v.email.$error }"
            id="email"
            class="input"
            type="email"
          >
        </div>
        <p
          v-if="!$v.email.required && $v.email.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.required') }}</p>
        <p
          v-if="!$v.email.email && $v.email.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.email') }}</p>
      </div>
      <div class="field">
        <label for="password" class="label">{{ $t('account.password') }}</label>
        <div class="control">
          <input
            v-model.trim="$v.password.$model"
            :class="{ 'is-danger': $v.password.$error }"
            id="password"
            class="input"
            type="password"
          >
        </div>
        <p
          v-if="!$v.password.required && $v.password.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.required') }}</p>
        <p
          v-if="!$v.password.minLength && $v.password.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.min_length', {count: $v.password.$params.minLength.min}) }}</p>
      </div>
      <div class="field">
        <label for="repeat_password" class="label">{{ $t('account.repeat_password') }}</label>
        <div class="control">
          <input
            v-model.trim="$v.repeatPassword.$model"
            :class="{ 'is-danger': $v.repeatPassword.$error }"
            id="repeat_password"
            class="input"
            type="password"
          >
        </div>
        <p
          v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty"
          class="help is-danger"
        >{{ $t('auth.validation.repeat_password') }}</p>
      </div>
      <article class="message is-danger" v-if="submitStatus">
        <div class="message-body">{{ submitStatus }}</div>
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
            >{{ $t('auth.create_account') }}</button>
          </div>
          <div class="control">
            <router-link
              :to="{name: 'Login'}"
              :disabled="loading"
              class="button is-link is-light"
            >{{ $t('auth.sign_in') }}</router-link>
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
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    submitStatus: null,
  }),
  validations: {
    name: {
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
        this.submitStatus = null;
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        try {
          // await this.$store.dispatch('registerUser', user);
          // await this.$router.push({ name: 'Projects' });
          console.log(user);
        } catch (error) {
          this.submitStatus = error.message;
        }
      }
    },
  },
};
</script>
