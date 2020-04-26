<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="ebook">
      <Title-Bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></Title-Bar>
      <div class="read-wrapper">
        <div id="read"></div>
        <div class="mask">
          <div class="left" @click="prevPage"></div>
          <div class="center" @click="toggleTitleAndMenu"></div>
          <div class="right" @click="nextPage"></div>
        </div>
      </div>
      <Menu-Bar
        ref="MenuBar"
        @setFontSize="setFontSize"
        :defaultFontSize="defaultFontSize"
        :fontSizeList="fontSizeList"
        :ifTitleAndMenuShow="ifTitleAndMenuShow"
        :themeList="themeList"
        :defaultTheme="defaultTheme"
        @setTheme="setTheme"
      ></Menu-Bar>
    </div>
  </div>
</template>
<script>
import TitleBar from "@/components/TitleBar";
import MenuBar from "@/components/MenuBar";
import Epub from "epubjs";
const DOWNLOAD_URL = "../../../static/epub/zg.epub";
global.ePub = Epub;
export default {
  data() {
    return {
      ifTitleAndMenuShow: false,
      book: "",
      rendition: "",
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: "default",
          style: {
            body: {
              color: "#000",
              background: "#fff"
            }
          }
        },
        {
          name: "eye",
          style: {
            body: {
              color: "#000",
              background: "#ceeaba"
            }
          }
        },
        {
          name: "night",
          style: {
            body: {
              color: "#fff",
              background: "#000"
            }
          }
        },
        {
          name: "gold",
          style: {
            body: {
              color: "#000",
              background: "rgb(241,236,226)"
            }
          }
        }
      ],
      themes: "",
      defaultTheme: 0,
      bookAvalable:false,
      locations: ""
    };
  },
  components: {
    TitleBar,
    MenuBar
  },
  mounted() {
    this.showEpub();
  },
  methods: {
    onProgressChange(progress) {
      const percentage = progress / 100;
      console.log(percentage)
      const location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
      this.rendition.display(location);
    },
    setTheme(index) {
      this.themes.select(this.themeList[index].name);
      this.defaultTheme = index;
    },
    registerTheme() {
      this.themeList.forEach(theme => {
        this.themes.register(theme.name, theme.style);
      });
    },
    setFontSize(fontSize) {
      this.defaultFontSize = fontSize;
      if (this.themes) {
        this.themes.fontSize(fontSize + "px");
      }
    },
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
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        this.$refs.MenuBar.hideSetting();
      }
    },
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL);
      //   console.log(this.book);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      this.rendition.display();
      this.themes = this.rendition.themes;
      this.setFontSize(this.defaultFontSize);
      this.registerTheme();
      this.setTheme(this.defaultTheme);
      this.book.ready
        .then(() => {
          return this.book.locations.generate();
        })
        .then(result => {
          this.locations = this.book.locations;
          this.bookAvalable=true;
        });
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
@import "../../assets/styles/index";
.booksIntroduce {
  width: 100%;
  height: 100%;
  .ebook {
    position: relative;
    overflow: hidden;
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
      bottom: 0;
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
        .icon {
          font-size: 22px;
          color: #666666;
        }
        > div {
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }
}
</style>
