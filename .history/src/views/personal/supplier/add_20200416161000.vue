<template>
  <div class="supplier_add">
    <van-nav-bar class="head_nav" left-text="返回" title="添加供应商" left-arrow @click-left="back" />
    <div class="supplier_add_main">
      <div class="s_item">
        <van-cell center label="官方认证供应商">
          <template #title>
            <span class="custom-title">上海中药材有限责任公司</span>
          </template>
          <template #right-icon>
            <span class="button_r">进店</span>
          </template>
          <template #icon>
            <div class="image_l">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
          </template>
        </van-cell>
        <div class="i_content">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>¥19.9</span>
          </div>
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>¥19.9</span>
          </div>
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>¥19.9</span>
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
.supplier_add {
  width: 100%;
  height: 100%;
  .supplier_add_main {
    width: 100%;
    height: auto;
    padding: 15px 15px 0;
    .s_item {
      margin-bottom: 15px;
      width: 100%;
      height: auto;
      border-radius: 5px;
      background-color: #fff;
      overflow: hidden;
      .van-cell {
        padding: 10px 15px;
        .image_l {
          width: 3em;
          height: 3em;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 5px;
        }
        .button_r {
          border: solid 1px #7e3330;
          border-radius: 25px;
          font-size: 14px;
          padding: 2px 15px;
          color: #7e3330;
        }
        i:first-child {
          color: #c8a060;
          font-size: 25px;
        }
        .van-cell__left-icon {
          margin-right: 15px;
        }
        i {
          color: #b2b2b2;
          font-size: 25px;
        }
        .van-cell__title {
          .custom-title {
            font-size: 15px;
            color: #000000;
            margin-right: 10px;
          }
          .phone {
            font-size: 12px;
            color: #666666;
          }
          .van-cell__label {
            font-size: 13px;
            color: #666666;
          }
          .orders_id {
            font-size: 12px;
            color: #000000;
          }
        }
      }
      .van-cell:not(:last-child)::after {
        border: none;
      }
      .i_content {
        width: 100%;
        height: 100px;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        div {
          width: 100px;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          span {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 2px 3px;
            font-size: 13px;
            background-color: #333333;
            border-radius: 0px 5px 0px 0px;
            opacity: 0.3;
          }
        }
      }
    }
  }
}
</style>
