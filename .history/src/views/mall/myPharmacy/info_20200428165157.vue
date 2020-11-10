<template>
  <div class="myPharmacy_info">
    <van-nav-bar title="药材详情" left-text="返回" left-arrow @click-left="back" />
    <div class="p_content">
      <div>
        <div class="c_title">药材名称</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">编号</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">单位</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">进价</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">售价</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">数量</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">有效日期</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">预警数</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">总价</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">入库日期</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
    </div>
    <div class="footer">
      <div @click="goPath('/registerAppointment/complaint')">确认修改</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
.myPharmacy_info {
  width: 100%;
  padding-bottom: 50px;
  min-height: 100vh;
  background-color: #ffffff;
  .p_content {
    height: 100%;
    padding: 12px 20px;
    .input_select {
      height: 40px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999999;
      justify-content: space-between;
      background-color: #ffffff;
      border-radius: 5px;
      border: solid 1px #cccccc;
      i {
        font-size: 20px;
        color: #c8a060;
      }
    }
    > div {
      width: 100%;
      margin-bottom: 15px;
      .c_title {
        font-size: 13px;
        letter-spacing: 2px;
        color: #333333;
        margin-bottom: 10px;
      }
      .van-cell-group {
        .van-cell {
          border-radius: 5px;
          border: solid 1px #cccccc;
          margin: 0 auto;
          line-height: 22px;
          padding: 8px 16px;
          color: #999999;
        }
      }
    }
  }
  .footer {
    margin-top: 20px;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 90%;
      height: 45px;
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
      border-radius: 40px;
    }
  }
}
</style>
