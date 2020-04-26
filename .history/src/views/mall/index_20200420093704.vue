<template>
  <div class="mall">
    <div class="mall_body">
      <div class="mall_head">
        <van-row class="head_dz">
          <van-col span="8">
            <div class="h_centers">
              上海
              <van-icon name="location-o" />
            </div>
          </van-col>
          <van-col span="8">
            <div class="h_center">颐养商城</div>
          </van-col>
          <van-col span="8"></van-col>
        </van-row>
        <van-search class="head_search" v-model="point" placeholder="请输入搜索关键词" />
        <div class="head_swiper_div">
          <van-swipe class="head_swipe" :autoplay="5000" v-show="state === 2">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
          <van-swipe class="head_swipe_plus" :autoplay="5000" v-show="state != 2">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
          <div class="doctor" v-show="state === 2">
            <div class="doctor_left" @click="goPath('/mall/hotMall')">
              <van-icon name="gift-o" />
              <div class="doctor_content">
                <div>热门商城</div>
                <div>更多优惠等你来</div>
              </div>
            </div>
            <div class="doctor_right" @click="goPath('/mall/myPharmacy')">
              <van-icon name="coupon-o" />
              <div class="doctor_content">
                <div>我的药房</div>
                <div>库存详情查询</div>
              </div>
            </div>
          </div>
        </div>
        <van-grid
          :class="state === 2 ? 'h_order_grid_item' : 'h_order_grid_item_plus'"
          :column-num="5"
        >
          <van-grid-item
            v-for="(da, index) in list"
            @click="goPath('mall/List',index)"
            :key="index"
            :icon-prefix="da.prefix"
            :icon="da.icon"
            :text="da.text"
          />
        </van-grid>
      </div>
      <div class="mall_content">
        <div class="mall_content_title">推荐商品</div>
        <div class="c_item">
          <div class="c_item_image"></div>
          <div class="c_item_text">
            <div class="c_item_text_head">
              <div class="c_item_text_head_title">苍术（已炒制）</div>
              <div class="c_item_text_head_tag">
                <i class="iconitem iconfont icontianjia"></i>
              </div>
            </div>
            <div class="c_item_text_describe">
              <span class="c_item_text_describe_left">¥69.9</span>
              <span class="c_item_text_describe_right">包邮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from "@/components/navigation";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      point: "",
      state: 0,
      list: [
        {
          text: "名厂名药",
          prefix: "iconfont iconzhongyaobaozhuang",
          icon: "iconzhongyaobaozhuang"
        },
        {
          text: "康复器具",
          prefix: "iconfont iconkangfuyixueke",
          icon: "iconkangfuyixueke"
        },
        {
          text: "膏方定制",
          prefix: "iconfont iconcaoyaofei",
          icon: "iconcaoyaofei"
        },
        {
          text: "养生膳食",
          prefix: "iconfont iconzhongyike",
          icon: "iconzhongyike"
        },
        {
          text: "文化周边",
          prefix: "iconfont iconjiankanghuodong",
          icon: "iconjiankanghuodong"
        }
      ],
      images: [
        "../../../static/image/mall_bg.png",
        "../../../static/image/mall_bg.png"
      ]
    };
  },
  components: {
    Navigation
  },
  computed: {
    ...mapGetters(["token"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
          this.state = 1;
      // if (this.token) {
      //   if (true) {
      //   }
      // }
    },
    goPath(path, index) {
      this.$router.push({
        path,
        query: {
          index: index
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mall {
  width: 100%;
  height: 100%;
  .mall_body {
    width: 100%;
    height: calc(100vh - 50px);
    overflow-x: auto;
    .mall_head {
      width: 100%;
      position: relative;
      height: auto;
      z-index: 0;
      overflow: hidden;
      background: #fff;
      // background-color: red;
      .head_dz {
        width: 100%;
        position: absolute;
        top: 0px;
        z-index: 999;
        height: 50px;
        color: #fff;
        > div {
          height: 100%;
          .h_center {
            font-size: 18px;
            padding: 0 12px;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .h_centers {
            font-size: 16px;
            padding: 0 12px;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
        > div:nth-of-type(2) {
          .h_center {
            justify-content: center;
          }
        }
      }
      .head_search {
        position: absolute;
        z-index: 999;
        top: 55px;
        width: 100%;
        padding: 0 10px;
        background-color: rgba(0, 0, 0, 0);
        .van-search__content {
          background-color: #fff;
          border-radius: 20px;
        }
      }
      .head_swiper_div {
        width: 100%;
        height: 294px;
        position: relative;
        .head_swipe {
          width: 100%;
          height: 100%;
          /deep/ .van-swipe__indicators {
            left: unset;
            right: 10px;
            bottom: 42px;
            .van-swipe__indicator {
              background-color: #999999;
            }
            .van-swipe__indicator--active {
              background-color: #ffffff;
            }
          }
        }
        .head_swipe_plus {
          width: 100%;
          height: 100%;
          /deep/ .van-swipe__indicators {
            right: unset;
            .van-swipe__indicator {
              background-color: #999999;
            }
            .van-swipe__indicator--active {
              background-color: #ffffff;
            }
          }
        }
        .doctor {
          position: absolute;
          bottom: -35px;
          z-index: 999;
          width: 100%;
          height: 70px;
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          > div {
            padding: 10px;
            display: flex;
            .van-icon {
              width: 40%;
              font-size: 50px;
              color: #cba361;
            }
            .doctor_content {
              width: 60%;
              > div:first-child {
                font-size: 16px;
                margin-top: 2px;
                margin-bottom: 5px;
              }
              > div:last-child {
                font-size: 12px;
                color: #666666;
              }
            }
          }
          .doctor_left {
            width: 48%;
            height: 100%;
            background-color: #ffffff;
            box-shadow: 2px 4px 15px 0px rgba(153, 150, 145, 0.4);
            border-radius: 5px;
          }
          .doctor_right {
            width: 48%;
            height: 100%;
            background-color: #ffffff;
            box-shadow: 2px 4px 15px 0px rgba(153, 150, 145, 0.4);
            border-radius: 5px;
          }
        }
      }
      .h_order_grid_item {
        width: 100%;
        height: 126px;
        align-items: flex-end;
        /deep/ .van-grid-item {
          height: 70%;
          .van-grid-item__content {
            padding: 8px 8px;
            i {
              font-size: 30px;
              border-radius: 50%;
              color: #fff;
              background-image: linear-gradient(30deg, #c8a060 0%, #e6c469 100%),
                linear-gradient(#f0ddc0, #f0ddc0);
              background-blend-mode: normal, normal;
              width: 45px;
              height: 45px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .van-grid-item__text {
              margin-top: 5px;
              font-size: 12px;
              color: #000000;
            }
          }
          .van-grid-item__content::after {
            border: none;
          }
        }
      }
      .h_order_grid_item_plus {
        width: 100%;
        height: 110px;
        align-items: flex-end;
        /deep/ .van-grid-item {
          height: 100%;
          /deep/ .van-grid-item__content {
            padding: 8px 8px;
            i {
              font-size: 30px;
              border-radius: 50%;
              color: #fff;
              background-image: linear-gradient(30deg, #c8a060 0%, #e6c469 100%),
                linear-gradient(#f0ddc0, #f0ddc0);
              background-blend-mode: normal, normal;
              width: 45px;
              height: 45px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .van-grid-item__text {
              margin-top: 5px;
              font-size: 12px;
              color: #000000;
            }
          }
          .van-grid-item__content::after {
            border: none;
          }
        }
      }
      .van-grid::after {
        border: none;
      }
    }
    .mall_content {
      width: 100%;
      height: auto;
      margin-top: 15px;
      padding: 0 15px;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .mall_content_title {
        margin: 15px 0;
        width: 100%;
      }
      .c_item {
        width: 49%;
        margin-bottom: 4%;
        height: 200px;
        border-radius: 5px;
        overflow: hidden;
        // border: solid 1px #dcdcdc;
        .c_item_image {
          width: 100%;
          height: 65%;
          background-color: #f7f3ed;
        }
        .c_item_text {
          width: 100%;
          height: 35%;
          padding: 10px;
          border-bottom: 1px solid #dcdcdc;
          border-right: 1px solid #dcdcdc;
          border-left: 1px solid #dcdcdc;
          border-radius: 0px 0px 5px 5px;
          .c_item_text_head {
            // font-size: 14px;
            // margin-bottom: 10px;

            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            .c_item_text_head_title {
              font-size: 14px;
            }
            .c_item_text_head_tag {
              display: inline-flex;
              align-items: center;
              .iconitem {
                font-size: 25px;
                color: #7e3330;
              }
            }
          }
          .c_item_text_describe {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .c_item_text_describe_left {
              color: #79312e;
            }
            .c_item_text_describe_right {
              color: #666666;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
