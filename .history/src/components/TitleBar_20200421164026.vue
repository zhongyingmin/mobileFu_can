<template>
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
@import "@/assets/styles/index.scss";
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
</style>