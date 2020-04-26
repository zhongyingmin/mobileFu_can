<template>
  <div class="articleContent">
    <van-nav-bar title="文章内容" left-text="返回" left-arrow @click-left="back" />
    <div class="article_main">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
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
.articleContent {
  width: 100%;
  height: 100%;
}
</style>
