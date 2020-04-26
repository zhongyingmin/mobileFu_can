<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
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
    </transition>
    <div class="setting-wrapper">
      <div class="setting-font-size"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
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
    height: 80px;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
    .setting-font-size {
    }
  }
}
</style>