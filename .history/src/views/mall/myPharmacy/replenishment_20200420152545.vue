<template>
  <div class="replenishment">
    <van-nav-bar title="一键补货" left-text="返回" left-arrow @click-left="back" />
    <div class="replenishment_main">
      <van-cell
        center
        icon="icondianpu"
        icon-prefix="iconfont icondianpu"
        label="地址：上海市闵行区上海康城小区康城道80号503室"
        is-link
      >
        <template #title>
          <span class="custom-title">上海中药材有限责任公司</span>
        </template>
      </van-cell>
      <div class="replenishment_head">从最近购买的商家购买，点击商品可以更改</div>
      <div class="replenishment_content">
        <div class="r_c_item" v-for="(item,index) in list" :key="index">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>{{item.title}}</div>
            <div>
              <div>
                <span>
                  {{item.tag}}
                  <van-icon name="play" />
                </span>
              </div>
            </div>
            <div>
              <div>¥{{item.price}}</div>
              <div>
                <van-stepper v-model="item.value" async-change @change="cg(item)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_div">
      <div>共{{list.length}}件</div>
      <div>
        <span>合计:</span>
        <span>¥{{sum | toFixed}}</span>
        <span>确认补货</span>
      </div>
    </div>
  </div>
</template>
<script>
import { changeTwoDecimal_f } from "@/utils/func.js";
export default {
  data() {
    return {
      value: "",
      list: [
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        },
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        }
      ]
    };
  },
  filters: {
    toFixed(param1) {
      return changeTwoDecimal_f(param1);
    }
  },
  computed: {
    sum() {
      //如果写成函数形式，默认使用get方法，因为是总价，所以是不能有set方法
      return this.list.reduce((prev, next) => {
        console.log(prev);
        console.log(next);
        return prev + next.price * next.value; //第一次的prev给默认指定是0，所以next是第一个商品，直接是第一个商品的数量乘价格。reduce每一轮循环返回的数值就是下一轮的prev。所以这对每一个选中的商品进行求和
      }, 0); //这个0是指定默认的第一次的prev是0
    }
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
    cg(row) {
      this.$toast.loading({ forbidClick: true });
      setTimeout(() => {
        this.$toast.clear();
        row.value;
      }, 500);
    }
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
    .van-cell {
      margin: 15px 0;
      .van-cell__left-icon {
        font-size: 22px;
        color: #c8a060;
        margin-right: 16px;
      }
      .van-cell__title{
        .custom-title{
          font-size: 15px;
        }
      }
    }
    .replenishment_head {
      width: 100%;
      font-size: 15px;
      padding: 10px 0;
      text-align: center;
    }
    .replenishment_content {
      width: 100%;
      height: auto;
      padding-bottom: 46px;
      .r_c_item {
        width: 100%;
        padding: 15px;
        height: 120px;
        display: flex;
        background-color: #fff;
        margin-bottom: 15px;
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
          padding-bottom: 4px;
          //   overflow: hidden;
          > div {
            width: 100%;
          }
          > div:first-child {
            font-size: 15px;
            color: #000;
            margin-bottom: 10px;
          }
          > div:nth-of-type(2) {
            margin-bottom: 10px;
            font-size: 12px;
            > div {
              display: inline-flex;
              align-items: center;
              position: relative;
              background-color: RGBA(210, 210, 210, 0.6);
              border-radius: 5px;
              padding: 3px 10px;
              span {
                display: inline-block;
                max-width: 140px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 15px;
                color: #333333;
              }
              i {
                position: absolute;
                right: 7px;
                top: 6px;
                transform: rotate(90deg);
                color: #454545;
              }
            }
          }
          > div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            div:first-child {
              color: #7e3330;
            }
          }
        }
      }
    }
  }
  .footer_div {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 15px;
    height: 45px;
    background-color: #fff;
    border-top: 1px solid #d1d1d1;
    > div:first-child {
      color: #000;
    }
    > div:last-child {
      display: inline-flex;
      align-items: center;
      color: #000;
      height: 100%;
      span:first-child {
        margin-right: 5px;
      }
      span:nth-of-type(2) {
        color: #7e3330;
        margin-right: 10px;
      }
      span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#7e3330, #7e3330);
        background-blend-mode: normal, normal;
        border-radius: 35px;
        color: #fff;
        width: 120px;
        height: 100%;
      }
    }
  }
}
</style>
