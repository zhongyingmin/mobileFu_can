<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="ifTitleAndMenuShow"
        :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}"
      >
        <div class="icon-wrapper">
          <span class="iconfont iconservice-directory icon" @click="showSetting(3)"></span>
          <div>目录</div>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont iconqingtian icon" @click="showSetting(1)"></span>
          <div>背景</div>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont iconjinduxian icon" @click="showSetting(2)"></span>
          <div>进度</div>
        </div>
        <div class="icon-wrapper" @click="showSetting(0)">
          <span class="iconfont iconA icon"></span>
          <div>字号</div>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size" v-if="showTag===0">
          <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">
            <span class="iconfont iconA icon"></span>
          </div>
          <div class="select">
            <div
              class="select-wrapper"
              v-for="(item,index) in fontSizeList"
              :key="index"
              @click="setFontSize(item.fontSize)"
            >
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize===item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div
            class="preview"
            :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}"
          >
            <span class="iconfont iconA icon"></span>
          </div>
        </div>
        <div class="setting-theme" v-else-if="showTag===1">
          <div
            class="setting-theme-item"
            v-for="(item,index) in themeList"
            :key="index"
            @click="setTheme(index)"
          >
            <div
              class="prview"
              :class="{'no-border':item.style.body.background!=='#fff'}"
              :style="{background:item.style.body.background}"
            ></div>
            <div class="text" :class="{'selected':index===defaultTheme}">{{item.name}}</div>
          </div>
        </div>
        <div class="setting-propers" v-else-if="showTag===2">
          <div class="progress-wrapper">
            <input
              type="range"
              class="progress"
              max="100"
              min="0"
              step="1"
              @change="onProgressChange($event.target.value)"
              @input="onProgressInput($event.target.value)"
              :value="progress"
              :disabled="!bookAvailable"
              ref="progress"
            />
          </div>
          <div class="text-wrapper">
            <span>{{bookAvailable?progress+'%':'加载中...'}}</span>
          </div>
        </div>
      </div>
    </transition>
    <content-view
      :ifShowContent="ifShowContent"
      v-show="ifShowContent"
      :navigation="navigation"
      :bookAvailable="bookAvailable"
      @jumpTo="jumpTo"
    ></content-view>
    <transition name="fade">
      <div class="content-mask" v-show="ifShowContent" @click="hideContent"></div>
    </transition>
  </div>
</template>

<script>
import ContentView from "@/components/Content";
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: Array,
    defaultFontSize: Number,
    themeList: Array,
    defaultTheme: Number,
    bookAvailable: {
      type: Boolean,
      default: false
    },
    navigation: Object
  },
  components: {
    ContentView
  },
  data() {
    return {
      ifSettingShow: false,
      showTag: 0,
      progress: 0,
      ifShowContent: false
    };
  },
  mounted() {},
  methods: {
    jumpTo(target) {
      this.$emit("jumpTo", target);
    },
    hideContent() {
      this.ifShowContent = false;
    },
    onProgressInput(progress) {
      this.progress = progress;
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`;
    },
    onProgressChange(progress) {
      this.$emit("onProgressChange", progress);
    },
    setTheme(index) {
      this.$emit("setTheme", index);
    },
    showSetting(tag) {
      this.showTag = tag;
      if (this.showTag === 3) {
        this.ifSettingShow = false;
        this.ifShowContent = true;
      } else {
        this.ifSettingShow = true;
      }
    },
    hideSetting() {
      this.ifSettingShow = false;
    },
    setFontSize(fontSize) {
      this.$emit("setFontSize", fontSize);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/global";
.menu-bar {
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
    &.hide-box-shadow {
      box-shadow: none;
    }
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
  .setting-wrapper {
    position: absolute;
    bottom: 50px;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .select {
        display: flex;
        flex: 1;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: 1px solid #ccc;
          }
          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: 7px;
            border-left: 1px solid #ccc;
            .point {
              position: absolute;
              top: -7px;
              left: -10px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #fff;
              border: 1px solid #ccc;
              box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              .small-point {
                width: 5px;
                height: 5px;
                background-color: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .setting-theme {
      display: flex;
      height: 100%;
      .setting-theme-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 5px;
        box-sizing: border-box;
        .prview {
          flex: 1;
          border: 1px solid #ccc;
          box-sizing: border-box;
          &.no-border {
            border: none;
          }
        }
        .text {
          flex: 0 0 20px;
          font-size: 14px;
          color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          &.selected {
            color: #333;
          }
        }
      }
    }
    .setting-propers {
      position: relative;
      width: 100%;
      height: 100%;
      .progress-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        box-sizing: border-box;
        .progress {
          width: 100%;
          -webkit-appearance: none;
          height: 2px;
          background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
          background-size: 0 100%;
          &:focus {
            outline: none;
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: white;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
            border: 1px solid #ddd;
          }
        }
      }
      .text-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #333;
        text-align: center;
      }
    }
  }
  .content-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.8);
    &.fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
    &.fade-enter-to,
    .fade-leave {
      opacity: 1;
    }
  }
}
</style>