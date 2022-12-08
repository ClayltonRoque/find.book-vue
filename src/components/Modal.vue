<script>
import { mapState } from "vuex";
export default {
  name: "Modal",
  data() {
    return {};
  },
  computed: mapState(["modalData", "localStorageFavorites"]),
  methods: {
    addToFavorites(modalData) {
      this.$store.dispatch("setLocalStorageFavoritesData", modalData);
    },
    isInStorage(modalData) {
      return this.localStorageFavorites.find((item) => item.id == modalData.id);
    },
    removeToFavorites(modalData) {
      this.$store.dispatch("removeLocalStorageFavoritesData", modalData);
    },
  },
};
</script>

<template>
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
          <img :src="this.modalData.volumeInfo.imageLinks.smallThumbnail" />

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5
            class="modal-title"
            id="exampleModalLabel"
            v-html="this.modalData.volumeInfo.title"
          ></h5>
          <p v-html="this.modalData.volumeInfo.description"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="removeToFavorites(this.modalData)"
            v-if="isInStorage(this.modalData)"
          >
            Remove from Favorites
          </button>
          <button
            type="button"
            class="btn btn-success"
            @click="addToFavorites(this.modalData)"
            v-else
          >
            Add To Favorites
          </button>
          <a
            class="btn btn-primary"
            target="_blank"
            :href="this.modalData.volumeInfo.previewLink"
          >
            More information
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-content {
  img {
    height: 450px;
    width: 450px;
  }
}
</style>

<!--  :src="book.volumeInfo.imageLinks.smallThumbnail" -->
