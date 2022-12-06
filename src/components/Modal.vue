<script>
import { mapState } from "vuex";

export default {
  name: "Modal",
  data() {
    console.log(this.book);
    return {
      books: this.book,
    };
  },

  computed: mapState(["booksData"]),
  props: ["book"],
};
</script>

<template>
  <button
    type="button"
    class="buttonOpenModal"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Detalhes
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <img />

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5 class="modal-title" id="exampleModalLabel">{{ this.book }}</h5>
          <p></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.buttonOpenModal {
  height: 30px;
  width: 80px;
  background-color: #6b95ff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: -80px;
}
</style>

<!--  :src="book.volumeInfo.imageLinks.smallThumbnail" -->
