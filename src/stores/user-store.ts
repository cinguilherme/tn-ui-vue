import {defineStore} from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'John Doe',
    credit: 1000,
    status: 'Active'
  }),
  actions: {
    async logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      return Promise.resolve(true);
    },
    setUser(user: { username: string; credit: number; status: string }) {
      this.name = user.username;
      this.credit = user.credit;
      this.status = user.status;
    },
    getUser() {
      return {
        name: this.name,
        credit: this.credit,
        status: this.status
      }
    }
  }
})
