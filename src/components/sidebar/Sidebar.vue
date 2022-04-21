<template>
  <div class="p-5">
    <Navigations :navigations="navigations" />
  </div>
</template>

<script>
import Navigations from './Navigations.vue';

export default {
  name: 'Sidebar',
  components: {
    Navigations,
  },
  data() {
    return {
      navigations: [],
    };
  },
  created() {
    this.navigations = [
      {
        title: 'Dashboard',
        child: [],
      },
      {
        title: 'User Management',
        child: [
          {
            title: 'Roles',
          },
          {
            title: 'Users',
          },
        ],
      },
      {
        title: 'Expense Management',
        child: [
          {
            title: 'Expense Categories',
          },
          {
            title: 'Expenses',
          },
        ],
      },
    ];
  },
};
</script>
