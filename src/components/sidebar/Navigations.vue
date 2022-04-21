<template>
  <div v-for="navigation in navigations">
    <div class="px-3 py-1">
      <h3>
        <a href="#">{{ navigation.title }}</a>
      </h3>
      <div v-for="child in navigation.child">
        <div class="px-3 py-1">
          <h3>
            <a href="#">{{ child.title }}</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navigations: Array,
  },
};
</script>
