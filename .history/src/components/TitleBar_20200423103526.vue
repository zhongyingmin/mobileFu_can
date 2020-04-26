<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="nav-bar">
        <div class="left" @click="back">
          <span class="iconfont iconzuo icon"></span>
          返回
        </div>
        <div class="center">书籍内容</div>
        <!-- <div class="right">
            <div class="icon-wrapper">
            </div>
            <div class="icon-wrapper">
            </div>
            <div class="icon-wrapper">
              <span class="iconfont iconshoucangxian icon"></span>
            </div>
        </div>-->
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
  },
  methods: {
    back() {
      this.$emit("back");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/index";
@import "../assets/styles/global";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
  .nav-bar {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    .left,
    .right {
      position: absolute;
      bottom: 0;
      font-size: 14px;
      cursor: pointer;
    }
    .left {
      left: 16px;
      span {
        font-size: 19px;
        color: #000 !important;
      }
    }
    .center {
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
}
</style>