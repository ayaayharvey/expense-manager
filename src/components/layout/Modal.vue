<template>
  <section
    class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full"
  >
    <div
      class="p-5 shadow-lg rounded-md bg-white max-h-80 min-h-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="`${
        size !== 'modal-2xl'
          ? size !== 'modal-xl'
            ? size !== 'modal-lg'
              ? size !== 'modal-md'
                ? size !== 'modal-sm'
                  ? 'w-screen-20'
                  : 'w-screen-30'
                : 'w-screen-40'
              : 'w-screen-50'
            : 'w-screen-60'
          : 'w-screen-70'
      }`"
    >
      <!-- Modal Header -->
      <div class="pb-2 flex justify-between items-center">
        <div class="font-semibold">
          {{ label }}
        </div>
        <i
          @click="$emit('close-modal')"
          class="fas fa-times cursor-pointer"
        ></i>
      </div>
      <!-- Modal Content -->
      <div class="py-1">
        <slot />
      </div>
      <!-- Modal Footer -->
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    label: String,
    size: String,
  },
};
</script>
