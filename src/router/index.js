import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Roles from '../views/user-management/roles/Roles.vue';
import Users from '../views/user-management/users/Users.vue';
import ExpenseCategories from '../views/expense-management/ExpenseCategories.vue';
import Expenses from '../views/expense-management/Expenses.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/user-management/roles',
    name: 'Roles',
    component: Roles,
  },
  {
    path: '/user-management/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/expense-management/expense-categories',
    name: 'ExpenseCategories',
    component: ExpenseCategories,
  },
  {
    path: '/expense-management/expenses',
    name: 'Expenses',
    component: Expenses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
