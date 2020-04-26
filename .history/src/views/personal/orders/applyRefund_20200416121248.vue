<template>
  <div class="applyRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="申请退款" left-arrow @click-left="back" />
    <div class="applyRefund_main">
      <div class="applyRefund_head">
        <div>
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div>
          <div>宁夏枸杞</div>
          <div>规格:250/g 3袋</div>
        </div>
      </div>
      <div class="a_instructions">
        <van-cell title="退款原因" is-link value="请选择" size="large" />
        <van-cell size="large">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">退款金额：</span>
            <span>¥19.9</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <span class="describe">不可修改，最多¥19.9，含发货包邮¥0.00</span>
          </template>
        </van-cell>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="退款说明："
          type="textarea"
          placeholder="选填"
        />
      </div>
      <div class="images">
        <div class="images_title">上传凭证</div>
        <van-uploader v-model="fileList" multiple :max-count="6">
          <div class="u_upload">
            <van-icon class-prefix="iconfont iconxiangji" name="iconxiangji"></van-icon>
            <span>最多上传6张</span>
          </div>
        </van-uploader>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      message: "",
      fileList: []
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
.applyRefund {
  width: 100%;
  height: 100%;
  .applyRefund_main {
    width: 100%;
    height: auto;
    .applyRefund_head {
      width: 100%;
      height: 120px;
      background-color: #fff;
      display: flex;
      padding: 15px;
      > div:first-child {
        width: 35%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
      }
      > div:last-child {
        width: 65%;
        height: 100%;
        padding: 0 10px;
        > div:first-of-type {
          font-size: 16px;
          color: #000000;
        }
        > div:last-of-type {
          margin-top: 10px;
          font-size: 13px;
          color: #666666;
        }
      }
    }
    .a_instructions {
      margin-top: 15px;
      padding: 0;
      width: 100%;
      height: auto;
      background-color: #fff;
      /deep/ .van-cell {
        .describe {
          font-size: 13px;
          color: #969799;
        }
        .van-cell__title {
          display: flex;
          .custom-title {
            display: inline-block;
            width: 80px;
          }
          .custom-title ~ span {
            font-size: 16px;
            color: #7e3330;
          }
        }
        .van-cell__value {
          > span {
            font-size: 16px;
            color: #666666;
          }
        }
        i {
          color: #666666;
        }
        .van-field__label {
          font-size: 16px;
          width: 80px;
        }
        .van-field__value {
          font-size: 16px;
        }
      }
      .van-cell:not(:last-child)::after {
        border: none;
      }
    }
    .images {
      width: 100%;
      height: auto;
      padding: 0 2px 25px 15px;
      background-color: #fff;
      margin-top: 15px;
      .images_title {
        padding: 15px 0;
      }
      /deep/ .van-uploader {
        .van-uploader__preview-image {
          width: 85px;
          height: 85px;
        }
        .van-uploader__input-wrapper {
          border: 2px dashed #a7a7a7;
          color: #666666;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 85px;
          height: 85px;
          .u_upload {
            width: 75px;
            display: flex;
            flex-direction: column;
            text-align: center;
            i {
              font-size: 25px;
              margin-bottom: 6px;
            }
            span {
              font-size: 12px;
            }
          }
          input {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
