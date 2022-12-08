<template>
  <div class="search-books">
    <input
      type="text"
      placeholder="Digite um nome de um livro ou autor"
      v-model="state.query"
    />
    <button @click="searchBooks(), alertNullInput()">pesquisar</button>
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

    function searchBooks() {
      store.dispatch("getBooks", state.query);
    }

    function alertNullInput() {
      if (state.query.length == 0) {
        alert(
          "digite algo e click no botão de pesquisar e veja a magica acontecer."
        );
      }
    }

    return {
      state,
      searchBooks,
      alertNullInput,
    };
  },
};
</script>
