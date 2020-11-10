<template>
  <div class="medicalSummary">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入搜索关键词" slot="title" />
    </van-nav-bar>
    <!-- <div style="width:400px;height:200px" @click="cshow"></div> -->
    <div class="tabs_item" id="item_i">
      <div class="item_right">
        <div class="r_line"></div>
        <div class="r_iconfont">
          <i @click="show = true" class="iconitem iconfont iconfenlei"></i>
          <i @click="show_date = true" class="iconitem iconfont iconrili"></i>
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
      <van-tab title="病案总结">
        <div class="information">
          <div class="i_head">
            <div>
              <div class="ih_title">流行性感冒</div>
              <div>
                <span>时间：</span>
                <span>2019年4月14日</span>
              </div>
            </div>
            <div>
              <div>
                <span>姓名：</span>
                <span>张丽丽</span>
              </div>
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
            <span class="f_complete" v-show="true">总结已填写</span>
            <span class="f_unfinished" v-show="false">总结未填写</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="病历库">
        <div class="information">
          <div class="i_head">
            <div>
              <div>
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
            <span class="f_info" @click="info">查看详情</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="健康档案">
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
          <div class="i_footter_s">
            <span class="f_info">首次就诊</span>
            <span class="f_info">第一次就诊</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-action-sheet v-model="show" title="症状分类">
      <div class="content">
        <van-tree-select
          height="65vh"
          :items="items"
          :main-active-index.sync="active_select"
          @click-nav="onChange"
        >
          <template #content>
            <van-collapse v-model="activeNames" accordion>
              <van-collapse-item title="标题1" name="1">
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
              </van-collapse-item>
              <van-collapse-item title="标题2" name="2">
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
                <van-cell title="单元格" icon-prefix="iconfont icondingdan" icon="icondingdan" />
              </van-collapse-item>
            </van-collapse>
            <!-- <van-image
              v-if="active_select === 0"
              src="https://img.yzcdn.cn/vant/apple-1.jpg"
            />
            <van-image
              v-if="active_select === 1"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
            />-->
          </template>
        </van-tree-select>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="show_date" title="选择时间">
      <div class="content">
        <div class="content_div">
          <div
            @click="state = true"
            :class="state === true ? 'span_sidebar' : 'span_item'"
          >{{ currentDate | formatTime }}</div>
          <div class="c_conter">至</div>
          <div
            @click="state = false"
            :class="state != true ? 'span_sidebar' : 'span_item'"
          >{{ End_date | formatTime }}</div>
        </div>
        <van-datetime-picker
          v-show="state"
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
        />
        <van-datetime-picker
          v-show="!state"
          v-model="End_date"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
        />
        <div class="footer_div">
          <span>取消</span>
          <span>确定</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
import { formatDate } from "../../../utils/date.js";
export default {
  data() {
    return {
      state: true,
      active: 0,
      active_select: 0,
      show_date: false,
      activeNames: "1",
      show: false,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
      value: "",
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2010, 1, 1),
      End_date: new Date()
    };
  },
  filters: {
    formatTime(time) {
      // console.log(time);
      // var date = new Date(time);
      // console.log(date)
      return formatDate(time, "yyyy-MM-dd");
    }
  },
  created() {},
  methods: {
    onChange(index) {
      this.$notify({ type: "primary", message: index });
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    info() {
      console.log(1);
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      }
      return val;
    }
  }
};
</script>
<style lang="scss" scoped>
.medicalSummary {
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
  .tabs_item {
    float: right;
    width: 35%;
    height: 40px;
    background: #fff;
    overflow: hidden;
    text-align: right;
    .item_right {
      width: 90px;
      padding: 0 12px;
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
      padding: 15px 0;
      width: 100%;
      float: none;
      clear: both;
      .information {
        margin: 0 12px 15px;
        width: auto;
        height: auto;
        border-radius: 8px;
        background-color: #fff;
        font-size: 12px;
        color: #646566;
        &.information:last-child{
          margin-bottom: 0;
        }
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
            > .ih_title {
              font-size: 14px;
              color: #000;
            }
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
  }
  .van-action-sheet {
    .van-action-sheet__header {
      border-bottom: 1px solid #fafafa;
    }
    .van-action-sheet__content {
      .content {
        .content_div {
          display: flex;
          justify-content: center;
          padding: 30px 0 40px;
          > .c_conter {
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            margin: 0 10px;
            border-bottom: 5px solid transparent;
          }
          > div:first-child,
          div:last-child {
            padding-bottom: 5px;
            // border-bottom: 2px solid #d2d2d2;
          }
          > div:first-child:active,
          div:last-child:active {
            border-bottom: 2px solid #7e3330;
            color: #7e3330;
          }
          .span_sidebar {
            border-bottom: 2px solid #7e3330;
            color: #7e3330;
          }
          .span_item {
            border-bottom: 2px solid #d2d2d2;
          }
        }
        .footer_div {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          > span {
            width: 50%;
            height: 40px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
          span:first-child {
            background-color: #e5e5e5;
          }
          span:last-child {
            background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
              linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            color: #fff;
          }
        }
        /deep/ .van-picker {
          .van-picker__toolbar {
            display: none;
          }
        }
      }
      .van-tree-select__nav {
        background-color: #fff;
        // .van-sidebar-item--select:active {
        // }
        .van-sidebar-item {
          border: none;
          text-align: center;
          background-color: #fff;
        }
        .van-sidebar-item--select,
        .van-sidebar-item--select:active {
          background-color: #7e3330;
          color: #fff;
        }
      }
      /deep/ .van-tree-select__content {
        background-color: #fafafa;
        .van-collapse {
          .van-cell {
            background-color: #fafafa;
          }
          .van-collapse-item__content {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
