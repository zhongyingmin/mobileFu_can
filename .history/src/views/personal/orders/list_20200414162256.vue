<template>
  <div class="orders_list">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入搜索关键词" slot="title" />
    </van-nav-bar>
    <van-tabs
      v-model="active"
      title-active-color="#7c322f"
      color="#7c322f"
      line-height="2"
      title-inactive-color="#666666"
    >
      <van-tab title="全部订单">
        <van-cell
          title="同仁堂旗舰店"
          icon-prefix="iconfont icongongyingshang"
          icon="icongongyingshang"
          is-link
        />
        <van-card
          num="1"
          price="19.9"
          desc="250/g  一袋"
          title="宁夏枸杞"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <!-- <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>-->
          </template>
          <template #footer>
            <van-button round size="small">查看详情</van-button>
            <van-button round size="small">确认收货</van-button>
          </template>
        </van-card>
        <van-card
          num="1"
          price="19.9"
          desc="250/g  一袋"
          title="宁夏枸杞"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <!-- <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>-->
          </template>
          <template #footer>
            <van-button round size="small">查看详情</van-button>
            <van-button round size="small">确认收货</van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: ""
    };
  },
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    openaddress() {
      this.$router.push("/shippingAddress");
    }
  }
};
</script>
<style lang="scss" scoped>
.orders_list {
  width: 100%;
  height: 100%;
  .head_nav {
    margin-bottom: 2px;
    .van-nav-bar__left {
      left: 10px;
    }
    .van-nav-bar__title {
      .van-search {
        width: 100%;
        height: 100%;
        display: inline-flex;
        vertical-align: middle;
        padding: 0 12px 1px;
        .van-search__content {
          border: solid 1px #7e3330;
          border-radius: 20px;
          background-color: #fff;
          /deep/ .van-cell {
            padding: 2px 8px 2px 0;
            .van-icon {
              color: #000;
            }
          }
        }
      }
    }
  }

  /deep/ .van-tabs {
    width: 100%;
    height: auto;
    pointer-events: none;
    .van-tabs__wrap {
      pointer-events: all;
      height: 40px;
    }
    .van-tabs__wrap::after {
      border-width: 0;
    }
    .van-tabs__content {
      pointer-events: all;
      padding: 15px;
      .van-cell {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .van-cell:not(:last-child)::after {
        border-bottom: none;
      }
      .van-card:not(:first-child) {
        margin-top: 0;
      }
      .van-card {
        background-color: #ffffff;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-bottom: 15px;
        .van-card__header {
          .van-card__thumb {
            width: 110px;
          }
        }
        .van-card__footer {
          button:first-child {
            border: solid 1px #a0a0a0;
            color: #a0a0a0;
          }
          button:last-child {
            border: solid 1px #7e3330;
            color: #7e3330;
          }
        }
      }
    }
  }
}
</style>
