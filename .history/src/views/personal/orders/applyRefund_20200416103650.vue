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
        <van-cell title="退款原因" is-link value="请选择" />
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">退款金额:</span>
            <span>¥19.9</span>
          </template>
        </van-cell>
        <van-cell title="不可修改，最多¥19.9，含发货包邮¥0.00" />
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="退款说明:"
          type="textarea"
          placeholder="选填"
        />
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
      message: ""
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
      padding: ;
      width: 100%;
      height: auto;
      background-color: #fff;
      /deep/ .van-cell {
        .van-field__label {
          width: 68px;
        }
      }
    }
  }
}
</style>
