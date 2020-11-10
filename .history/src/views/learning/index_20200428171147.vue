<template>
  <div class="learning">
    <div class="learning_body">
      <div class="b_search_div">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <i class="iconitem iconfont iconfenlei"></i>
      </div>
      <van-tabs
        v-model="active"
        title-active-color="#7c322f"
        color="#7c322f"
        line-height="2"
        title-inactive-color="#333333"
      >
        <van-tab title="经典名著">
          <div class="sweiper">
            <van-swipe class="head_swipe" :autoplay="5000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <van-tabs
            type="card"
            title-inactive-color="#666666"
            title-active-color="#fff"
            color="#c9a260"
            background="#f0f0f0"
          >
            <van-tab title="全部书籍">
              <div class="content">
                <div @click="goPath('/book/introduce')"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </van-tab>
            <van-tab title="我的收藏"></van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="名师课堂">
          <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
          </van-pull-refresh>-->
          <div class="sweiper">
            <van-swipe class="head_swipe" :autoplay="5000">
              <van-swipe-item v-for="(image, index) in images_lecture" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <van-tabs
            type="card"
            title-inactive-color="#666666"
            title-active-color="#fff"
            color="#c9a260"
            background="#f0f0f0"
          >
            <van-tab title="全部书籍">
              <div class="content_video">
                <div>
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
              </div>
            </van-tab>
            <van-tab title="我的收藏"></van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="行业资讯">
          <div class="sweiper">
            <van-swipe class="head_swipe" :autoplay="5000">
              <van-swipe-item v-for="(image, index) in images_lecture" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </div>

          <div class="content_information">
            <div class="mall_content_title">最新资讯</div>
            <div class="c_item">
              <div>
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
            </div>
          </div>
        </van-tab>
        <van-tab title="文化传承">
          <div class="sweiper">
            <van-swipe class="head_swipe" :autoplay="5000">
              <van-swipe-item v-for="(image, index) in images_lecture" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </div>

          <div class="content_information">
            <div class="mall_content_title">经典流传</div>
            <div class="c_item">
              <div>
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
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from "@/components/navigation";
export default {
  data() {
    return {
      active: 0,
      list: [],
      images: [
        "../../../static/image/learning865.png",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2972732503,3430499099&fm=11&gp=0.jpg"
      ],
      images_lecture: ["../../../static/image/learning865.png"],
      value: "",
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  },
  components: {
    Navigation
  }
};
</script>
<style lang="scss" scoped>
.learning {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .learning_body {
    width: 100%;
    height: calc(100vh - 50px);
    overflow-x: auto;
    .b_search_div {
      width: 100%;
      margin: 15px 0;
      padding: 0 5%;
      padding-right: 0;
      height: 30px;
      display: flex;
      justify-content: space-between;
      .van-search {
        flex-grow: 9;
        background-color: #f5f5f5;
        border-radius: 35px;
        margin-right: 5px;
        border: 1px solid red;
        padding: 5px 0;
        .van-cell {
          padding: 0 8px 0 0;
        }
      }
      .iconitem {
        font-size: 30px;
        flex-grow: 1;
        color: #666666;
      }
    }
    /deep/ .van-tabs--line .van-tabs__wrap::after {
      border-top: none;
    }
    .van-tab__pane {
      padding: 17px;
      .sweiper {
        width: 100%;
        height: 145px;
        box-shadow: 4px 7px 30px 0px rgba(153, 150, 145, 0.4);
        background-color: #f5f5f5;
        margin-bottom: 20px;
        .head_swipe {
          width: 100%;
          height: 100%;
          overflow: hidden;
          img {
            border-radius: 5px;
            overflow: hidden;
          }
        }
      }
      /deep/ .van-tabs {
        margin-bottom: 10px;
        .van-tabs__nav--card {
          margin: 0 auto;
          margin-right: 28%;
          border: none;
          border-radius: 8px;
          overflow: hidden;
          width: 45%;
          > div {
            border: none;
            font-size: 12px;
          }
        }
        .van-tabs__content {
          .van-tab__pane {
            padding: 17px 0;
            .content {
              width: 100%;
              height: auto;
              display: flex;
              flex-wrap: wrap;
              > div {
                width: 31%;
                margin-bottom: 10px;
                margin-right: 3%;
                height: 130px;
                background-color: #f7f3ed;
                box-shadow: 1px 2px 4px 0px rgba(102, 91, 71, 0.4);
                float: left;
              }
              > div:nth-of-type(3n) {
                margin-right: 0;
              }
            }
            .content_video {
              width: 100%;
              height: auto;
              display: flex;
              flex-wrap: wrap;
              > div {
                width: 48%;
                margin-bottom: 10px;
                margin-right: 3%;
                height: 173px;
                border-radius: 8px;
                background-color: #fff;
                overflow: hidden;
                border: solid 1px #dcdcdc;
                float: left;
                .s_image {
                  width: 100%;
                  height: 60%;
                  .van-image {
                    position: unset;
                  }
                }
                .s_main {
                  height: 40%;
                  padding: 10px;
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
              > div:nth-of-type(2n) {
                margin-right: 0;
              }
            }
          }
        }
      }

      .content_information {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        .mall_content_title {
          margin: 0 0 15px;
          width: 100%;
        }
        .c_item {
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          > div {
            width: 48%;
            margin-bottom: 10px;
            margin-right: 3%;
            height: 173px;
            border-radius: 8px;
            background-color: #fff;
            overflow: hidden;
            border: solid 1px #dcdcdc;
            float: left;
            .s_image {
              width: 100%;
              height: 60%;
              .van-image {
                position: unset;
              }
            }
            .s_main {
              height: 40%;
              padding: 10px;
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
          > div:nth-of-type(2n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
