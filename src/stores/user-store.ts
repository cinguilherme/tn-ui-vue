import {defineStore} from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'John Doe',
    credit: 1000,
    status: 'Active',
    cumulated: 0,
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
    setCumulated(balance: number) {
      this.cumulated = balance;
    },
    getUser() {
      return {
        name: this.name,
        credit: this.credit,
        status: this.status,
        cumulated: this.cumulated,
      }
    }
  }
})
