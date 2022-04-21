<template>
  <div class="w-full">
    <Header title="Dashboard">
      <Button @click="toggleForm()" label="Add Roles" />
    </Header>
    <Body>
      <Modal
        @close-form="toggleForm()"
        v-show="showForm"
        label="Add Modal"
        size="modal-md"
      >
        asdjflasdasd
      </Modal>
      <Table label="Dashboard">
        <TableHead>
          <TableData>Song</TableData>
          <TableData>Song</TableData>
          <TableData>Song</TableData>
        </TableHead>
        <TableBody>
          <!-- loop -->
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>asdfsadf</TableData>
            <TableData>asdfasdfasdf</TableData>
            <TableData>Soasdfasdfng</TableData>
          </tr>
          <tr class="odd:bg-white even:bg-gray-100">
            <TableData>asdfsadf</TableData>
            <TableData>asdfasdfasdf</TableData>
            <TableData>Soasdfasdfng</TableData>
          </tr>
          <!-- endloop -->
        </TableBody>
      </Table>
    </Body>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Body from '../components/layout/Body.vue';
import Button from '../components/layout/Button.vue';
import Table from '../components/layout/table/Table.vue';
import TableHead from '../components/layout/table/TableHead.vue';
import TableBody from '../components/layout/table/TableBody.vue';
import TableData from '../components/layout/table/TableData.vue';
import Modal from '../components/layout/Modal.vue';
export default {
  name: 'Dashboard',
  components: {
    Header,
    Body,
    Button,
    Table,
    TableHead,
    TableBody,
    TableData,
    Modal,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>
