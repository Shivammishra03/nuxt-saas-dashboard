export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem('auth_token');
    if (!token && to.name !== 'login') {
      return navigateTo('/login');
    }
  });
  