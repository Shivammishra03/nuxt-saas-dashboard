<script setup>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
</script>
<template>
  <div class="min-h-screen bg-gray-100">
    <header>
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>