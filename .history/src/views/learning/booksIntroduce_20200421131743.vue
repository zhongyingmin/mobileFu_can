<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="ebook"></div>
  </div>
</template>
<script>
import Epub from "epubjs";
const DOWNLOAD_URL = "../../../static/epub/zg.epub";
export default {
  data() {
    return {
      book: ""
    };
  },
  mounted() {
    this.showEpub();
  },
  methods: {
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      console.log(this.book);
      this.book.renderTo('read',{
          width:window.innerWidth,
          height:window.innerHeight
      })
      this.rendition.display();
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.learning {
  width: 100%;
  height: 100%;
}
</style>
