<template>
  <div class="search-books">
    <input
      type="text"
      placeholder="Digite um nome de um livro ou autor"
      v-model="state.query"
    />
    <button @click="searchBooks">pesquisar</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      query: "",
    });

    const store = useStore();

    console.log(store);

    function searchBooks() {
      store.dispatch("getBooks", state.query);
    }

    return {
      state,
      searchBooks,
    };
  },
};
</script>
