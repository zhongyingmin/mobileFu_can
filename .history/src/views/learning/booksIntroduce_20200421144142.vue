<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="ebook">
      <div class="title-weapper">
        <div class="left"></div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="iconfont iconservice-directory icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="iconfont iconqingtian icon"></span>
          </div>
          <div class="icon-wrapper">
            <span class="iconfont iconjinduxian icon"></span>
          </div>
        </div>
      </div>
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
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },
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
@import "@/assets/styles/index.scss";
.booksIntroduce {
  width: 100%;
  height: 100%;
  .ebook {
    position: relative;
    .title-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      width: 100%;
      height: 50px;
      background-color: #fff;

      .left {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon-cart {
            font-size: 30px;
          }
        }
      }
    }
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
