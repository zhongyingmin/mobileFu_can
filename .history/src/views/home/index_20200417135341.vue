<template>
  <div class="home">
    <div class="home_body">
      <div class="home_head">
        <van-row class="head_dz">
          <van-col span="8">
            <!-- <div class="h_center">
              <van-icon name="contact" class="icon_van" />
            </div>-->
            <div class="h_centers">
              上海
              <van-icon name="location-o" />
            </div>
          </van-col>
          <van-col span="8">
            <div class="h_center">首页</div>
          </van-col>
          <van-col span="8"></van-col>
        </van-row>
        <swiper :options="swiperOption" ref="mySwiper" class="area">
          <swiper-slide class="swiper-slide" v-show="state == 2">
            <div class="item_chunk" @click="goPath('/medicalSummary')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/zongjie.png" />
              </div>
              <div>病案总结</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" v-show="state == 2">
            <div class="item_chunk" @click="goPath('/dataAnalysis')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/shuju.png" />
              </div>
              <div>数据分析</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" v-show="state == 2">
            <div class="item_chunk" @click="goPath('/pharmacy')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/zhiyao.png" />
              </div>
              <div>制剂药房</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="item_chunk" @click="goPath('/registerAppointment')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/yuyue.png" />
              </div>
              <div>挂号预约</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="item_chunk" @click="goPath('/healthConsultant')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/zongjie.png" />
              </div>
              <div>健康顾问</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="item_chunk" @click="goPath('/diagnosis')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/guwen.png" />
              </div>
              <div>诊疗通知</div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="item_chunk" @click="goPath('/attachedCopies')">
              <div>
                <van-image round width="100%" height="100%" src="../../static/image/fujiance.png" />
              </div>
              <div>附件册</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="h_summary">
        <div class="h_summary_title">
          <i class="iconitem iconfont iconshuju"></i>
          <span>今日总结</span>
        </div>
        <div class="h_summary_charts">
          <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#c7a15f">
            <van-swipe-item>
              <div class="item_charts_div">
                <div class="item_title">开方数量</div>
                <div id="item_charts_one"></div>
                <div class="item_num">
                  共<span>83</span>张
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
          </van-swipe>
        </div>
        <div class="h__summary_conclusion">
          <div>
            <div>医院收入</div>
            <div class="c_num">
              ¥<span>32198.00</span>
            </div>
          </div>
          <div>
            <div>明日预约</div>
            <div class="c_num">
              共<span>24</span>位
            </div>
          </div>
        </div>
      </div>
      <div class="registered_div">
        <div class="r_head">
          <div class="r_h_title">
            <i class="iconitem iconfont icontianchongxing-"></i>
            <span>挂号详情</span>
          </div>
          <div class="r_h_title_r">取消挂号</div>
        </div>
        <div class="r_table">
          <div class="r_table_head">
            <table cellspacing="0" cellpadding="0" border="0" class="r_table_head_h">
              <colgroup>
                <col name="el-table_2_column_8" width="100" />
                <col name="el-table_2_column_9" width="100" />
                <col name="el-table_2_column_10" width="100" />
              </colgroup>
              <thead class="r_table_head_h_thead">
                <tr class="r_table_head_h_thead_tr">
                  <th colspan="1" rowspan="1" class="r_table_head_h_thead_th t_text">
                    <div class="cell">挂号号码</div>
                  </th>
                  <th colspan="1" rowspan="1" class="r_table_head_h_thead_th t_text">
                    <div class="cell">等待人数</div>
                  </th>
                  <th colspan="1" rowspan="1" class="r_table_head_h_thead_th t_text">
                    <div class="cell">预计时间</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="r_table_body">
            <table cellspacing="0" cellpadding="0" border="0" class="r_table_body_t">
              <colgroup>
                <col name="el-table_2_column_8" width="100" />
                <col name="el-table_2_column_9" width="100" />
                <col name="el-table_2_column_10" width="100" />
              </colgroup>
              <tbody class="r_table_head_h_tbody">
                <tr class="r_table_body_t_tr" v-for="(item, index) in list" :key="index">
                  <td rowspan="1" colspan="1" class="r_table_body_t_main t_text">
                    <div class="cell onetext">{{ item.code }}</div>
                  </td>
                  <td rowspan="1" colspan="1" class="r_table_body_t_main t_text">
                    <div class="cell twotext">{{ item.num }}</div>
                  </td>
                  <td rowspan="1" colspan="1" class="r_table_body_t_main t_text">
                    <div class="cell threetext">{{ item.time }}</div>
                  </td>
                </tr>
                <!---->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="activity" @click="goPath('/activity')">
        <div class="activity_head">
          <div class="activity_h_title">
            <i class="iconitem iconfont iconhuangguan"></i>
            <span>膏方节活动</span>
          </div>
          <div class="activity_h_title_r">
            <span>查看更多</span>
            <i class="iconitem iconfont iconyou"></i>
          </div>
        </div>
        <div class="activity_main">
          <div class="activity_main_image">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="activity_main_content">
            <div class="activity_main_content_head">
              <div class="activity_main_content_head_title">夏病冬治-百草药店膏方节</div>
              <div class="activity_main_content_head_tag">
                <van-tag color="#c8a060" type="danger">可预约</van-tag>
              </div>
            </div>
            <div class="activity_main_content_head_text">
              <span>活动时间:</span>
              <span>10月14日 8：00—10月15日15:00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="recommended">
        <div class="recommended_head" @click="goPath('/content')">
          <div class="recommended_h_title">
            <i class="iconitem iconfont icondashujukeshihuaico-"></i>
            <span>推荐内容</span>
          </div>
          <div class="recommended_h_title_r">
            <span>查看更多</span>
            <i class="iconitem iconfont iconyou"></i>
          </div>
        </div>
        <div class="recommended_main">
          <swiper :options="swiperOption_recommended" ref="recommended_mySwiper" class="area">
            <swiper-slide class="swiper-slide">
              <div class="item_chunk">
                <div class="s_image">
                  <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div class="s_main">
                  <div class="s_main_head">
                    <div class="s_main_head_title">中医药知识普及</div>
                  </div>
                  <div class="s_main_head_text">
                    <span>文章</span>
                    <span>10月14日</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { mapGetters } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Navigation from "@/components/navigation";
