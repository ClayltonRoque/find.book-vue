<script>
import { mapState } from "vuex";

export default {
  name: "Card",
  data() {
    return {};
  },
  computed: mapState(["modalActive", "modalData"]),
  props: ["book"],
  methods: {
    sliceTitle(book) {
      if (book.volumeInfo.title.length >= 50) {
        return (book.volumeInfo.title =
          book.volumeInfo.title.slice(0, 40) + "...");
      }
    },
    setModalBookData(book) {
      console.log(book);
      this.$store.dispatch("setModalBookData", book);
    },
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="this.book.volumeInfo.imageLinks.smallThumbnail" alt="..." />
    <div class="cardBody">
      <h1
        v-if="!sliceTitle(this.book)"
        v-html="this.book.volumeInfo.title"
      ></h1>
      <h2
        class="card-text"
        v-html="'Creator(s): ' + this.book.volumeInfo.authors"
      ></h2>
    </div>
    <div class="cardFooter">
      <button
        type="button"
        class="buttonOpenModal"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="setModalBookData(this.book)"
      >
        Detalhes
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin-left: 30px;
  color: black;
  width: 350px;
  height: 450px;
  margin-top: 20px;

  img {
    background-repeat: repeat;
    object-fit: cover;
    object-position: 0px 0px;
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

  .buttonOpenModal {
    height: 30px;
    width: 80px;
    background-color: #6b95ff;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: -80px;
  }
}
</style>
