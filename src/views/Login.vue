<template>
  <form @submit.prevent="login" action="#" class="card">
    <div class="card-content">
      <h3 class="title">{{ $t('auth.sign_in') }}</h3>
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
            >{{ $t('auth.login') }}</button>
          </div>
          {{ loading }}
          <div class="control">
            <router-link
              :to="{name: 'Register'}"
              :disabled="loading"
              class="button is-link is-light"
            >{{ $t('auth.sign_up') }}</router-link>
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
    email: 'vlad.bond05+1@gmail.com',
    password: 'g22g5gyc',
    submitStatus: null,
  }),
  validations: {
    email: {
      required,
      email,
    },
    password: { required },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  mounted() {
    if (this.$route.query.message) {
      const { message, type } = this.$route.query;
      this.$toast.open({
        message: this.$t(`auth.${message}`),
        type,
      });
    }
  },
  methods: {
    async login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitStatus = null;
        const user = {
          identifier: this.email,
          password: this.password,
        };
        try {
          const { data } = await this.$store.dispatch('loginUser', user);
          console.log(data);
          // await this.$router.push({ name: 'Projects' });
        } catch (error) {
          this.submitStatus = error.message;
        }
      }
    },
  },
};
</script>
