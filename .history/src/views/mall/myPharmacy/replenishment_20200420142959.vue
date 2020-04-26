<template>
  <div class="replenishment">
    <van-nav-bar title="一键补货" left-text="返回" left-arrow @click-left="back" />
    <div class="replenishment_main">
      <div class="replenishment_head">从最近购买的商家购买，点击商品可以更改</div>
      <div class="replenishment_content">
        <div class="r_c_item">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>
              <div>
                <span>
                  250/g 一袋
                  <van-icon name="play" />
                </span>
              </div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>
                <van-stepper v-model="value" async-change @change="cg()" />
              </div>
            </div>
          </div>
        </div>
        <div class="r_c_item">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>
              <div>
                <span>
                  250/g 一袋
                  <van-icon name="play" />
                </span>
              </div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>
                <van-stepper v-model="value" async-change @change="cg()" />
              </div>
            </div>
          </div>
        </div>
        <div class="r_c_item">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>
              <div>
                <span>
                  250/g 一袋
                  <van-icon name="play" />
                </span>
              </div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>
                <van-stepper v-model="value" async-change @change="cg()" />
              </div>
            </div>
          </div>
        </div>
        <div class="r_c_item">
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>
              <div>
                <span>
                  250/g 一袋
                  <van-icon name="play" />
                </span>
              </div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>
                <van-stepper v-model="value" async-change @change="cg()" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_div">
        <div>一共{{num}}件</div>
        <div>
            <span>合计：</span>
            <span>¥{{sum}}</span>
            <span>确认购买</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      num:"",
      sum:''
    };
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
    cg(row) {}
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
    .replenishment_head {
      width: 100%;
      font-size: 15px;
      padding: 10px 0;
      text-align: center;
    }
    .replenishment_content {
      width: 100%;
      height: auto;
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
  .footer_div{
      position:fixed;
      bottom: 0;
  }
}
</style>
