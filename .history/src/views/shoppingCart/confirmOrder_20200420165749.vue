<template>
  <div class="confirmOrder">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back" />
    <div class="confirmOrder_main">
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
      value: ""
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
    },
  }
};
</script>
<style lang="scss" scoped>
.confirmOrder {
  width: 100%;
  height: 100%;
}
</style>
