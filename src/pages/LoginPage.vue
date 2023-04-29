<template>
  <q-page-container class="row justify-center items-center full-height">
    <login-component />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '../components/LoginComponent.vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  components: {
    LoginComponent,
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          // Navigate to a protected route or update your app state to reflect successful login
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred. Please try again';
      }
    },
  },
});
</script>

<style scoped></style>
