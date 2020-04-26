<template>
  <div class="supplier_add">
    <van-nav-bar class="head_nav" left-text="返回" title="添加供应商" left-arrow @click-left="back" />
    <div class="supplier_add_main">
      <div class="s_item">
        <van-cell center icon="icondianpu" icon-prefix="iconfont icondianpu" label="官方认证供应商">
          <template #title>
            <span class="custom-title">上海中药材有限责任公司</span>
          </template>
          <template #right-icon>
            <van-icon name="iconshanchu1" class-prefix="iconfont iconshanchu1" />
          </template>
        </van-cell>
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
    .van-cell {
      margin: 15px 0 0;
      padding: 10px 15px;
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
  }
}
</style>
