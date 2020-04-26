<template >
  <div class="page">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    try {
      isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (fn.isIOS) {
        window.history.pushState({}, "title", "#");
      }
    } catch (e) {
      //TODO handle the exception
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
