<template>
  <div class="mallList">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入搜索关键词" slot="title" />
    </van-nav-bar>
    <div class="content_main">
      <div class="tabs_item" id="item_i">
        <div class="item_right">
          <div class="r_line"></div>
          <div class="r_iconfont">
            <van-icon name="filter-o" />
          </div>
        </div>
      </div>
      <van-tabs
        v-model="active"
        id="tabs"
        title-active-color="#7c322f"
        color="#7c322f"
        line-height="2"
        title-inactive-color="#333333"
      >
        <van-tab title="中药饮片">
          <div class="c_item" @click="goPath('/mall/List/goodsDetails')">
            <div class="c_item_image"></div>
            <div class="c_item_text">
              <div class="c_item_text_head">
                <div class="c_item_text_head_title">宁夏枸杞</div>
                <div class="c_item_text_head_tag">
                  <i class="iconitem iconfont icontianjia"></i>
                </div>
              </div>
              <div class="c_item_text_describe">
                <span class="c_item_text_describe_left">¥69.9</span>
                <span class="c_item_text_describe_right">包邮</span>
              </div>
            </div>
          </div>
          <div class="c_item">
            <div class="c_item_image"></div>
            <div class="c_item_text">
              <div class="c_item_text_head">
                <div class="c_item_text_head_title">苍术（已炒制）</div>
                <div class="c_item_text_head_tag">
                  <i class="iconitem iconfont icontianjia"></i>
                </div>
              </div>
              <div class="c_item_text_describe">
                <span class="c_item_text_describe_left">¥69.9</span>
                <span class="c_item_text_describe_right">包邮</span>
              </div>
            </div>
          </div>
          <div class="c_item">
            <div class="c_item_image"></div>
            <div class="c_item_text">
              <div class="c_item_text_head">
                <div class="c_item_text_head_title">苍术（已炒制）</div>
                <div class="c_item_text_head_tag">
                  <i class="iconitem iconfont icontianjia"></i>
                </div>
              </div>
              <div class="c_item_text_describe">
                <span class="c_item_text_describe_left">¥69.9</span>
                <span class="c_item_text_describe_right">包邮</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="中成药"></van-tab>
        <van-tab title="加工定制"></van-tab>
      </van-tabs>
    </div>
    <!-- 11
        <ul>
            <li v-for="(item,index) in data" :key="index">{{item.title}}:金额:{{item.content}}<span>添加</span></li>
    </ul>-->
  </div>
</template>
<script>
import { getList } from "@/api/goods";
export default {
  data() {
    return {
      data: [],
      value: "",
      active: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let _this = this;
      getList().then(res => {
        console.log(res);
        _this.data = res;
      });
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.mallList {
  width: 100%;
  min-height: 100%;
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
  .content_main {
    width: 100%;
    height: auto;
    background-color: #fff;
    .tabs_item {
      float: right;
      width: 35%;
      height: 40px;
      background: #fff;
      overflow: hidden;
      text-align: right;
      .item_right {
        width: 60px;
        padding: 0 10px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        .r_line {
          width: 2px;
          height: 20px;
          background: rgba(204, 204, 204, 0.6);
        }
        .r_iconfont {
          display: inline-block;
          vertical-align: middle;
          i {
            font-size: 25px;
            color: #646566;
          }
        }
      }
    }
    /deep/ .van-tabs {
      pointer-events: none;
      .van-tabs__wrap {
        pointer-events: all;
        width: 65%;
        height: 40px;
      }
      .van-tabs__wrap::after {
        border-width: 0;
      }
      .van-tabs__content {
        pointer-events: all;
        width: 100%;
        height: auto;
        .van-tab__pane {
          width: 100%;
          height: auto;
          margin-top: 15px;
          padding: 0 15px;
          background-color: #fff;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .c_item {
            width: 49%;
            margin-bottom: 4%;
            height: 200px;
            border-radius: 5px;
            overflow: hidden;
            // border: solid 1px #dcdcdc;
            .c_item_image {
              width: 100%;
              height: 65%;
              background-color: #f7f3ed;
            }
            .c_item_text {
              width: 100%;
              height: 35%;
              padding: 10px;
              border-bottom: 1px solid #dcdcdc;
              border-right: 1px solid #dcdcdc;
              border-left: 1px solid #dcdcdc;
              border-radius: 0px 0px 5px 5px;
              .c_item_text_head {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
                .c_item_text_head_title {
                  font-size: 14px;
                }
                .c_item_text_head_tag {
                  display: inline-flex;
                  align-items: center;
                  .iconitem {
                    font-size: 25px;
                    color: #7e3330;
                  }
                }
              }
              .c_item_text_describe {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                .c_item_text_describe_left {
                  color: #79312e;
                }
                .c_item_text_describe_right {
                  color: #666666;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>