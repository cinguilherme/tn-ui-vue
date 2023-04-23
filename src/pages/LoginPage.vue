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
  components: {
    LoginComponent,
  },
});
</script>

<style scoped></style>
