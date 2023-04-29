<template>
  <div class="login-component q-pa-md">
    <q-card class="q-ma-md">
      <q-card-section>
        <div class="text-h5 text-center">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="submitForm" class="q-gutter-md">
          <q-input
            v-model="username"
            label="Username"
            type="text"
            :rules="[required]"
            filled
            class="text-center"
          />

          <q-input
            v-model="password"
            label="Password"
            type="password"
            :rules="[required]"
            filled
            class="text-center"
          />

          <q-card-actions>
            <div class="full-width q-mt-md">
              <q-btn
                :loading="loading"
                type="submit"
                label="Login"
                color="primary"
                class="full-width"
              />
            </div>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>

    <q-banner v-if="bannerMessage" class="q-mt-md" :type="bannerType">
      {{ bannerMessage }}
    </q-banner>
  </div>
</template>

<style scoped>
.login-component {
  max-width: 400px;
  margin: 0 auto;
}

.full-width {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const username = ref('');
    const password = ref('');
    const loading = ref(false);
    const bannerMessage = ref('');
    const bannerType = ref('');
    const router = useRouter();

    const required = (val: string | null) =>
      (val && val.length > 0) || 'Field is required';

    async function submitForm() {
      loading.value = true;
      bannerMessage.value = '';

      try {
        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        });

        loading.value = false;

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          router.push({ name: 'Operations' });
        } else {
          bannerMessage.value = 'Invalid username or password';
          bannerType.value = 'negative';
        }
      } catch (error) {
        console.error('Error during login:', error);
        loading.value = false;
        bannerMessage.value = 'An error occurred. Please try again';
        bannerType.value = 'negative';
      }
    }

    return {
      username,
      password,
      loading,
      bannerMessage,
      bannerType,
      required,
      submitForm,
    };
  },
});
</script>
