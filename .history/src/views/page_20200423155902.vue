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
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
