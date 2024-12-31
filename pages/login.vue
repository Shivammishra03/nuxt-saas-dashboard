<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label for="email" class="block">Email</label>
                <input v-model="email" type="email" id="email" class="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div class="mb-4">
                <label for="password" class="block">Password</label>
                <input v-model="password" type="password" id="password"
                    class="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = async () => {
  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.post('/api/auth/login', { email: email.value, password: password.value });
    console.log(response.data);
    // debugger
    if (response.data.token) {
      authStore.user = response.user;
      localStorage.setItem('auth_token', response.data.token);
      navigateTo('/dashboard');
    } else {
      alert(response.error || 'Login failed');
    }
    console.log("after error",response);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
</script>
