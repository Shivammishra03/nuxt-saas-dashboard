<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">User Dashboard (User ID: {{ userId }})</h1>
  
      <!-- Display error message if any -->
      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>
  
      <!-- Display stats if they exist -->
      <div v-if="stats">
        <h2 class="text-xl">Statistics</h2>
        <ul>
          <li>Total Sales: {{ stats.totalSales }}</li>
          <li>Active Users: {{ stats.activeUsers }}</li>
          <li>Revenue: ${{ stats.revenue }}</li>
        </ul>
      </div>
  
      <!-- Display recent activities -->
      <div v-if="recentActivities.length">
        <h2 class="text-xl mt-6">Recent Activities</h2>
        <ul>
          <li v-for="activity in recentActivities" :key="activity.id">
            {{ activity.activity }} - {{ activity.timestamp }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, useRoute } from 'vue';
  
  const route = useRoute();  // Access the dynamic userId from the route parameters
  const stats = ref(null);
  const recentActivities = ref([]);
  const error = ref(null);
  
  const userId = route.params.userId;  // Get the userId from the URL
  
  definePageMeta({
    middleware: 'auth',  // Ensure this page requires the user to be authenticated
  });
  
  onMounted(async () => {
    try {
      const { $axios } = useNuxtApp();
      // Fetch data for the userId from the route
      const { data } = await $axios.get(`/api/dashboard/${userId}`);
  
      stats.value = data.stats;
      recentActivities.value = data.recentActivities;
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      error.value = 'Failed to load dashboard data. Please try again later.';
    }
  });
  </script>
  