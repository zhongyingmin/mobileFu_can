<template>
  <div class="diagnosis">
    <van-nav-bar title="诊疗通知" left-text="返回" left-arrow @click-left="back" />
    <div class="d_content">
      <div class="d_item">
        <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="i_text">
          <div class="i_text_title">处方详情</div>
          <div class="i_p">
            配方：熟地15克、当归15克、白芍10克、
            川芎8克。
            <br />主治：营血虚滞证。心悸失眠，头晕目眩，
            面色无华，妇人月经不调，经量少或闭经，
            表现为舌淡，脉细弦或细涩。
            <br />医嘱：一日一次，水煎服，忌辛辣。
          </div>
          <div class="popper__arrow c"></div>
          <div class="popper__arrow_to c"></div>
        </div>
      </div>
      <div class="d_item">
        <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="i_text">
          <div class="i_text_title">处方详情</div>
          <div class="i_p">
            配方：熟地15克、当归15克、白芍10克、
            川芎8克。
            <br />主治：营血虚滞证。心悸失眠，头晕目眩，
            面色无华，妇人月经不调，经量少或闭经，
            表现为舌淡，脉细弦或细涩。
            <br />医嘱：一日一次，水煎服，忌辛辣。
          </div>
          <div class="popper__arrow c"></div>
          <div class="popper__arrow_to c"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
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
.diagnosis {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .d_content {
    padding: 15px;
    .d_item {
      display: flex;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      .van-image {
        display: inline-block;
        width: 3rem;
        height: 3rem;
      }
      .i_text {
        position: relative;
        border: 1px solid #ebeef5;
        display: inline-block;
        margin-left: 20px;
        width: calc(100% - 3rem - 20px);
        padding: 10px 15px;
        min-height: 150px;
        background-color: #ffffff;
        border-radius: 4px;
        font-size: 14px;
        color: #333333;
        box-shadow: 0px 3px 10px 0px rgba(153, 150, 145, 0.3);
        .i_text_title {
          font-size: 15px;
          color: #000000;
          margin-bottom: 10px;
        }
        .i_p {
          letter-spacing: 0px;
          line-height: 26px;
        }
        > .c {
          width: 0;
          height: 0;
          font-size: 0;
          overflow: hidden;
          position: absolute;
        }
        > .popper__arrow {
          border-width: 8px;
          border-style: dashed dashed solid;
          border-color: transparent #ebeef5 transparent transparent;
          left: -16px;
          bottom: 82%;
        }
        > .popper__arrow_to {
          border-width: 8px;
          border-style: dashed dashed solid;
          border-color: transparent #fff transparent transparent;
          left: -15px;
          bottom: 82%;
        }
      }
    }
  }
}
</style>
