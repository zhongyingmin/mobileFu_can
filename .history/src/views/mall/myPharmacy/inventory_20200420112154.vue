<template>
  <div class="inventory">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入药材名称或编号" slot="title" />
    </van-nav-bar>
    <!-- <div style="width:400px;height:200px" @click="cshow"></div> -->
    <div class="tabs_item" id="item_i">
      <div class="item_right">
        <div class="r_line"></div>
        <div class="r_iconfont">
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
      <van-tab title="全部库存">
        <div class="i-tab_content">
          <div class="item">
            <div>
              <div>药材名称：艾叶</div>
              <div>数量：30</div>
            </div>
            <div>
              <span>编号：001</span>
              <span>单位：500克</span>
              <span>单价：¥29.00</span>
              <span>总价：¥5000</span>
            </div>
            <div>
              <div>入库时间：2019年11月1日</div>
              <div>有效期至2010年11月1日</div>
            </div>
          </div>
          <div class="item">
            <div>
              <div>药材名称：艾叶</div>
              <div>数量：30</div>
            </div>
            <div>
              <span>编号：001</span>
              <span>单位：500克</span>
              <span>单价：¥29.00</span>
              <span>总价：¥5000</span>
            </div>
            <div>
              <div>入库时间：2019年11月1日</div>
              <div>有效期至2010年11月1日</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="库存提醒">
        <div class="i-tab_content_two">
          <div class="item_two" v-for="(item,index) in datat" :key="index">
            <div class="i_box" v-show="state_op==2">
              <van-checkbox v-model="item.isSelected" @change="cg(item)"></van-checkbox>
            </div>
            <div :class="state_op==2?'i_content':'i_content_s'">
              <div>
                <div>药材名称：艾叶</div>
                <div class="right_title">仅剩数量：1</div>
              </div>
              <div>
                <span>编号：001</span>
                <span>单位：500克</span>
                <span>单价：¥29.00</span>
                <span>总价：¥5000</span>
              </div>
              <div>
                <div>入库时间：2019年11月1日</div>
                <div>有效期至2010年11月1日</div>
              </div>
            </div>
          </div>
          <div class="footer_c">
            <div class="footer_options" v-show="state_op==1">
              <span @click="state_op=2">选择药材</span>
              <span>一键补货</span>
            </div>
            <div class="footer_choose" v-show="state_op==2">
              <span @click="state_op=1">取消选择</span>
              <span>
                <span>发送给供货方</span>
                <span>直接商城购买</span>
              </span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="有效期提醒">
        <div class="i-tab_content"></div>
      </van-tab>
    </van-tabs>
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
      state_op: 1,
      state: true,
      active: 0,
      active_select: 0,
      show_date: false,
      activeNames: "1",
      items: [{ text: "分组 1" }, { text: "分组 2" }],
      value: "",
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2010, 1, 1),
      End_date: new Date(),
      datat: [
        {
          id: 1,
          isSelected: false
        },
        {
          id: 2,
          isSelected: false
        }
      ],
      multipleSelection: []
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
    cg(row) {
      console.log(row);
      if (!row.isSelected) {
        if (multipleSelection.length > 0) {
          multipleSelection.forEach(element => {
            if (element.id == row.id) {
              console.log("删除");
            }
            return;
          });
        }
        return;
      }
      this.multipleSelection = row;
      console.log(this.multipleSelection);
      return;
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
.inventory {
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
    width: 30%;
    height: 40px;
    background: #fff;
    overflow: hidden;
    text-align: right;
    .item_right {
      width: 70px;
      padding: 0 15px;
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
      width: 70%;
      height: 40px;
    }
    .van-tabs__wrap::after {
      border-width: 0;
    }
    .van-tabs__content {
      pointer-events: all;
      // padding: 10px 0;
      width: 100%;
      float: none;
      clear: both;
      .i-tab_content {
        width: 100%;
        min-height: calc(100vh - 88px);
        padding: 15px 0 0;
        .footer_c {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: #fff;
          height: auto;
          > div {
            width: 100%;
            height: 45px;
            display: flex;
            border: 1px solid #d1d1d1;
          }
          .footer_options {
            > span {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 50%;
              height: 100%;
              color: #fff;
            }
            span:first-child {
              background-color: #7e3330;
            }
            span:last-child {
              background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
                linear-gradient(#7e3330, #7e3330);
            }
          }
          .footer_choose {
            padding: 0 10px;
            align-items: center;
            justify-content: space-between;
            > span {
              display: inline-flex;
              align-items: center;
            }
            > span:first-child {
              width: 30%;
              color: #000;
              font-size: 15px;
            }
            > span:last-child {
              width: 70%;
              justify-content: flex-end;
              > span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 38px;
                padding: 0 10px;
              }
              > span:first-child {
                border: solid 1px #7e3330;
                color: #7e3330;
                font-size: 15px;
                border-radius: 35px;
                margin-right: 10px;
              }
              > span:last-child {
                background-image: linear-gradient(
                    90deg,
                    #e6c469 0%,
                    #c8a060 100%
                  ),
                  linear-gradient(#7e3330, #7e3330);
                color: #fff;
                font-size: 15px;
                border-radius: 35px;
              }
            }
          }
        }
        %item {
          padding: 15px 15px 0;
          background-color: #fff;
          border-radius: 5px;
          overflow: hidden;
          > div {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
          }
          > div:first-child {
            justify-content: space-between;
            color: #333333;
            font-size: 13px;
            > div:first-child {
              color: #000;
              font-size: 15px;
            }
            .right_title {
              color: #7e3330;
            }
          }
          > div:nth-of-type(2) {
            color: #333333;
            font-size: 13px;
            > span {
              margin-right: 10px;
            }
          }
          > div:last-child {
            justify-content: space-between;
            color: #666666;
            font-size: 12px;
          }
        }
        .item {
          @extend %item;
          margin: 0 15px 15px;
        }
        // .item_two:last-of-type {
        //   @extend %item;
        //   margin: 0 0 50px;
        // }
      }
      .i-tab_content_two {
        @extend .i-tab_content;
        padding: 15px 0 50px;
        .item_two {
          display: flex;
          padding: 15px 15px 0;
          background-color: #fff;
          border-radius: 0;
          overflow: hidden;
          margin: 0 0 15px;
          .i_box {
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-bottom: 15px;
          }
          .i_content {
            @extend %item;
            width: 90%;
            border-radius: 0;
            padding: 0;
          }
          .i_content_s {
            @extend %item;
            width: 100%;
            border-radius: 0;
            padding: 0;
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
