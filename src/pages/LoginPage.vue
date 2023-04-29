<template>
  <q-page-container class="row justify-center items-center full-height">
    <login-component
      :on-auth="authenticate"
      @login-result="handleLoginResult"
    />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '../components/LoginComponent.vue';
import { authenticate } from '../auth.js';

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
    authenticate,
    handleLoginResult(success: any) {
      if (success) {
        this.$router.push({ name: 'Operations' });
      }
    },
  },
});
</script>

<style scoped></style>
