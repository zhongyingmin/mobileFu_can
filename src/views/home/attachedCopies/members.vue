<template>
  <div class="members">
    <van-nav-bar
      title="成员及权限"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="members_content">
      <div class="members_c-item">
        <van-image
          round
          width="3rem"
          height="3rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="item_right">
          <div>
            <div class="r_title">刘患者</div>
            <div class="desc"><span>本人</span><span></span></div>
          </div>
          <div>创建者</div>
        </div>
      </div>
      <div class="members_c-item">
        <van-image
          round
          width="3rem"
          height="3rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="item_right">
          <div>
            <div>
              <span class="r_title">刘患者</span><span>已预约医生</span>
            </div>
            <div class="desc">
              <span>添加时间：2019年1月2日</span><span>默认时间：3天</span>
            </div>
          </div>
          <div class="r_font">成员</div>
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
  methods: {
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
.members {
  width: 100%;
  height: 100%;
  .members_content {
    padding: 15px;
    .members_c-item {
      display: flex;
      align-items: center;
      padding: 15px 10px;
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 8px;
      .van-image {
        margin-right: 10px;
      }
      .item_right {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          font-size: 12px;
          color: #969799;
          .r_title {
            font-size: 15px;
            color: #000;
            margin-right: 15px;
          }
          .desc {
            margin-top: 5px;
            > span {
              margin-right: 5px;
            }
          }
        }
        .r_font {
          font-size: 14px;
          color: #969799;
        }
      }
    }
  }
}
</style>
