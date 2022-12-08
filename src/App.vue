<script>
import { mapState } from "vuex";
import Layout from "./components/Layout.vue";
import Modal from "./components/Modal.vue";

export default {
  components: {
    Layout,
    Modal,
  },
  computed: mapState(["modalActive"]),
};
</script>

<template>
  <Layout>
    <router-view></router-view>
    <Modal v-if="modalActive" />
  </Layout>
</template>

<style></style>
