<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="ifTitleAndMenuShow"
        :class="{'hide-box-shadow':ifSettingShow || !ifTitleAndMenuShow}"
      >
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
        <div class="icon-wrapper" @click="showSetting">
          <span class="iconfont iconA icon"></span>
          <div>字号</div>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size">
          <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">
            <span class="iconfont iconA icon"></span>
          </div>
          <div class="select-wrapper">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point"></div>
            </div>
            <div class="line"></div>
          </div>
          <div
            class="preview"
            :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}"
          >
            <span class="iconfont iconA icon"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: Array
  },
  data() {
    return {
      ifSettingShow: false
    };
  },
  methods: {
    showSetting() {
      this.ifSettingShow = true;
    },
    hideSetting() {
      this.ifSettingShow = false;
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
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
    .setting-font-size {
      .prveiew {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .select-wrapper {
        flex: 1;
        background-color: red;
        .line {
          flex: 1;
          height: 0;
          border-top:1px solid #ccc;
        }
        .point-wrapper {
            flex: 0 0 0;
            width: 0;
            height: 7px;
            border-left: 1px solid #ccc;
        }
      }
    }
  }
}
</style>