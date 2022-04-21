<template>
  <main class="flex">
    <section
      class="hidden md:block md:w-1/3 lg:w-1/6 h-screen bg-green-900 text-white"
    >
      <Sidebar />
    </section>
    <section>Main</section>
  </main>
</template>

<script setup>
import Sidebar from './components/sidebar/Sidebar.vue';
</script>
