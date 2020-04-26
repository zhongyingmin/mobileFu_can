<template>
  <div class="personalDocument">
    <van-nav-bar title="数据分析" left-text="返回" left-arrow @click-left="back" />
    <van-tabs
      v-model="active"
      title-active-color="#c8a060"
      line-height="1"
      line-width="55"
      color="#c8a060"
    >
      <van-tab title="处方分析">
        <div class="p_chart">
          <div class="chart_pint">
            <div>年度总处方</div>
            <div @click="show=true">
              <div>{{currentDate|formatTime}}年</div>
              <van-icon class-prefix="iconfont iconxia" name="iconxia" />
            </div>
          </div>
          <div id="chats_z"></div>
          <div class="chart_pint">
            <div>年度总处方</div>
            <div @click="show=true">
              <div>{{currentDate|formatTime}}年</div>
              <van-icon class-prefix="iconfont iconxia" name="iconxia" />
            </div>
          </div>
          <div class="tags">
            <div @click="tags_state=0" :class="tags_state==0?'selected':''">我的</div>
            <div @click="tags_state=1" :class="tags_state==1?'selected':''">
              全国
              <van-icon name="play" />
            </div>
          </div>
          <div id="chats_c"></div>
          <div class="statistical">
            <div class="title-wrapper">
              <span class="nid">1.</span>
              <span class="name">竹叶石膏汤</span>
            </div>
            <div class="progtess-wrapper">
              <van-progress :percentage="50" stroke-width="12" :show-pivot="false" color="#c8a060" />
            </div>
            <div class="num-wrapper">108份</div>
          </div>
          <!-- <div id="chats_d"></div> -->
        </div>
      </van-tab>
      <van-tab title="膏方分析">内容 2</van-tab>
      <van-tab title="患者分析">内容 3</van-tab>
      <van-action-sheet v-model="show">
        <div class="content">
          <van-datetime-picker
            :show-toolbar="false"
            v-model="currentDate"
            type="year-month"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
          />
          <!-- <div class="footer_div">
            <span>取消</span>
            <span>确定</span>
          </div>-->
        </div>
      </van-action-sheet>
    </van-tabs>
  </div>
