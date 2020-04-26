<template>
  <div class="confirmOrder">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back" />
    <div class="confirmOrder_main">
      <van-cell center icon="location" is-link label="上海市闵行区上海康城小区城道80号503室">
        <template #title>
          <span class="custom-title">张杰医师</span>
          <span class="phone">127400274930</span>
        </template>
      </van-cell>
      <div class="cell_info">
        <div class="info_first">
          <div class="info_image">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>
              <div>宁夏枸杞</div>
              <div>250/g 一袋</div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>×1</div>
            </div>
          </div>
        </div>
        <div class="button_t">
          <span @click="goPath('/refundAfter/applyRefund')">退款</span>
        </div>
        <div>
          <span>商品总价</span>
          <span>¥19.9</span>
        </div>
        <div>
          <span>运费</span>
          <span>¥00.0</span>
        </div>
        <div>
          <span>实付款</span>
          <span>¥19.9</span>
        </div>
      </div>
    </div>
    <div class="footer_div">
      <div>共{{list.length}}件</div>
      <div>
        <span>合计:</span>
        <span>¥{{sum | toFixed}}</span>
        <span>确认订单</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      list: [
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        }
      ]
    };
  },
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.confirmOrder {
  width: 100%;
  height: 100%;
  .footer_div {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 15px;
    height: 45px;
    background-color: #fff;
    border-top: 1px solid #d1d1d1;
    > div:first-child {
      color: #000;
    }
    > div:last-child {
      display: inline-flex;
      align-items: center;
      color: #000;
      height: 100%;
      span:first-child {
        margin-right: 5px;
      }
      span:nth-of-type(2) {
        color: #7e3330;
        margin-right: 10px;
      }
      span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#7e3330, #7e3330);
        background-blend-mode: normal, normal;
        border-radius: 35px;
        color: #fff;
        width: 120px;
        height: 100%;
      }
    }
  }
}
</style>
