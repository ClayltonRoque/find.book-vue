<script>
import { mapState } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "Card",
  data() {
    return {};
  },
  computed: mapState(["booksData"]),
  methods: {
    sliceTitle(book) {
      book.volumeInfo.title.length >= 40;
      return (book.volumeInfo.title =
        book.volumeInfo.title.slice(0, 40) + "...");
    },
  },
  components: {
    Modal,
  },
};
</script>

<template>
  <div class="cardsContainer">
    <div
      class="card"
      style="width: 18rem"
      v-for="(book, index) in booksData"
      :key="index"
    >
      <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="..." />
      <div class="cardBody">
        <h1 v-if="sliceTitle(book)" v-html="book.volumeInfo.title"></h1>
        <h2
          class="card-text"
          v-html="'Creator(s): ' + book.volumeInfo.authors"
        ></h2>
      </div>
      <div class="cardFooter">
        <Modal :book="book.volumeInfo.title" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .card {
    margin-left: 30px;
    color: black;
    width: 350px;
    height: 450px;
    margin-top: 20px;
  }

  img {
    background-repeat: repeat;
    object-fit: cover;
    object-position: 0px 0px; /* try 20% 10% */
    display: flex;
    min-height: 300px;
    max-height: 300px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .cardBody {
    display: flex;
    flex-direction: column;
    padding: 7px;
    min-height: 140px;
    max-height: 140px;
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 16px;
      font-weight: lighter;
    }
  }

  .cardFooter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 7px;
  }
}
</style>
