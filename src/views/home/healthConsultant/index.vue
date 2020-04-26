<template>
  <div class="healthConsultant">
    <van-nav-bar
      title="健康顾问"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="h_consulting">
      <div class="h_consulting_title">
        <span>上次咨询</span><span>查看全部<van-icon name="arrow"/></span>
      </div>
      <div class="h_consulting_div" @click="goPath('/healthConsultant/chat')">
        <div class="h_head">
          <div class="h_head_image">
            <van-image
              round
              width="4rem"
              height="4rem"
              lazy-load
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="h_head_text">
            <div>张杰安</div>
            <div>
              中药学职业药师，中医职业助理医生，解答详细擅长常见病的药物调剂
            </div>
          </div>
        </div>
        <van-divider />
        <div><span>已购买</span><span>上海百草诊所</span></div>
      </div>
    </div>
    <div class="h_patients_with">
      <div class="h_patients_title">
        <span>最近患者</span><span @click="goPath('/healthConsultant/patientList')">查看全部<van-icon name="arrow"/></span>
      </div>
      <div class="h_patients_content">
        <swiper :options="swiperOption" ref="mySwiper" class="area">
          <swiper-slide class="swiper-slide">
            <div class="content_slide">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="text">刘美丽</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="content_slide">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="text">刘美丽</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="content_slide">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="text">刘美丽</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="content_slide">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="text">刘美丽</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="h_doctor">
      <div class="h_doctor_title">
        <span>推荐医生</span>
      </div>
      <div class="h_content">
        <div class="h_consulting_div">
          <div class="h_head">
            <div class="h_head_image">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="h_head_text">
              <div>张杰安</div>
              <div>
                中药学职业药师，中医职业助理医生，解答详细擅长常见病的药物调剂
              </div>
            </div>
          </div>
          <van-divider />
          <div>
            <span><span>咨询费用:</span><span>99/年</span></span
            ><span>上海百草诊所</span>
          </div>
        </div>
        <div class="h_consulting_div">
          <div class="h_head">
            <div class="h_head_image">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="h_head_text">
              <div>张杰安</div>
              <div>
                中药学职业药师，中医职业助理医生，解答详细擅长常见病的药物调剂
              </div>
            </div>
          </div>
          <van-divider />
          <div>
            <span><span>咨询费用:</span><span>99/年</span></span
            ><span>上海百草诊所</span>
          </div>
        </div>
        <div class="h_consulting_div">
          <div class="h_head">
            <div class="h_head_image">
              <van-image
                round
                width="4rem"
                height="4rem"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="h_head_text">
              <div>张杰安</div>
              <div>
                中药学职业药师，中医职业助理医生，解答详细擅长常见病的药物调剂
              </div>
            </div>
          </div>
          <van-divider />
          <div>
            <span><span>咨询费用:</span><span>99/年</span></span
            ><span>上海百草诊所</span>
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  filters: {},
  created() {
    this.swiperOption = {
      slidesPerView: "auto",
      spaceBetween: 10
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
.healthConsultant {
  width: 100%;
  height: 100%;
  .h_consulting {
    padding: 15px;
    .h_consulting_title {
      width: 100%;
      margin-bottom: 8px;
      color: #646566;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      > span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .h_consulting_div {
      width: 100%;
      height: 140px;
      border-radius: 8px;
      background-color: #fff;
      color: #646566;
      font-size: 12px;
      > .h_head {
        width: 100%;
        height: 70%;
        padding: 10px;
        display: flex;
        .h_head_image {
          width: auto;
          height: 100%;
          display: inline-flex;
          align-items: center;
        }
        .h_head_text {
          flex-grow: 1;
          height: 100%;
          padding-left: 10px;
          div:first-child {
            font-size: 14px;
            color: #000;
            margin: 7px 0 8px;
          }
          div:last-child {
            width: 100%;
            height: 35px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      .van-divider {
        margin: 0;
      }
      > div:last-child {
        display: flex;
        padding: 10px;
        width: 100%;
        height: 30%;
        justify-content: space-between;
      }
    }
  }
  .h_patients_with {
    padding-top: 10px;
    padding-left: 15px;
    height: 150px;
    .h_patients_title {
      padding-right: 15px;
      width: 100%;
      margin-bottom: 8px;
      color: #646566;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      > span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .h_patients_content {
      width: 100%;
      height: calc(100% - 24px);
      .area {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 25%;
          height: 98%;
          position: unset;
          border-radius: 8px;
          background-color: #fff;
          overflow: hidden;
          .content_slide {
            width: 100%;
            height: calc(100% - 15px);
            padding-top: 15px;
            text-align: center;
            font-size: 13px;
            color: #000;
            overflow: hidden;
          }
        }
      }
    }
  }
  .h_doctor {
    padding-top: 25px;
    padding-left: 15px;
    padding-right: 15px;
    height: auto;
    .h_doctor_title {
      padding-right: 15px;
      width: 100%;
      margin-bottom: 8px;
      color: #646566;
      text-align: left;
      font-size: 12px;
      > span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .h_content {
      width: 100%;
      height: auto;
      .h_consulting_div {
        width: 100%;
        height: 140px;
        margin-bottom: 15px;
        border-radius: 8px;
        background-color: #fff;
        color: #646566;
        font-size: 12px;
        > .h_head {
          width: 100%;
          height: 70%;
          padding: 10px;
          display: flex;
          .h_head_image {
            width: auto;
            height: 100%;
            display: inline-flex;
            align-items: center;
          }
          .h_head_text {
            flex-grow: 1;
            height: 100%;
            padding-left: 10px;
            div:first-child {
              font-size: 14px;
              color: #000;
              margin: 7px 0 8px;
            }
            div:last-child {
              width: 100%;
              height: 35px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
        .van-divider {
          margin: 0;
        }
        > div:last-child {
          display: flex;
          padding: 10px;
          width: 100%;
          height: 30%;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
