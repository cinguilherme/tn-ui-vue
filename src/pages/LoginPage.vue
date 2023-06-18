<template>
  <q-page-container class="row justify-center items-center full-height">
    <login-component
      :on-auth="authenticate"
      @login-result="handleLoginResult"
    />
  </q-page-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoginComponent from '../components/LoginComponent.vue';
import {authenticate} from '../auth.js';
import {useUserStore} from 'stores/user-store';

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
    handleLoginResult(data: { success: boolean, user: { username: string, credit: number, status: string }}) {
      if (data.success) {
        useUserStore().setUser(data.user);
        this.$router.push({name: 'Operations'});
      }
    },
  },
});
</script>

<style scoped></style>