</template>
<script>
import { formatDate } from "../../../utils/date.js";
export default {
  data() {
    return {
      tags_state: 0,
      active: 0,
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      totalOption: {
        color: ["#c8a060"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "10px",
          top: "15px",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["01月", "02月", "03月", "04月", "05月", "06月", "07月"],
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "rgba(204,204,204,.8)", //左边线的颜色
                width: "2" //坐标线的宽度
              }
            },
            axisLabel: {
              textStyle: {
                color: "#000" //坐标值得具体的颜色
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: false
            },
            splitLine: {
              //网格线
              lineStyle: {
                type: "dashed" //设置网格线类型 dotted：虚线   solid:实线
              },
              show: true //隐藏或显示
            },

            axisTick: {
              show: false //y轴坐标点消失
            },
            axisLine: {
              //y轴
              show: false
            }
          }
        ],
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 90
          },
          {
            show: false,
            type: "slider",
            top: "90%",
            start: 0,
            end: 90
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
              emphasis: {
                barBorderRadius: [8, 8, 0, 0]
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [8, 8, 0, 0]
              }
            },
            label: {
              show: true,
              position: "top",
              color: "rgba(0,0,0,1)",
              formatter: function(event) {
                return event.data + "份";
              }
            }
          }
        ]
      },
      prescription: {
        backgroundColor: "#ffffff",
        color: ["#37A2DA"],
        tooltip: {},
        radar: {
          shape: "circle",
          name: {
            textStyle: {
              color: "#333333"
            }
          },
          splitArea: {
            areaStyle: {
              color: ["#fff", "#fff", "#fff", "#fff"],
              shadowColor: "#37A2DA"
            }
          },
          indicator: [
            {
              name: "项目概况",
              max: 10
            },
            {
              name: "关注指数",
              max: 10
            },
            {
              name: "播放平台",
              max: 10
            },
            {
              name: "声量基础",
              max: 10
            },
            {
              name: "制作公司",
              max: 10
            },
            {
              name: "主创团队",
              max: 10
            }
          ]
        },
        series: [
          {
            type: "radar",
            symbol: "circle",
            symbolSize: 6,
            data: [
              {
                value: [7.5, 6.8, 7.5, 7, 6, 7.2],
                name: "数据",
                itemStyle: {
                  normal: {
                    color: "#c8a060"
                  }
                },
                areaStyle: {
                  normal: {
                    color: "rgba(200,160,96,.6)"
                  }
                }
              }
            ]
          }
        ]
      },
      AList: [
        {
          id: 1,
          name: "小青龙汤",
          number: 108
        },
        {
          id: 2,
          name: "九味羌活汤",
          number: 56
        },
        {
          id: 3,
          name: "清营汤",
          number: 41
        },
        {
          id: 4,
          name: "龙胆泻肝汤",
          number: 33
        },
        {
          id: 5,
          name: "银翘散",
          number: 31
        },
        {
          id: 6,
          name: "竹叶石膏汤",
          number: 28
        },
        {
          id: 7,
          name: "导赤散",
          number: 24
        },
        {
          id: 8,
          name: "大柴胡汤",
          number: 18
        }
      ]
      // stripOption: {
      //   dataset: {
      //     source: [
      //       ["amount", "product"],
      //       [7, "白头翁汤"],
      //       [12, "清暑益气汤"],
      //       [18, "大柴胡汤"],
      //       [24, "导赤散"],
      //       [28, "竹叶石膏汤"],
      //       [31, "银翘散"],
      //       [33, "龙胆泻肝汤"],
      //       [41, "清营汤"],
      //       [56, "九味羌活汤"],
      //       [108, "小青龙汤"]
      //     ]
      //   },
      //   grid: {
      //     top: "20px",
      //     left: "20px",
      //     right: "20px",
      //     bottom: "20px",
      //     containLabel: true
      //   },
      //   tooltip: {
      //     trigger: "axis",
      //     axisPointer: {
      //       // 坐标轴指示器，坐标轴触发有效
      //       type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      //     }
      //   },
      //   // grid: { containLabel: true },
      //   xAxis: { name: "amount", show: false },
      //   yAxis: {
      //     type: "category",
      //     axisLabel: {
      //       formatter: "{value}",
      //       textStyle: {
      //         color: "#333333"
      //       },
      //       fontSize: "13"
      //     },
      //     axisTick: {
      //       show: false
      //     },
      //     axisLine: {
      //       show: false
      //     }
      //   },

      //   series: [
      //     {
      //       type: "bar",
      //       encode: {
      //         // Map the "amount" column to X axis.
      //         x: "amount",
      //         // Map the "product" column to Y axis
      //         y: "product"
      //       },
      //       label: {
      //         normal: {
      //           show: true,
      //           position: "right",
      //           textStyle: {
      //             color: "#000"
      //           }
      //         }
      //       },
      //       itemStyle: {
      //         emphasis: {
      //           barBorderRadius: 7
      //         },
      //         normal: {
      //           color: "#c8a060"
      //         }
      //       }
      //     }
      //   ]
      // }
    };
  },
  filters: {
    formatTime(time) {
      return formatDate(time, "yyyy");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("chats_z"));
      myChart.setOption(this.totalOption);
      var myCharts = echarts.init(document.getElementById("chats_c"));
      myCharts.setOption(this.prescription);
      // var myCharts = echarts.init(document.getElementById("chats_d"));
      // myCharts.setOption(this.stripOption);
      this.percentage();
    },
    percentage() {
      let max = this.AList[0].number;
      for (let i = 0; i < this.AList.length - 1; i++) {
        max = max < this.AList[i + 1].number ? this.AList[i + 1].number : max;
      }
      for (let index = 0; index < this.AList.length - 1; index++) {
        this.AList[index].percentage=parseInt(Math.round(this.AList[index].number/max)) ;
      }
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      }
    },
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
    }
  }
};
</script>
<style lang="scss" scoped>
.personalDocument {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .van-tabs {
    /deep/ .van-tabs__wrap {
      height: 40px;
      .van-tabs__nav--line {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .p_chart {
    width: 100%;
    height: auto;
    .chart_pint {
      display: flex;
      height: 50px;
      padding: 0 20px;
      align-items: center;
      justify-content: space-between;
      > div:first-child {
        padding-left: 5px;
        font-size: 16px;
        color: #7e3330;
        border-left: 5px solid #c8a060;
      }
      > div:last-child {
        padding: 5px 15px;
        width: 150px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        border: solid 1px #7e3330;
        border-radius: 25px;
        color: #7e3330;
        i {
          padding-left: 10px;
          border-left: 1px solid #7e3330;
        }
      }
    }
    .tags {
      width: 120px;
      margin: 10px auto 20px;
      height: 30px;
      border: solid 1px #7e3330;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        float: left;
        font-size: 12px;
        background-color: #fff;
        color: #7e3330;
      }
      > div:last-child {
        float: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        i {
          transform: rotate(90deg);
          margin-right: 5px;
        }
      }
      .selected {
        background-color: #7e3330;
        color: #fff;
      }
    }
    #chats_z {
      width: 100%;
      height: 280px;
    }
    #chats_c {
      width: 100%;
      height: 250px;
    }
    .statistical {
      width: 100%;
      height: auto;
      padding: 10px 20px;
      display: flex;
      overflow: hidden;
      align-items: center;
      font-size: 13px;
      color: #333333;
      .title-wrapper {
        width: 100px;
        .nid {
          color: #c8a060;
          font-size: 14px;
          font-weight: bold;
          margin-right: 10px;
        }
      }
      .progtess-wrapper {
        flex-grow: 1;
        padding-top: 2px;
        .van-progress {
          border-radius: 0px;
        }
      }
      .num-wrapper {
        width: 45px;
        text-align: right;
      }
    }
  }
  .van-action-sheet {
    .van-action-sheet__header {
      border-bottom: 1px solid #fafafa;
    }
    .van-action-sheet__content {
      .content {
        /deep/ .van-picker {
          margin-top: 15px;
          .van-picker__columns {
            > div:nth-of-type(2) {
              display: none;
            }
          }
        }
        .footer_div {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          > span {
            width: 50%;
            height: 40px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
          span:first-child {
            background-color: #e5e5e5;
          }
          span:last-child {
            background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
              linear-gradient(#ffffff, #ffffff);
            background-blend-mode: normal, normal;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
