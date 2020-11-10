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
        line-width="30"
        title-inactive-color="#666666"
      >
        <van-tab title="个人">
          <ul>
            <li v-for="(item, index) in data" :key="index">
              <van-cell
                title="同仁堂旗舰店"
                icon-prefix="iconfont icongongyingshang"
                icon="icongongyingshang"
                is-link
              />
              <van-swipe-cell class="cell_swipe">
                <van-checkbox v-model="item.isSelected" @change="chechange"></van-checkbox>
                <van-card
                  :price="item.content | toFixeds(2)"
                  :title="item.title"
                  class="goods-card"
                  thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                >
                  <div slot="tags">
                    <div>
                      <span @click="show=true">250/g 一袋</span>
                      <van-icon name="play" />
                    </div>
                  </div>
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
        :button-text="'结算('+num+')'"
        @submit="goPath('/confirmOrder')"
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
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
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
      active: 2,
      num: 0,
      show: false,
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息"
        }
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/"
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "规格", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215", // skuValueId：规格值 id
                name: "250/g  一袋" // skuValueName：规格值名称
              },
              {
                id: "1216",
                name: "500/g  一盒"
              },
              {
                id: "1217",
                name: "1000/g  一箱"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 1990, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 160 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 1990, // 价格（单位分）
            s1: "1216", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 120 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 1990, // 价格（单位分）
            s1: "1217", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "19.9", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2259, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        // messages: [
        //   {
        //     // 商品留言
        //     datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
        //     multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
        //     name: "留言", // 留言名称
        //     type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        //     required: "1", // 是否必填 '1' 表示必填
        //     placeholder: "" // 可选值，占位文本
        //   }
        // ],
        hide_stock: false // 是否隐藏剩余库存
      }
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
    onBuyClicked() {},
    onAddCartClicked() {},
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
    goPath(path) {
      this.$router.push(path);
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
    chechange(checked) {
      // console.log(checked);
      if (checked) {
        this.num++;
        return;
      }
      this.num--;
      return;
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
            font-size: 18px;
          }
        }
      }
    }

    /deep/ .van-tabs {
      width: 100%;
      height: auto;
      pointer-events: none;
      .van-tabs__wrap {
        pointer-events: all;
        height: 40px;
        .van-tab {
          font-size: 16px;
        }
      }
      .van-tabs__wrap::after {
        border-width: 0;
      }
      .van-tabs__content {
        pointer-events: all;
        width: 100%;
        height: auto;
        overflow-x: auto;
        padding: 15px 0 100px;
        ul {
          width: 100%;
          height: auto;
          li {
            width: 100%;
            height: auto;
            .van-cell {
              padding-left: 40px;
            }
            .van-cell::after {
              border-bottom: none;
            }
            .van-cell--clickable:active {
              background-color: #fff;
            }
            .cell_swipe {
              width: 100%;
              height: auto;
              .van-swipe-cell__wrapper {
                width: 100%;
                padding: 0 15px 0 10px;
                margin-bottom: 15px;
                display: flex;
                background-color: #fff;
                .van-swipe-cell__right {
                  .van-button--square {
                    height: 100%;
                  }
                }
                .van-checkbox {
                  width: 20px;
                  margin-top: 24px;
                  align-items: flex-start;
                }
                .van-card {
                  background-color: #fff;
                  flex-grow: 1;
                  padding: 0 0 12px 10px;
                  margin-top: 0;
                  .van-card__header {
                    .van-card__thumb {
                      width: 110px;
                      margin-right: 0;
                    }
                    .van-card__content {
                      width: 200px;
                      padding-left: 15px;
                      > div:first-child {
                        width: 100%;
                        .van-card__title {
                          font-size: 16px;
                          color: #000000;
                        }
                        > div:nth-of-type(2) {
                          width: 100%;
                          margin-top: 12px;
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
                      }
                    }
                  }
                }
                .van-card__bottom {
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  .van-card__price {
                    font-size: 14px;
                    color: #7e3330;
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
        padding: 0 10px;
        .van-submit-bar__price {
          color: #7e3330;
        }
        .van-submit-bar__button--danger {
          background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
            linear-gradient(#7e3330, #7e3330);
          background-blend-mode: normal, normal;
        }
      }
    }
  }
}
</style>
