<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="ebook">
      <div class="read-wrapper">
        <div id="read"></div>
        <div class="mask">
          <div class="left" @click="prevPage"></div>
          <div class="center"></div>
          <div class="right" @click="nextPage"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Epub from "epubjs";
const DOWNLOAD_URL = "../../../static/epub/zg.epub";
global.ePub = Epub;
export default {
  data() {
    return {
      book: "",
      rendition: ""
    };
  },
  mounted() {
    this.showEpub();
  },
  methods: {
    prevPage() {},
    nextPage() {},
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      console.log(this.book);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });
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
.booksIntroduce {
  width: 100%;
  height: 100%;
  .ebook {
    position: relative;
    .read-wrapper {
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        display: flex;
        .left {
          flex: 0.3;
        }
        .center {
          flex: 1;
        }
        .right {
          flex: 0.3;
        }
      }
    }
  }
}
</style>
