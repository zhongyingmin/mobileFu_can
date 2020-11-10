<template>
  <div class="hospitalHomepage">
    <div class="hospitalHomepage_head">
      <van-nav-bar title="医院主页" left-text="返回" left-arrow @click-left="back" />
    </div>
    <div class="position-doctor">
      <div class="position">
        <div class="position_title">上海市百草诊所</div>
        <div class="position_address">
          <van-icon class-prefix="iconfont icondingwei-xianxing" name="icondingwei-xianxing" />上海市闵行区莘庄镇985号
        </div>
        <div class="position_business">
          <div>
            <van-icon class-prefix="iconfont iconhuoqi"  name="iconhuoqi" />营业时间：周一至周日8:00-17:00
          </div>
          <div>距我<500米</div>
        </div>
        <div class="position_map"></div>
      </div>
      <div class="doctor">
        <div class="title_h">
          <van-icon
            class-prefix="iconfont iconyishengyishengjieshao"
            name="iconyishengyishengjieshao"
          />医院医生
        </div>
        <swiper :options="swiperOption" ref="mySwiper" class="doctor_content">
          <swiper-slide class="swiper-slide">
            <div class="ss_item">
              <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div class="ss_title">周大福</div>
              <div class="ss_department">中医内科门诊</div>
              <div class="ss_button" @click="goPath('/registerAppointment/reservation')">预约</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="ss_item">
              <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div class="ss_title">蒋有倩</div>
              <div class="ss_department">中医妇科门诊</div>
              <div class="ss_button">预约</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="ss_item">
              <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div class="ss_title">张杰安</div>
              <div class="ss_department">中医内科门诊</div>
              <div class="ss_button">预约</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="ss_item">
              <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div class="ss_title">周大福</div>
              <div class="ss_department">中医内科门诊</div>
              <div class="ss_button">预约</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="Introduction">
      <div class="title_h">
        <van-icon class-prefix="iconfont iconyiyuanjieshao" name="iconyiyuanjieshao" />医院简介
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return { swiperOption: {} };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.swiperOption = {
      slidesPerView: 3,
      spaceBetween: 20
    };
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
.hospitalHomepage {
  width: 100%;
  height: 100%;
  .hospitalHomepage_head {
    width: 100%;
    height: 200px;
    background: url("../../../../static/image/hospitalHomepage_head.png");
    background-size: 100% 100%;
    .van-nav-bar {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  .position-doctor {
    width: 100%;
    height: 420px;
    padding: 0 0 20px;
    background-color: #fff;
    .position {
      padding: 15px 10px 10px;
      position: relative;
      top: -30px;
      margin: 0 auto;
      width: 90%;
      height: 240px;
      background-color: #ffffff;
      box-shadow: 0px 4px 20px 0px rgba(204, 204, 204, 0.6);
      border-radius: 10px;
      overflow: hidden;
      > div {
        margin-bottom: 12px;
        i {
          color: #7e3330;
        }
      }
      .position_title {
        font-size: 16px;
        color: #000000;
      }
      .position_address {
        font-size: 13px;
        color: #333333;
      }
      .position_business {
        font-size: 13px;
        color: #333333;
        display: flex;
        justify-content: space-between;
      }
      .position_map {
        margin-bottom: 0;
        width: 100%;
        height: 123px;
        background-color: #000000;
      }
    }
    .doctor {
      padding: 0 18px;
      margin-top: -15px;
      .doctor_content {
        width: 100%;
        height: 140px;
        .ss_item {
          width: 100%;
          height: 100%;
          text-align: center;
          .ss_title {
            font-size: 15px;
            color: #333333;
            margin-bottom: 2px;
          }
          .ss_department {
            font-size: 12px;
            color: #666666;
            margin-bottom: 5px;
          }
          .ss_button {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 25px;
            border-radius: 20px;
            font-size: 14px;
            background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
              linear-gradient(#c8a060, #c8a060);
            background-blend-mode: normal, normal;
            color: #fff;
          }
        }
      }
    }
  }
  .Introduction {
    margin-top: 10px;
    width: 100%;
    height: 200px;
    padding: 15px 18px;
    background-color: #fff;
  }
  .title_h {
    font-size: 15px;
    margin-bottom: 10px;
    i {
      font-size: 18px;
      margin-right: 2px;
      color: #7e3330;
    }
  }
}
</style>
