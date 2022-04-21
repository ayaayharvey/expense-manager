<template>
  <div class="bg-white rounded-lg drop-shadow-md text-sm capitalize">
    <h3 class="px-5 py-3 font-semibold text-gray-800 uppercase">
      {{ label }}
    </h3>
    <table class="rounded w-full">
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    label: String,
  },
};
</script>
