<template>
  <div class="w-full">
    <Header title="Users">
      <Button @click="toggleForm()" label="Add User" />
    </Header>
    <Body>
      <Form @close-form="toggleForm()" v-show="showForm" />
      <Table label="User Information">
        <TableHead>
          <TableData v-for="tableLabel in tableLabels">{{
            tableLabel
          }}</TableData>
        </TableHead>
        <TableBody>
          <!-- loop -->
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>Leni Robredo</TableData>
            <TableData>lenirobredo@gmail.com</TableData>
            <TableData>Administrator</TableData>
            <TableData>Yesterday at 2:53 PM</TableData>
          </tr>
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>Leody De Guzman</TableData>
            <TableData>leodydeguzman@gmail.com</TableData>
            <TableData>Administrator</TableData>
            <TableData>Last Tuesday at 8:46 PM</TableData>
          </tr>
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>Panfilo Lacson</TableData>
            <TableData>panfilolacson@gmail.com</TableData>
            <TableData>User</TableData>
            <TableData>Last Tuesday at 7:33 PM</TableData>
          </tr>
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>Isko Moreno</TableData>
            <TableData>iskomoreno@gmail.com</TableData>
            <TableData>User</TableData>
            <TableData>Last Tuesday at 7:16 PM</TableData>
          </tr>
          <!-- endloop -->
        </TableBody>
      </Table>
    </Body>
  </div>
</template>

<script>
import Header from '../../../components/layout/Header.vue';
import Body from '../../../components/layout/Body.vue';
import Button from '../../../components/layout/Button.vue';
import Table from '../../../components/layout/table/Table.vue';
import TableHead from '../../../components/layout/table/TableHead.vue';
import TableBody from '../../../components/layout/table/TableBody.vue';
import TableData from '../../../components/layout/table/TableData.vue';
import Form from './Form.vue';
export default {
  name: 'Users',
  components: {
    Header,
    Body,
    Button,
    Table,
    TableHead,
    TableBody,
    TableData,
    Form,
  },
  data() {
    return {
      showForm: false,
      tableLabels: ['Name', 'Email Address', 'Role', 'Created at'],
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>
