<template>
  <div class="shoppingCart">
    <div class="shoppingCart_body">
      <div class="shoppingCart_head">
        <van-row class="head_dz">
          <van-col span="8">
            <div class="h_center" @click="state = !state">
              <span v-show="state">管理</span>
              <span v-show="state==false">完成</span>
            </div>
          </van-col>
          <van-col span="8">
            <div class="h_center">购物车</div>
          </van-col>
          <van-col span="8"></van-col>
        </van-row>
      </div>
      <van-tabs
        v-model="active"
        title-active-color="#7c322f"
        color="#7c322f"
        line-height="2"
        line-width="40"
        title-inactive-color="#666666"
      >
        <van-tab title="个人">
          <ul>
            <li v-for="(item, index) in data" :key="index">
              <van-swipe-cell class="cell_swipe">
                <van-checkbox v-model="item.isSelected"></van-checkbox>
                <van-card
                  :price="item.content | toFixeds(2)"
                  :title="item.title"
                  class="goods-card"
                  thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                >
                  <div slot="tags">ss</div>
                  <div slot="bottom">
                    <van-stepper
                      v-model="item.number"
                      async-change
                      @change="onChange(item._id, item)"
                    />
                  </div>
                </van-card>
                <van-button slot="right" square text="删除" type="danger" class="delete-button" />
              </van-swipe-cell>
              <!-- <input
            type="checkbox"
            name="item"
            v-model="item.isSelected"
            :id="'male' + index"
              />-->
              <!-- <label :for="'male' + index">{{ item.title }}</label>
              金额:{{ item.content }}-->
            </li>
            <!-- <li>
          <input type="checkbox" id="checkAll" v-model="checkAll" />
          <label for="checkAll">全选</label>
          <span>合计:{{ sum | toFixed(2) }}</span>
            </li>-->
          </ul>
        </van-tab>
        <van-tab title="药房">内容 2</van-tab>
      </van-tabs>
      <van-submit-bar
        v-show="state"
        :price="sum | toFixed(2)"
        button-text="结算"
        @submit="onSubmit"
        class="flxed_bar"
      >
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <!-- <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>-->
      </van-submit-bar>
      <van-submit-bar v-show="!state" button-text="删除" @submit="onSubmit" class="flxed_bar">
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <!-- <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>-->
      </van-submit-bar>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from "@/components/navigation";
import { getList, update } from "@/api/goods";
export default {
  data() {
    return {
      data: [],
      state: true,
      active: 2
    };
  },
  filters: {
    toFixed(input, param1) {
      //这里的input是值管道符前面的运算结果,param1是定义一个变量接收过滤函数传过来的参数
      // console.log(input)
      // console.log(param1)
      // console.log(input.toFixed(param1))
      return parseFloat(input * 100);
    },
    toFixeds(input, param1) {
      //这里的input是值管道符前面的运算结果,param1是定义一个变量接收过滤函数传过来的参数
      // console.log(input);
      // console.log(param1)
      // console.log(input.toFixed(param1))
      return parseFloat(input).toFixed(param1);
    }
  },
  computed: {
    checkAll: {
      get() {
        //在第一次页面加载过程中，checkAll就会调用get方法，获取当前自己应该是什么状态。
        return this.data.every(item => {
          //用every方法，因为如果数组中有一个是false，every方法就会返回false，跟我们的全选是一样的，有一个没选中就是false。
          return item.isSelected; //找到false，返回false
        });
      },
      set(val) {
        //当我们改变全选的选中框，就会得到一个参数，这个参数代表的是我们改变全选框之后的状态。
        this.data.forEach(item => {
          //这里用循环数组的方法来给每一个商品的选中进行赋值，跟全选的输入框是同一个状态。
          return (item.isSelected = val);
        });
      }
    },
    sum() {
      //如果写成函数形式，默认使用get方法，因为是总价，所以是不能有set方法
      return this.data.reduce((prev, next) => {
        //
        if (!next.isSelected) return prev; //如果商品是没有选中状态的，将直接返回prev，不计算本轮。
        return prev + next.content * next.number; //第一次的prev给默认指定是0，所以next是第一个商品，直接是第一个商品的数量乘价格。reduce每一轮循环返回的数值就是下一轮的prev。所以这对每一个选中的商品进行求和
      }, 0); //这个0是指定默认的第一次的prev是0
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    Navigation
  },
  methods: {
    onSubmit() {},
    getData() {
      let _this = this;
      getList().then(res => {
        _this.init(res);
        // console.log(_this.data)
      });
    },
    init(data) {
      data.forEach(element => {
        element.isSelected = false;
      });
      this.data = data;
    },
    onChange(id, item) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.$toast.clear();

        update(id, item).then(res => {
          console.log("成功");
        });
        // 注意此时修改 value 后会再次触发 change 事件
        // this.value = value;
      }, 500);
    },
    add(id, item) {
      ++item.number;
    },
    Reduction(id, item) {
      --item.number;
      update(id, item).then(res => {
        console.log("成功");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.shoppingCart {
  width: 100%;
  height: 100%;
  .shoppingCart_body {
    width: 100%;
    height: auto;
    .shoppingCart_head {
      width: 100%;
      height: 50px;
      background-color: #fff;
      margin-bottom: 1px;
      // border-bottom: 1px solid #fafafa;
      .head_dz {
        width: 100%;
        height: 50px;
        > div {
          height: 100%;
          .h_center {
            padding: 0 12px;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
        > div:nth-of-type(2) {
          .h_center {
            justify-content: center;
            font-size: 19px;
          }
        }
      }
      /deep/ .van-tabs {
        pointer-events: none;
        .van-tabs__wrap {
          pointer-events: all;
          width: 65%;
          height: 40px;
        }
        .van-tabs__wrap::after {
          border-width: 0;
        }
        .van-tabs__content {
          width: 100%;
          height: calc(100vh - 50px);
          overflow-x: auto;
          ul {
            li {
              .cell_swipe {
                /deep/ .van-swipe-cell__wrapper {
                  padding: 0 10px;
                  margin-bottom: 5px;
                  display: flex;
                  background-color: #fff;
                  .van-swipe-cell__right {
                    .van-button--square {
                      height: 100%;
                    }
                  }
                  .van-checkbox {
                    margin-top: 8px;
                  }
                  .van-card {
                    background-color: #fff;
                    flex-grow: 1;
                  }
                  .van-card__bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                }
              }
            }
          }
        }
      }
    }
    .flxed_bar {
      bottom: 50px;
      .van-submit-bar__bar {
        justify-content: space-between;
        padding: 0 15px 0 15px;
      }
    }
  }
}
</style>
