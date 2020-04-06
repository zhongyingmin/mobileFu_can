<template>
  <div class="patientList">
    <van-nav-bar
      title="全部患者"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="cell_item" v-for="(item,index) in list" :key="index">
        <van-image
          round
          width="3rem"
          height="3rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="cell_name">刘美丽</div>
        <div class="cell_role">患者</div>
        <div class="cell_gender">女</div>
        <div class="cell_age">36岁</div>
      </div>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  filters: {},
  created() {},
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.patientList {
  width: 100%;
  height: 100%;
  .van-search {
    .van-search__content {
      border-radius: 20px;
    }
  }
  .cell_item {
    width: 100%;
    height: 65px;
    background-color: #fff;
    padding: 0 10px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #646566;
    .cell_name {
      font-size: 13px;
      color: #000;
      margin: 0 10px;
    }
    .cell_role{
        margin-right: 4px;
    }
    .cell_gender{
        margin-right: 4px;
    }
  }
  .cell_item::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
