<template>
  <Modal @close-modal="onClose()" label="Add Modal">
    <Textbox label="Name" placeholder="Enter your name" />
    <Textbox label="Email Address" placeholder="Enter your email address" />
    <Dropdown label="Role" :selections="roles" ref="role" />
  </Modal>
</template>

<script>
import Modal from '../../../components/layout/Modal.vue';
import Textbox from '../../../components/layout/Textbox.vue';
import Dropdown from '../../../components/layout/Dropdown.vue';
export default {
  name: 'Form',
  components: {
    Modal,
    Textbox,
    Dropdown,
  },
  data() {
    return {
      roles: [],
    };
  },
  methods: {
    onClose() {
      this.$emit('close-form');
      this.$refs.role.resetForm();
    },
  },
  created() {
    this.roles = [
      {
        id: 1,
        label: 'Administrator',
      },
      {
        id: 2,
        label: 'User',
      },
      {
        id: 3,
        label: 'User 3',
      },
    ];
  },
};
</script>
