<template>
  <div class="personal">
    <div class="personal_body">
      <div class="Personal_haed">
        <div class="h_portrait">
          <span class="font_audit">未完善</span>
          <div class="Head_portrait">
            <van-image round width="90px" height="90px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>张患者</span>
          </div>
        </div>
        <div class="h_order">
          <div class="h_order_c">
            <div>我的订单</div>
            <div class="h_order_font">
              全部订单
              <van-icon name="arrow" class="p_cell__right_icon" />
            </div>
          </div>
          <div class="h_order_bottom">
            <van-grid class="h_order_grid">
              <van-grid-item
                class="h_order_grid_item"
                icon-prefix="iconfont icondaishouhuo_fuzhi"
                icon="icondaishouhuo_fuzhi"
                text="待付款"
                @click="goPath('/orders/list')"
              />
              <van-grid-item
                class="h_order_grid_item"
                icon-prefix="iconfont icondaifahuo_fuzhi"
                icon="icondaifahuo_fuzhi"
                text="待发货"
              />
              <van-grid-item
                class="h_order_grid_item"
                icon-prefix="iconfont icondaishouhuo_fuzhi"
                icon="icondaishouhuo_fuzhi"
                text="待收货"
              />
              <van-grid-item
                class="h_order_grid_item"
                icon-prefix="iconfont iconshouhou_fuzhi"
                icon="iconshouhou_fuzhi"
                text="售后退款"
              />
            </van-grid>
          </div>
        </div>
      </div>
      <div class="Personal_content">
        <div class="p_cell">
          <van-icon name="contact" class="p_cell__right_icon icon_f" />
          <div class="p_cell__title">
            <span>完善个人信息</span>
          </div>
          <van-icon name="arrow" class="p_cell__right_icon" />
        </div>
        <div class="p_cell" @click="goPath('/shippingAddress')">
          <van-icon name="location-o" class="p_cell__right_icon icon_f" />
          <div class="p_cell__title">
            <span>收货地址</span>
          </div>
          <van-icon name="arrow" class="p_cell__right_icon" />
        </div>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from "@/components/navigation";
export default {
  data() {
    return {};
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    }
  },
  components: {
    Navigation
  }
};
</script>
<style lang="scss" scoped>
.personal {
  width: 100%;
  height: 100%;
  .personal_body {
    width: 100%;
    height: calc(100vh - 50px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .Personal_haed {
      padding-bottom: 10px;
      flex: 2;
      .h_portrait {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 2;
        background-color: #cba361;
        position: relative;
        .font_audit {
          position: absolute;
          left: 15px;
          top: 15px;
          font-size: 12px;
          color: #cba361;
          padding: 2px 9px;
          background-color: #fff;
          border-radius: 20px;
        }
        .Head_portrait {
          width: 90px;
          text-align: center;
          > span:last-child {
            color: #fff;
          }
        }
      }
      .h_order {
        width: 100%;
        flex: 1;
        background-color: #fff;
        .h_order_c {
          padding: 0.6rem 15px 0;
          height: 31px;
          display: flex;
          justify-content: space-between;
          .h_order_font {
            display: inline-flex;
            color: #969799;
            align-items: center;
            font-size: 13px;
          }
        }
        .h_order_bottom {
          height: calc(100% - 31px);
          .h_order_grid {
            width: 100%;
            height: 100%;
            .h_order_grid_item {
              /deep/ .van-grid-item__content {
                padding: 8px 8px;
                i {
                  font-size: 30px;
                  color: #cba361;
                }
                .van-grid-item__text {
                  margin-top: 2px;
                }
              }
            }
            .h_order_grid_item :after {
              border: none;
            }
          }
          .h_order_grid::after {
            border: none;
          }
        }
      }
    }
    .Personal_content {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      flex: 2;
      .p_cell {
        cursor: pointer;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        .p_cell__title {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
        }
        .p_cell__right_icon {
          margin-left: 5px;
          color: #cba361;
          min-width: 1em;
          height: 24px;
          font-size: 16px;
          line-height: 24px;
        }
        .icon_f {
          font-size: 20px;
          margin-right: 15px;
        }
      }
      .p_cell:active {
        background-color: #f2f3f5;
      }
      .p_cell::after {
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
  }
}
</style>
