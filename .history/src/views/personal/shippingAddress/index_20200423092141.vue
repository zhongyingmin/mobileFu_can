<template>
  <div class="shippingAddress">
    <van-nav-bar class="head_nav" title="我的收货地址" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      this.$toast("新增地址");
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
      this.$router.push("/personal/addressEditor");
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
.shippingAddress {
  width: 100%;
  height: 100%;
  /deep/ .van-address-item .van-radio__icon--checked .van-icon{
    background-color: #c8a060;
    border-color: #c8a060;
  }
  .van-address-list__bottom {
    background-color: rgba(0, 0, 0, 0);
    .van-address-list__add {
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
    }
    .van-button--danger{
      border: none;
    }
  }
}
</style>
