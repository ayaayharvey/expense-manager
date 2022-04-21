<template>
  <div class="py-5">
    <div v-for="navigation in navigations">
      <div>
        <a href="#">
          <h3 class="px-3 py-2 hover:bg-gray-400 cursor-pointer">
            {{ navigation.title }}
          </h3>
        </a>
        <div v-for="child in navigation.child" class="px-3">
          <div>
            <a href="#">
              <h3 class="px-3 py-1 hover:bg-gray-400 cursor-pointer">
                {{ child.title }}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
