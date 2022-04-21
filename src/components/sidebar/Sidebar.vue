<template>
  <div class="p-5">
    <Profile />
    <Navigations :navigations="navigations" />
  </div>
</template>

<script>
import Profile from './profile/Profile.vue';
import Navigations from './navigations/Navigations.vue';

export default {
  name: 'Sidebar',
  components: {
    Profile,
    Navigations,
  },
};
</script>
