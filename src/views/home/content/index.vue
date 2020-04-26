<template>
  <div class="content">
    <van-nav-bar title="推荐内容" left-text="返回" left-arrow @click-left="back" />
    <div class="content_main">
      <div class="content_article" @click="goPath('/content/articleContent')">
        <div class="a_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="a_main">
          <div class="a_main_head">
            <div class="a_main_head_title">中药熬制方式</div>
          </div>
          <div class="a_main_head_text">
            <span>文章</span>
            <span>10月14日</span>
          </div>
        </div>
      </div>
      <div class="content_article">
        <div class="a_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="a_main">
          <div class="a_main_head">
            <div class="a_main_head_title">中药熬制方式</div>
          </div>
          <div class="a_main_head_text">
            <span>文章</span>
            <span>10月14日</span>
          </div>
        </div>
      </div>
      <div class="content_video" @click="goPath('/content/videoContent')">
        <div class="s_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="s_main">
          <div class="s_main_head">
            <div class="s_main_head_title">中医药知识普及</div>
          </div>
          <div class="s_main_head_text">
            <span>视频时长 3:30</span>
            <span>2019年10月14日</span>
          </div>
        </div>
      </div>
      <div class="content_article">
        <div class="a_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="a_main">
          <div class="a_main_head">
            <div class="a_main_head_title">中药熬制方式</div>
          </div>
          <div class="a_main_head_text">
            <span>文章</span>
            <span>10月14日</span>
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
  mounted() {},
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
.content {
  width: 100%;
  height: 100%;
  .content_main {
    width: 100%;
    height: auto;
    padding: 15px;
    > div {
      margin-bottom: 15px;
    }
    .content_article {
      width: 100%;
      height: 100px;
      padding: 12px 10px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      .a_image {
        width: 35%;
        height: 100%;
      }
      .a_main {
        padding-left: 10px;
        width: 65%;
        height: 100%;
        > div {
          width: 100%;
          height: 50%;
        }
        .a_main_head {
          font-size: 15px;
        }
        .a_main_head_text {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          font-size: 12px;
          color: #666666;
        }
      }
    }
    .content_video {
      width: 100%;
      height: 160px;
      position: unset;
      border-radius: 10px;
      background-color: #fff;
      overflow: hidden;
      .s_image {
        width: 100%;
        height: 60%;
        .van-image {
          position: unset;
        }
      }
      .s_main {
        height: 40%;
        padding: 5px 10px;
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
</style>
