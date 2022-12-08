import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    search: "",
    booksData: [],
    modalActive: false,
    modalData: [],
    favorites: [],
    localStorageFavorites: [],
    index: 0,
    loading: false,
    schrollRadio: null,
  },
  mutations: {
    getBooks(state, books) {
      state.booksData = books;
    },
    setModalBookData(state, book) {
      state.modalActive = true;
      state.modalData = book;
    },
    getLocalStorageFavoriteData(state, storageData) {
      state.localStorageFavorites = storageData;
    },
    setLocalStorageFavoritesData(state, book) {
      state.favorites = state.localStorageFavorites;
      state.favorites.push(book);
      localStorage.setItem("favoritesVue", JSON.stringify(state.favorites));
    },
    removeLocalStorageFavoritesData(state, book) {
      const index = state.localStorageFavorites.indexOf(book);
      state.localStorageFavorites.splice(index, 1);
      localStorage.setItem(
        "favoritesVue",
        JSON.stringify(state.localStorageFavorites)
      );
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
    setModalBookData({ commit }, book) {
      commit("setModalBookData", book);
    },
    getLocalStorageFavoriteData({ commit }) {
      if (localStorage.getItem("favoritesVue")) {
        commit(
          "getLocalStorageFavoriteData",
          JSON.parse(localStorage.getItem("favoritesVue"))
        );
      }
    },
    setLocalStorageFavoritesData({ commit }, book) {
      commit("setLocalStorageFavoritesData", book);
    },
    removeLocalStorageFavoritesData({ commit }, book) {
      commit("removeLocalStorageFavoritesData", book);
    },
  },
  nextPage({ commit }) {},

  modules: {},
});

// books;
// activeBook: 1;
