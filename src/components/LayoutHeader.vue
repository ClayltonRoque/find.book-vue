<template>
  <header class="layout-header">
    <div class="Router">
      <h1>Book Finder</h1>
      <button class="buttonRouter">
        <router-link to="/Favorites">Favorites</router-link>
      </button>
      <button class="buttonRouter">
        <router-link to="/">Home</router-link>
      </button>
    </div>
    <SearchBooks />
  </header>
  <div class="Row"></div>
</template>

<script>
import SearchBooks from "./SearchBooks.vue";

export default {
  props: {
    isSearch: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    SearchBooks,
  },
};
</script>

<style></style>
