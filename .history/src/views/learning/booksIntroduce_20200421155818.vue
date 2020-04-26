<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="ebook">
      <div class="title-wrapper">
        <div class="left">
          <span class="iconfont iconzuo icon"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <!-- <span class="iconfont iconservice-directory icon"></span> -->
          </div>
          <div class="icon-wrapper">
            <!-- <span class="iconfont iconqingtian icon"></span> -->
          </div>
          <div class="icon-wrapper">
            <span class="iconfont iconshoucangxian icon"></span>
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
      <div class="menu-wrapper">
        <div class="icon-wrapper">
          <span class="iconfont iconservice-directory icon"></span>
          <div>目录</div>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont iconqingtian icon"></span>
          <div>背景</div>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont iconjinduxian icon"></span>
          <div>进度</div>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont iconA icon"></span>
          <div>字号</div>
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
      display: flex;
      width: 100%;
      height: 50px;
      padding-right: 10px;
      background-color: #fff;
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
      .left {
        flex: 0 0 0.4;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .icon-wrapper {
          flex: 0 0 0.4;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconshoucangxian {
            font-size: 22px;
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
    .menu-wrapper {
      position: absolute;
      bottom: 45px;
      left: 0;
      z-index: 101;
      display: flex;
      width: 100%;
      height: 50px;
      background-color: #fff;
      box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
      .icon-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        i {
          font-size: 15px;
        }
        > div {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
