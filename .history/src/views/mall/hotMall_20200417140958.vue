<template>
  <div class="hotMall">
    <van-nav-bar title="热门商城" left-text="返回" left-arrow @click-left="back" />
  </div>
</template>
<script>
import { formatDate } from "../../../utils/date.js";
export default {
  data() {
    return {
    }
  },
  filters: {
    formatTime(time) {
      return formatDate(time, "yyyy");
    }
  },
  mounted() {
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
.hotMall {
  width: 100%;
  min-height: 100vh;
}
</style>