export default {
  data() {
    return {
      swiperOption: {},
      swiperOption_recommended: {},
      loginstatus: 0,
      state: 0,
      list: [
        {
          code: "A12",
          num: "12",
          time: 30
        },
        {
          code: "A13",
          num: "15",
          time: 60
        }
      ],
      option: {
        color: ["#c7a15f", "#ebc66a"],
        legend: {
          show: false,
          orient: "vertical",
          left: 10,
          right: 10,
          data: ["处方", "膏方"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"], //是否开启点击
            center: ["50%", "50%"],
            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            hoverAnimation: false,
            legendHoverLink: false,
            silent: true,
            labelLine: {
              normal: {
                length: 10,
                length2: 5,
                lineStyle: {
                  color: "#949494"
                }
              }
            },
            label: {
              normal: {
                color: "rgba(51,51,51)",
                fontSize: 14,
                formatter: params => {
                  return params.name + "\n" + params.value + "份";
                }
              }
            },
            data: [
              { value: 310, name: "膏方" },
              { value: 130, name: "处方" }
            ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["token"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.swiperOption = {
      slidesPerView: 4,
      spaceBetween: 0
    };
    this.swiperOption_recommended = {
      slidesPerView: "auto",
      spaceBetween: 10
    };
  },
  components: {
    Navigation,
    swiper,
    swiperSlide
  },
  mounted() {
    this.init();
    this.$nextTick(() => {
      this.getEcharts();
    });
  },
  methods: {
    init() {
      if (this.token) {
        if (true) {
          this.state = 2;
        }
      }
    },
    getEcharts() {
      var echarts = require("echarts");
      console.log(echarts);
      var myChart = echarts.init(document.getElementById("item_charts_one"));
      myChart.setOption(this.option);
    },
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  .home_body {
    width: 100%;
    height: calc(100vh - 50px);
    overflow-x: auto;
    background-color: #f5f5f5;
    .home_head {
      width: 100%;
      height: 150px;
      z-index: 0;
      overflow: hidden;
      position: relative;
      margin-bottom: 5px;
      .head_dz {
        width: 100%;
        height: 50px;
        position: absolute;
        top: 0px;
        z-index: 999;
        > div {
          height: 100%;
          .icon_van {
            font-size: 20px;
          }
          .h_center {
            padding: 0 12px;
            font-size: 18px;
            height: 100%;
            color: #fff;
            display: flex;
            align-items: center;
          }
          .h_centers {
            padding: 0 12px;
            font-size: 16px;
            height: 100%;
            color: #fff;
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
      .area {
        position: absolute;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: 95px;
        background: #fff;
        .swiper-slide {
          width: 100%;
          height: 100%;
          display: flex;
          // flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          .item_chunk {
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > div:first-child {
              width: 45px;
              height: 45px;
            }
            > div:last-child {
              width: 100%;
              text-align: center;
              margin-top: 5px;
              color: #000000;
              font-size: 12px;
            }
          }
        }
      }
    }
    .home_head::after {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 125px;
      background: url("../../../static/image/home_h_bg.png");
      background-size: 100% 100%;
    }
    .h_summary {
      margin-bottom: 5px;
      background-color: #fff;
      height: 280px;
      padding: 0 10px;
      .h_summary_title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        .iconitem {
          font-size: 15px;
          color: #7d322f;
        }
      }
      .h_summary_charts {
        width: 200px;
        height: 200px;
        float: left;
        .my-swipe {
          width: 100%;
          height: 100%;
          .van-swipe-item {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            overflow: hidden;
            // color: #fff;
            // line-height: 150px;
            background: rgba(224, 189, 104, 0.2);
            .item_charts_div {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              padding: 10px;
              font-size: 20px;
            }
            .item_title {
              width: 100%;
              height: 10%;
              font-size: 15px;
              color: #333333;
            }
            #item_charts_one {
              width: 100%;
              height: 70%;
            }
            .item_num {
              width: 100%;
              height: 20%;
              text-align: center;
              font-size: 13px;
              color: #7e3330;
              > span {
                font-size: 18px;
              }
            }
          }
          /deep/ .van-swipe__indicators {
            .van-swipe__indicator {
              background-color: #998d7a;
            }
          }
        }
      }
      .h__summary_conclusion {
        margin-left: 10px;
        width: calc(100% - 210px);
        height: 200px;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > div {
          width: 100%;
          height: 48%;
          border-radius: 5px;
          overflow: hidden;
          padding: 10px;
          background: rgba(224, 189, 104, 0.2);
          > div:first-child {
            width: 100%;
            height: 80%;
            text-align: left;
            font-size: 15px;
            color: #333333;
          }
          > div:last-child {
            width: 100%;
            height: 20%;
            text-align: right;
            color: #7e3330;
          }
          .c_num {
            width: 100%;
            height: 20%;
            text-align: center;
            font-size: 13px;
            color: #7e3330;
            > span {
              font-size: 18px;
            }
          }
        }
      }
    }
    .registered_div {
      padding: 10px;
      width: 100%;
      height: auto;
      background: #fff;
      margin-bottom: 5px;
      .r_head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;
        .r_h_title {
          .iconitem {
            font-size: 15px;
            color: #7d322f;
          }
        }
        .r_h_title_r {
          font-size: 12px;
          color: #666666;
        }
      }
      .r_table {
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 10px;
        border: solid 1px #dcdcdc;
        .r_table_head {
          width: 100%;
          height: 30px;
          background: rgba(224, 189, 104, 0.2);
          // opacity: 0.2;
          .r_table_head_h {
            width: 100%;
            .r_table_head_h_thead {
              width: 100%;
              .r_table_head_h_thead_th {
                text-align: center;
                font-size: 12px;
                line-height: 30px;
                color: #4d4d4d;
              }
            }
          }
        }
        .r_table_body {
          width: 100%;
          max-height: 200px;
          overflow-y: auto;
          .r_table_body_t {
            width: 100%;
            .r_table_head_h_tbody {
              width: 100%;
              .r_table_body_t_tr {
                border-bottom: 1px solid #dcdcdc;
                .r_table_body_t_main {
                  text-align: center;
                  font-size: 12px;
                  line-height: 35px;
                  color: #c8a060;
                  .onetext {
                    font-size: 15px;
                    font-weight: bold;
                  }
                  .onetext::after {
                    content: "号";
                    font-size: 12px;
                  }
                  .twotext {
                    font-size: 15px;
                    font-weight: bold;
                  }
                  .twotext::after {
                    content: "位";
                    font-size: 12px;
                  }
                  .threetext::after {
                    content: "分钟";
                  }
                  .threetext::before {
                    content: "约";
                  }
                }
              }
              .r_table_body_t_tr:last-child {
                border: none;
              }
            }
          }
        }
      }
    }
    .activity {
      padding: 10px;
      width: 100%;
      height: 232px;
      background: #fff;
      margin-bottom: 5px;
      .activity_head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;
        .activity_h_title {
          .iconitem {
            font-size: 15px;
            color: #7d322f;
          }
        }
        .activity_h_title_r {
          font-size: 12px;
          color: #666666;
          display: flex;
          align-items: center;
          > span {
            margin-bottom: 1px;
          }
        }
      }
      .activity_main {
        width: 100%;
        height: 180px;
        border: solid 1px #dcdcdc;
        border-radius: 10px;
        overflow: hidden;
        .activity_main_image {
          width: 100%;
          height: 60%;
          .van-image {
            position: unset;
          }
        }
        .activity_main_content {
          width: 100%;
          height: 40%;
          padding: 10px;
          .activity_main_content_head {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
            .activity_main_content_head_title {
              font-size: 15px;
            }
            .activity_main_content_head_tag {
              display: inline-flex;
              align-items: center;
            }
          }
          .activity_main_content_head_text {
            font-size: 12px;
            color: #666666;
          }
        }
      }
    }

    .recommended {
      padding: 10px;
      width: 100%;
      height: 232px;
      background: #fff;
      .recommended_head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;
        .recommended_h_title {
          .iconitem {
            font-size: 16px;
            color: #7d322f;
          }
        }
        .recommended_h_title_r {
          font-size: 12px;
          color: #666666;
          display: flex;
          align-items: center;
          > span {
            margin-bottom: 1px;
          }
        }
      }
      .recommended_main {
        width: 100%;
        height: 160px;
        .swiper-container {
          width: 100%;
          height: 100%;
          .swiper-slide {
            width: 45%;
            height: 98%;
            position: unset;
            border-radius: 10px;
            border: solid 1px #dcdcdc;
            overflow: hidden;
            .item_chunk {
              width: 100%;
              height: 100%;
              .s_image {
                width: 100%;
                height: 60%;
                .van-image {
                  position: unset;
                }
              }
              .s_main {
                height: 40%;
                padding: 5px;
                .s_main_head {
                  width: 100%;
                  margin-bottom: 10px;
                  .s_main_head_title {
                    font-size: 15px;
                  }
                }
                .s_main_head_text {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-end;
                  font-size: 12px;
                  color: #666666;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
