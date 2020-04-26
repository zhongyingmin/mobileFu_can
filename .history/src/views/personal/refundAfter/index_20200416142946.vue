<template>
  <div class="refundAfter">
    <van-nav-bar class="head_nav" left-text="返回" title="退款售后" left-arrow @click-left="back" />
    <div class="refundAfter_main">
      <div class="m_item">
        <van-cell
          title="同仁堂旗舰店"
          icon-prefix="iconfont icongongyingshang"
          icon="icongongyingshang"
          is-link
        />
        <div class="cell_info">
          <div class="info_first">
            <div class="info_image">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div>
              <div>
                <div>宁夏枸杞</div>
                <div>规格：250/g 一袋</div>
                <div>
                  <div>退款：¥19.9</div>
                  <div>×1</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="red_f">待商家处理，</span>商家将在
            <span class="red_f">1天24小时</span>
            内处理
          </div>
          <div>
            <span>共1件</span>
            <span>
              合计:
              <span>¥19.9</span>
            </span>
          </div>
          <div>
            <span>删除记录</span>
            <span>查看详情</span>
          </div>
        </div>
      </div>
      <div class="m_item">
        <van-cell
          title="同仁堂旗舰店"
          icon-prefix="iconfont icongongyingshang"
          icon="icongongyingshang"
          is-link
        />
        <div class="cell_info">
          <div class="info_first">
            <div class="info_image">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div>
              <div>
                <div>宁夏枸杞</div>
                <div>规格：250/g 一袋</div>
                <div>
                  <div>退款：¥19.9</div>
                  <div>×1</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="red_f">待商家处理，</span>商家将在
            <span class="red_f">1天24小时</span>
            内处理
          </div>
          <div>
            <span>共1件</span>
            <span>
              合计:
              <span>¥19.9</span>
            </span>
          </div>
          <div>
            <span>删除记录</span>
            <span>查看详情</span>
          </div>
        </div>
      </div>
      <div class="m_item">
        <van-cell
          title="同仁堂旗舰店"
          icon-prefix="iconfont icongongyingshang"
          icon="icongongyingshang"
          is-link
        />
        <div class="cell_info">
          <div class="info_first">
            <div class="info_image">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div>
              <div>
                <div>宁夏枸杞</div>
                <div>规格：250/g 一袋</div>
                <div>
                  <div>退款：¥19.9</div>
                  <div>×1</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="red_f">待商家处理，</span>商家将在
            <span class="red_f">1天24小时</span>
            内处理
          </div>
          <div>
            <span>共1件</span>
            <span>
              合计:
              <span>¥19.9</span>
            </span>
          </div>
          <div>
            <span>删除记录</span>
            <span>查看详情</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.refundAfter {
  width: 100%;
  height: 100%;
  .refundAfter_main {
    padding: 15px 15px 0;
    .m_item {
      background-color: #fff;
      width: 100%;
      height: auto;
      padding: 5px 10px 0;
      border-radius: 5px;
      .van-cell {
        padding: 10px 16px 0px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        .van-cell__title {
          font-size: 16px;
        }
        .van-cell__left-icon {
          font-size: 16px;
        }
      }
      .van-cell:not(:last-child)::after {
        border-bottom: none;
      }
      .van-cell:active {
        background-color: #fff;
      }
      .cell_info {
        padding: 5px 10px 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        width: 100%;
        background-color: #fff;
        > .info_first {
          width: 100%;
          height: 95px;
          display: flex;
          .info_image {
            width: 125px;
            height: 100%;
            border-radius: 5px;
            overflow: hidden;
          }
          > div:last-child {
            flex-grow: 1;
            padding-left: 15px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            > div:first-child {
              width: 100%;
              height: 100%;
              position: relative;
              color: #000;
              > div:nth-of-type(2) {
                font-size: 13px;
                color: #666666;
                margin-top: 10px;
              }
              > div:first-child {
                font-size: 16px;
              }
              > div:last-of-type {
                position: absolute;
                font-size: 13px;
                display: flex;
                bottom: 0;
                > div:last-child {
                  margin-left: 10px;
                }
              }
            }
            // > div:last-child {
            //   height: 100%;
            //   text-align: right;
            //   > div:first-child {
            //     font-size: 13px;
            //     color: #000;
            //   }
            //   > div:last-child {
            //     font-size: 13px;
            //     margin-top: 2px;
            //     color: #666666;
            //   }
            // }
          }
        }
        > div {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        > div:nth-of-type(2) {
          margin-top: 20px;
          padding-left: 10px;
          font-size: 13px;
          height: 35px;;
          align-items: center;
          justify-content: flex-start;
          background-color: #f5f5f5;
          .red_f {
            color: #7e3330;
          }
        }
        > div:nth-of-type(3) {
          font-size: 13px;
          > span:first-child {
            color: #666;
            margin-right: 10px;
          }
          > span:last-child {
            color: #000;
            > span {
              color: #7e3330;
            }
          }
        }
        > div:nth-of-type(4) {
          > span {
            margin-left: 15px;
            border: solid 1px #a0a0a0;
            color: #666666;
            width: 74px;
            height: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-radius: 25px;
          }
          > span:last-child {
            border: solid 1px #7e3330;
            color: #7e3330;
          }
        }
      }
    }
  }
}
</style>
