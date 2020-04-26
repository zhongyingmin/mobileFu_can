<template>
  <div class="registerAppointment">
    <van-nav-bar title="选择医院" left-text="返回" left-arrow @click-left="back" />
    <van-search v-model="value" placeholder="请输入医院名称" />
    <div class="content">
      <div class="list_item" @click="goPath('registerAppointment/hospitalHomepage')">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>上海市百草诊所</div>
          <div>500米 | 闵行区莘庄镇985号</div>
          <div>营业时间：8:00-17:00</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      active: 0,
      value: ""
    };
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
.registerAppointment {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .van-search {
    padding: 10px 12px 0;
    .van-search__content {
      border-radius: 20px;
    }
  }
  .content {
    padding: 0 15px;
    height: auto;
    .list_item {
      display: flex;
      padding: 18px 0;
      border-bottom: 1px solid #dbdbdb;
      .item_text {
        flex-grow: 1;
        padding: 0 15px;
        font-size: 12px;
        color: #333333;
        >div{
            margin-bottom: 10px;
        }
        div:first-child {
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
