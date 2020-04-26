<template>
  <div class="refundAfter">
    <van-nav-bar class="head_nav" left-text="返回" title="退款售后" left-arrow @click-left="back" />
    <div class="refundAfter_main">
      <div class="m_item">
        <van-cell
          title="同仁堂旗舰店"
          icon-prefix="iconfont icongongyingshang"
          icon="icongongyingshang"
          is-link
        />
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
          <div>
            <span>共1件</span>
            <span>
              合计:
              <span>¥19.9</span>
            </span>
          </div>
          <div>
            <span>查看详情</span>
            <span>确认收货</span>
          </div>
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
.refundAfter {
  width: 100%;
  height: 100%;
  .refundAfter_main {
    padding: 10px 10px 0;
    .m_item {
      background-color: #fff;
      width: 100%;
      height: auto;
      padding: 10px;
      border-radius: 5px;
    }
  }
}
</style>
