<template>
  <div class="px-10 py-8 flex justify-between">
    <h2 class="text-2xl font-semibold text-gray-800">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>
