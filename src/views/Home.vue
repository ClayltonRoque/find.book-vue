<script>
import Card from "../components/Card.vue";
import NoCard from "../components/NoCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      query: null,
    };
  },
  components: {
    Card,
    NoCard,
  },
  computed: mapState(["booksData"]),
};
</script>
<template>
  <div>
    <header>
      <div class="Router">
        <h1>Book Finder</h1>
        <button class="buttonRouter">
          <router-link to="/Favorites">Favorites</router-link>
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Digite um nome de um livro ou autor"
          v-model="query"
        />
        <button @click="this.$store.dispatch('getBooks', query)">
          pesquisar
        </button>
      </div>
    </header>
    <div class="Row"></div>
    <Card />
    <NoCard v-if="!booksData.length" />
  </div>
</template>
<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-size: 32px;
    color: #6b95ff;
    margin-right: 90px;
  }

  .Router {
    display: flex;
    width: 505px;
    justify-content: flex-end;
  }

  input {
    border: solid #6b95ff 3px;
    font-size: 20px;
    margin-top: 5px;
    width: 400px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
  button {
    border: solid #6b95ff 3px;
    font-size: 20px;
    margin-top: 5px;
    margin-left: 5px;
    width: 100px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
}

.Row {
  border-top: 0.0625rem solid black;
  margin-top: 0.9375rem;
  padding: 0.9375rem 0.125rem 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
