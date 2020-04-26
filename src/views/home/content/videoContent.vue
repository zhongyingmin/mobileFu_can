<template>
  <div class="videoContent">
    <van-nav-bar title="视频内容" left-text="返回" left-arrow @click-left="back" />
    <van-sticky>
      <div class="video_w">
        <video
          src="https://ugccsy.qq.com/uwMROfz2r57CIaQXGdGnC2dePkZqjjlJK4UbWCf8jsE_RNpY/szg_4699_50001_0b6bayaaqaaaqiagll4jqzpfcbwdbadaacca.f622.mp4?sdtfrom=v1010&guid=889d71fddd2ad650a17c3187f6da5ecf&vkey=8AABF372AB13A9769F4E895EC9C454799FB21F029C5BD5B562CB2740ADFD4D3BF27C5E68B20C7299D8FC1DFC5A274BC0BE5B6A3E503C3060C09613DA4345B63C7C6335E23E766E5D04290A7FAF329F24C516DECBCD296645812AE0A91893CBC53BDB69270C08FD768E7137AE7BD238C5F97A56F5EFBF3B6A302B21526AFC3233"
          controls="controls"
        >您的浏览器不支持 video 标签。</video>
      </div>
    </van-sticky>
    <div class="introduction">
      <div>
        <div>中医药文化历史介绍</div>
        <div>
          <van-icon class-prefix="iconfont iconshoucang" name="iconshoucang" />
          <span>收藏</span>
        </div>
      </div>

      <div class="introduce">
        <input type="checkbox" id="introduce" />
        <p>
          简介：中医诞生于原始社会，国医学宝库中现存成书最早的一部医学典籍。
          是研究人的生理学、病国医学宝库中现存成书最早的一部医学典籍。
          是研究人的生理学、病
        </p>
        <label for="introduce">
          <van-icon class-prefix="iconfont iconxia" name="iconxia" />
        </label>
      </div>
    </div>
    <div class="other">
      <div class="other_title">其他视频</div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>中药的奥秘</div>
          <div>视频时长 03:56</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>中药的奥秘</div>
          <div>视频时长 03:56</div>
        </div>
      </div>
      <div class="list_item">
        <van-image width="8em" height="5em" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="item_text">
          <div>中药的奥秘</div>
          <div>视频时长 03:56</div>
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
.videoContent {
  width: 100%;
  height: 100%;
  .video_w {
    width: 100%;
    height: 220px;
    background-color: #d2d2d2;
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .introduction {
    width: 100%;
    padding: 15px 12px;
    background-color: #fff;
    > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      > div:first-child {
        font-size: 16px;
        color: #000;
      }
      > div:last-child {
        width: 75px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #c8a060;
        border-radius: 20px;
        color: #fff;
        padding-bottom: 2px;
        i {
          font-size: 18px;
        }
        span {
          font-size: 13px;
          margin-right: 3px;
        }
      }
    }
    .introduce {
      height: auto;
      font-size: 12px;
      line-height: 20px;
    }
    .introduce p {
      height: 40px;
      overflow: hidden;
    }
    .introduce #introduce:checked + p {
      height: auto;
    }
    #introduce:checked ~ label[for="introduce"] {
      transform: rotate(180deg);
    }
    .introduce label {
      width: 17px;
      display: block;
      margin: 10px auto 0;
      cursor: pointer;
    }
    #introduce {
      display: none;
    }
  }
  .other {
    margin-top: 5px;
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 0 12px 15px;
    .other_title {
      padding: 18px 0 0;
      color: #000000;
      font-size: 16px;
    }
    .list_item {
      display: flex;
      padding: 18px 0;
      border-bottom: 1px solid #dbdbdb;
      .item_text {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        padding: 0 15px;
        font-size: 12px;
        color: #333333;
        > div {
          width: 100%;
          display: flex;
          margin-bottom: 10px;
        }
        div:first-child {
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
