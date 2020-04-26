<template>
  <div class="read-wrapper">
    <div id="read"></div>
    <div class="mask">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="toggleTitleAndMenu"></div>
      <div class="right" @click="nextPage"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  .icon-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .icon {
      font-size: 22px;
      color: #666666;
    }
    > div {
      font-size: 12px;
      color: #666666;
    }
  }
}
</style>