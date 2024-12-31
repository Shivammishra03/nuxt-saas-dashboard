import { defineStore } from 'pinia';
import { useFetch } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as object | null,
    token: null as string | null,
  }),
  actions: {
    async login(credentials: { email: string, password: string }) {
      try {
        // Make the API request for login
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials,
        });
        this.user = response.user;
        this.token = response.token;
        // Save token in local storage for persistence
        localStorage.setItem('auth_token', response.token);
      } catch (error) {
        console.error('Login failed', error);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('auth_token');
    },
  },
});
