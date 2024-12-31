// import axios from 'axios';

// export default defineNuxtPlugin(() => {
//   const axiosInstance = axios.create({
//     baseURL: '/api',  // Assuming the API is running on the same server
//   });

//   // You can add token to every request here if necessary
//   axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   });

//   return {
//     provide: {
//       axios: axiosInstance,
//     },
//   };
// });

import axios from 'axios';

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
