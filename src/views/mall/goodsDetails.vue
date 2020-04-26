<template>
  <div class="goodsDetails">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="back" />
    <div class="goodsDetails_main">
      <div class="goods_m-head">
        <div class="goods_m-image"></div>
        <div class="goods_m-describe">
          <div>
            <span>¥</span>
            <span>19.9</span>
          </div>
          <div>宁夏枸杞</div>
          <div>功能主治为：滋肾，润肺，补肝，明目。治肝肾阴亏，腰膝酸软，头晕目眩，目昏多泪，虚劳咳嗽，消渴，遗精。</div>
        </div>
      </div>
      <div class="goods_cells">
        <van-cell is-link  to="/mall/store">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">商家</span>
            <span>同仁堂旗舰店</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">发货</span>
            <span>浙江金华</span>
            <span>快递:0.00</span>
          </template>
        </van-cell>
      </div>
      <div class="goods_cells">
        <van-cell is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">规格</span>
            <span>选择包装 数量</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">参数</span>
            <span>生产日期 品牌</span>
          </template>
        </van-cell>
      </div>
      <div class="footer_div">
        <span @click="show=true">加入购物车</span>
        <span>立即购买</span>
      </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  mounted() {},
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    onBuyClicked() {},
    onAddCartClicked() {}
  }
};
</script>
<style lang="scss" scoped>
.goodsDetails {
  width: 100%;
  min-height: 100%;
  .goodsDetails_main {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    .goods_m-head {
      width: 100%;
      height: auto;
      .goods_m-image {
        width: 100%;
        height: 280px;
        background-color: #f7f3ed;
      }
      .goods_m-describe {
        width: 100%;
        padding: 15px 20px;
        background-color: #fff;
        > div:first-child {
          color: #79312e;
          display: flex;
          align-items: flex-end;
          span:first-child {
            font-size: 15px;
          }
          span:last-child {
            font-size: 20px;
          }
        }
        div:nth-of-type(2) {
          color: #000000;
          font-size: 16px;
          margin: 8px 0;
        }
        div:last-child {
          color: #666666;
          font-size: 14px;
        }
      }
    }
    .goods_cells {
      margin-top: 8px;
      .van-cell {
        .van-cell__title {
          > span:first-child {
            color: #666666;
            margin-right: 10px;
          }
          > span:nth-of-type(2) {
            color: #000000;
            margin-right: 25px;
          }
          > span:last-child {
            color: #000000;
            margin-right: 25px;
          }
        }
      }
    }
    .footer_div {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      display: flex;
      > span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        color: #fff;
      }
      > span:first-child {
        background-color: #7e3330;
      }
      > span:last-child {
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#c8a060, #c8a060);
        background-blend-mode: normal, normal;
      }
    }
    .van-sku-container {
      /deep/ .van-sku-row {
        .van-sku-row__item {
          height: 25px;
          border: solid 1px #f7f8fa;
        }
        .van-sku-row__item--active {
          color: #7e3330;
          height: 25px;
          border-radius: 5px;
          border: solid 1px #7e3330;
          overflow: hidden;
        }
      }
      /deep/ .van-sku-actions {
        height: 50px;
        padding: 0;
        > .van-button--warning {
          background: none;
        }
        > .van-button:first-of-type {
          height: 100%;
          background-color: #7e3330;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          font-size: 16px;
        }
        > .van-button:last-of-type {
          height: 100%;
          background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
            linear-gradient(#c8a060, #c8a060);
          background-blend-mode: normal, normal;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          font-size: 16px;
        }
      }
    }
  }
}
</style>