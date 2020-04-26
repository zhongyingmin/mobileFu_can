<template>
  <div class="info">
    <van-nav-bar class="head_nav" left-text="返回" title="完善个人信息" left-arrow @click-left="back" />
    <div class="info_main">
      <div class="m_item">
        <div class="m_title">姓名</div>
        <van-field v-model="value" placeholder="请输入用户名" />
      </div>
      <div class="m_item"></div>
      <div class="m_item"></div>
      <div class="m_item"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { value: "" };
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
.info {
  width: 100%;
  height: 100%;
  .info_main {
    padding: 15px;
    width: 100%;
    height: auto;
    .m_item {
      margin-bottom: 15px;
      .m_title {
        position: relative;
        padding: 0 16px 10px;
      }
      .m_title::before {
        position: absolute;
        left: 8px;
        color: #ee0a24;
        font-size: 14px;
        content: "*";
      }
    }
  }
}
</style>
