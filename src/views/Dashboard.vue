<template>
  <div class="w-full">
    <Header title="Dashboard"> </Header>
    <Body> </Body>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Body from '../components/layout/Body.vue';
export default {
  name: 'Dashboard',
  components: {
    Header,
    Body,
  },
};
</script>
