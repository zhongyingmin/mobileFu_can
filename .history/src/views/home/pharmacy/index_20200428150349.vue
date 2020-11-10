<template>
  <div class="pharmacy">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入搜索关键词" slot="title" />
    </van-nav-bar>
    <van-tabs
      v-model="active"
      id="tabs"
      title-active-color="#7c322f"
      color="#7c322f"
      line-height="2"
      title-inactive-color="#333333"
    >
      <van-tab title="处方流转">
        <div class="information">
          <div class="i_head">
            <div>
              <div class="ih_title">
                <span>姓名：</span>
                <span>张丽丽</span>
              </div>
              <div>
                <span>时间：</span>
                <span>2019年4月14日</span>
              </div>
            </div>
            <div>
              <div>
                <span>性别：</span>
                <span>女</span>
              </div>
              <div>
                <span>职业：</span>
                <span>在校学生</span>
              </div>
            </div>
            <div>
              <div>
                <span>身份证：</span>
                <span>342113199403054822</span>
              </div>
            </div>
          </div>
          <van-divider />
          <div class="i_footter">
            <span class="f_info">查看详情</span>
            <span class="f_complete" v-show="true">平台审核中</span>
            <span class="f_unfinished" v-show="false">平台审核中</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="处方分拣">
        <div class="information">
          <div class="i_head">
            <div>
              <div class="ih_title">
                <span>姓名：</span>
                <span>张丽丽</span>
              </div>
              <div>
                <span>时间：</span>
                <span>2019年4月14日</span>
              </div>
            </div>
            <div>
              <div>
                <span>性别：</span>
                <span>女</span>
              </div>
              <div>
                <span>职业：</span>
                <span>在校学生</span>
              </div>
            </div>
            <div>
              <div>
                <span>身份证：</span>
                <span>342113199403054822</span>
              </div>
            </div>
          </div>
          <van-divider />
          <div class="i_footter">
            <span class="f_info">查看详情</span>
            <span class="f_complete" v-show="true">平台分拣中</span>
            <span class="f_unfinished" v-show="false">平台审核中</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="处方制剂">
        <div class="information">
          <div class="i_head">
            <div>
              <div class="ih_title">
                <span>姓名：</span>
                <span>张丽丽</span>
              </div>
              <div>
                <span>时间：</span>
                <span>2019年4月14日</span>
              </div>
            </div>
            <div>
              <div>
                <span>性别：</span>
                <span>女</span>
              </div>
              <div>
                <span>职业：</span>
                <span>在校学生</span>
              </div>
            </div>
            <div>
              <div>
                <span>身份证：</span>
                <span>342113199403054822</span>
              </div>
            </div>
          </div>
          <van-divider />
          <div class="i_footter">
            <span class="f_info">查看详情</span>
            <span class="f_complete" v-show="true">平台制剂中</span>
            <span class="f_unfinished" v-show="false">平台审核中</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="处方交付">
        <div class="information">
          <div class="i_head">
            <div>
              <div class="ih_title">
                <span>姓名：</span>
                <span>张丽丽</span>
              </div>
              <div>
                <span>时间：</span>
                <span>2019年4月14日</span>
              </div>
            </div>
            <div>
              <div>
                <span>性别：</span>
                <span>女</span>
              </div>
              <div>
                <span>职业：</span>
                <span>在校学生</span>
              </div>
            </div>
            <div>
              <div>
                <span>身份证：</span>
                <span>342113199403054822</span>
              </div>
            </div>
          </div>
          <van-divider />
          <div class="i_footter">
            <span class="f_info">查看详情</span>
            <span class="f_complete" v-show="true">平台已交付</span>
            <span class="f_unfinished" v-show="false">平台审核中</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      active: 0
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
    }
  }
};
</script>
<style lang="scss" scoped>
.pharmacy {
  width: 100%;
  height: 100%;
  .head_nav {
    margin-bottom: 1px;
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
  .information {
    margin: 10px 20px;
    width: auto;
    height: auto;
    border-radius: 8px;
    background-color: #fff;
    font-size: 12px;
    color: #646566;
    .i_head {
      width: 100%;
      padding: 10px;
      > div {
        display: flex;
        margin-top: 8px;
      }
      > div:first-child {
        margin-top: 0;
        justify-content: space-between;
      }
      > div:nth-of-type(2) {
        > div {
          margin-right: 25px;
        }
      }
      > div:last-child {
        margin-bottom: 0;
      }
    }
    .van-divider {
      margin: 0;
    }
    .i_footter {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      > span {
        padding: 4px 10px;
        background-color: #fff;
        border: 1px solid #7e3330;
        font-size: 12px;
        border-radius: 20px;
        color: #7e3330;
      }
      .f_complete {
        background-color: #7e3330;
        border: 1px solid #7e3330;
        color: #fff;
      }
    }
    .i_footter_s {
      width: 100%;
      padding: 10px;
      display: flex;
      > span {
        margin-right: 10px;
        padding: 4px 10px;
        background-color: #fff;
        border: 1px solid #7e3330;
        font-size: 12px;
        border-radius: 20px;
        color: #7e3330;
      }
    }
  }
}
</style>
