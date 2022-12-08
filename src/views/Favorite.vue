<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "Favorites",
  components: {
    Card,
  },
  computed: mapState(["booksData", "localStorageFavorites"]),
  mounted() {
    this.$store.dispatch("getLocalStorageFavoriteData");
  },
};
</script>
<template>
  <div class="cardsContainer">
    <div v-for="(book, index) in localStorageFavorites" :key="index">
      <Card :book="book" />
    </div>
  </div>
</template>
<style>
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
