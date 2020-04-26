<template>
  <div class="activity">
    <van-nav-bar title="膏方节活动" left-text="返回" left-arrow @click-left="back" />
    <div class="activity_div" @click="goPath('/activity/info')">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
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
    }
  }
};
</script>
<style lang="scss" scoped>
.activity {
  width: 100%;
  height: 100%;
  .activity_div {
    padding: 15px;
    width: 100%;
    height: 232px;
    .activity_main {
      width: 100%;
      height: 180px;
      margin-bottom: 15px;
      background-color: #fff;
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
}
</style>
