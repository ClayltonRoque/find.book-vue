<template>
  <div class="layout">
    <LayoutHeader />
    <div class="layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import LayoutHeader from "./LayoutHeader.vue";

export default defineComponent({
  components: {
    LayoutHeader,
  },
});
</script>
