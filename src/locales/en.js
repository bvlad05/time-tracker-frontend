export default {
  // Auth
  Auth: {
    form: {
      titles: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
      },
      fields: {
        email: 'E-Mail',
        username: 'Name',
        password: 'Password',
        repeatPassword: 'Repeat password',
      },
      validation: {
        required: 'Field is required',
        minLength: 'Field must have at least {count} letters.',
        repeatPassword: 'Passwords must be identical',
        email: 'Field must be valid email',
      },
      error: {
        username: {
          taken: 'Username is already taken.',
        },
        email: {
          provide: 'Please provide your username or your e-mail.',
          taken: 'Email is already taken.',
        },
        password: {
          provide: 'Please provide your password.',
        },
        invalid: 'Identifier or password invalid.',
      },
      buttons: {
        signIn: 'Sign in',
        signUp: 'Sign up',
        login: 'Login',
        createAccount: 'Create account',
      },
    },
    buy: 'Buy! Hope see you soon 😃',
  },
  Dashboard: {
    hello: 'Hello! Let\'s to work 💪',
    welcome: '👋 Welcome to Time Tracker',
  },
  Error: {
    notFound: {
      title: 'Page not found',
      action: 'Go back',
    },
  },
  // Nav
  Nav: {
    logout: 'Sign out',
    account: 'Account',
    dashboard: 'Dashboard',
    projects: 'Projects',
    clients: 'Clients',
  },
};
