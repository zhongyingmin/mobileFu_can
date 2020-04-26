<template>
  <div class="booksIntroduce">
    <van-nav-bar title="书籍简介" left-text="返回" left-arrow @click-left="back" />
    <div id="reader" class="reader"></div>
  </div>
</template>
<script>
import Epub from 'epubjs'
const DOWNLOAD_URL='../../../static/epub/zg.epub'
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.learning {
  width: 100%;
  height: 100%;
}
</style>
