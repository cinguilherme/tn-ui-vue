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
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'LoginComponent',
  props: {
    onAuth: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      bannerType: 'negative',
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        const result: { success: boolean, user: unknown } = await this.onAuth(this.username, this.password);
        this.loading = false;

        if (result.success) {
          this.errorMessage = '';
          this.bannerType = 'positive';
          this.$emit('login-result', result);
        }
      } catch (e) {
        console.log(e);
        this.bannerType = 'negative';
        this.errorMessage = 'Invalid username or password';
        this.$emit('login-result', false);
      } finally {
        this.loading = false;
        this.bannerMessage = 'Invalid username or password';
      }
    },
  },
  setup() {
    const bannerMessage = ref('');
    const required = (val: string | null) =>
      (val && val.length > 0) || 'Field is required';

    return {
      bannerMessage,
      required,
    };
  },
});
</script>
