<script>
import Layout from "./components/Layout.vue";
import Modal from "./components/Modal.vue";

export default {
  components: {
    Layout,
    Modal,
  },
};
</script>

<template>
  <Layout>
    <router-view></router-view>
    <Modal />
  </Layout>
</template>

<style></style>
