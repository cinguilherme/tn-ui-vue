<template>
  <div class="user-info">
    <div class="user-details">
      <p>{{ user.name }}</p>
      <p>Credits: {{ user.credit }}</p>
      <p>Status: {{ user.status }}</p>
    </div>
    <q-btn color="negative" @click="logout">Logout</q-btn>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {useUserStore} from 'stores/user-store';

export default defineComponent({
  name: 'LoggedUser',
  data() {
    return {
      userStore: null,
      user: {}
    };
  },
  mounted() {
    this.userStore = useUserStore();
    this.user = this.userStore.getUser();
  },
  methods: {
    async logout() {
      try {
        await this.userStore.logout();
        this.$emit('logout-result', true);
      } catch (e) {
        console.log('error login out');
      }
    },
  },
});
</script>

<style scoped>
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
