import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    search: "",
    booksData: [],
    index: 0,
    favorites: [],
  },
  mutations: {
    getBooks(state, books) {
      state.booksData = books;
    },
  },
  actions: {
    async getBooks({ commit }, query) {
      const index = 0;
      const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
      const defaultMaxResults = "20";
      try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=${defaultMaxResults}&startIndex=${index}`;
        const response = await axios.get(url);
        console.log(response.data.items);
        commit("getBooks", response.data.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

// books;
// activeBook: 1;
