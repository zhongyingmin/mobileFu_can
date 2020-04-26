<template>
  <div class="introduce">
    <van-nav-bar class="head_nav" left-text="返回" title="书籍介绍" left-arrow @click-left="back" />
    <div class="body">
      <div class="name-wrapper">
        <div class="left">
          <van-image
            width="100%"
            height="100%"
            fit="contain"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="right">
          <div class="title">黄帝内经</div>
          <div class="tag">
            <van-icon></van-icon>
            <span>收藏</span>
          </div>
        </div>
      </div>
      <div class="introduce-wrapper">
        <div class="title">简介</div>
        <div class="content">
          《黄帝内经》是中国传统医学四大经典著作之一《黄帝内经》、《伤寒杂病论》、《神农本草经》、《难经》，
          也是第一部冠以中华民族先祖“黄帝”之名的传世巨著，是我国医学宝库中现存成书最早的一部医学典籍。是研究人的生理学、病理学、诊断学、
          治疗原则药物学的医学巨著。在理论上建立了中医学上的“阴阳五行学说”“脉象学说”“藏象学说”、“经络学说”、
          “病因学说”“病机学说”、“病症”、“诊法”、论治及“养生学”、“运、气学”等学说。其医学理论是建立在我国古代道家理论的基础之上的，反映了我国古代天人合一思想。
        </div>
        <div class="enter">进入阅读</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
.introduce {
  width: 100%;
  height: 100%;
  .body {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-color: #fff;
    .name-wrapper {
      display: flex;
      width: 100%;
      height: 200px;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      .left {
        width: 10em;
        height: 10em;
        padding: 0 20px;
      }
    }
  }
}
</style>