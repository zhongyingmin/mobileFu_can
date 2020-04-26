<template>
  <div class="replenishment">
    <van-nav-bar title="一键补货" left-text="返回" left-arrow @click-left="back" />
    <div class="replenishment_main">
      <div class="replenishment_head">从最近购买的商家购买，点击商品可以更改</div>
      <div class="replenishment_content">
        <div class="r_c_item">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>
              <span>
                250/g 一袋
                <van-icon name="play" />
              </span>
            </div>
            <div>
              <div>¥19.9</div>
              <div>
                <van-stepper v-model="value" async-change @change="cg()" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
  created() {},
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
    },
    cg(row) {}
  }
};
</script>
<style lang="scss" scoped>
.replenishment {
  width: 100%;
  height: 100%;
  .replenishment_main {
    width: 100%;
    height: auto;
    .replenishment_head {
      width: 100%;
      font-size: 15px;
      padding: 10px 0;
      text-align: center;
    }
    .replenishment_content {
      width: 100%;
      height: auto;
      .r_c_item {
        width: 100%;
        padding: 15px;
        height: 120px;
        display: flex;
        background-color: #fff;
        overflow: hidden;
        > div:first-child {
          width: 35%;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
        }
        > div:last-child {
          width: 65%;
          height: 100%;
          padding-left: 15px;
          overflow: hidden;
          >div:first-child{
              font-size: 15px;
              color: #000;
          }
        }
      }
    }
  }
}
</style>
