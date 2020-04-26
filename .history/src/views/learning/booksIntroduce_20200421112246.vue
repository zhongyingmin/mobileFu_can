<template>
  <div class="learning">
    <div class="learning_body">
      <div class="b_search_div">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <i class="iconitem iconfont iconfenlei"></i>
      </div>
      <van-tabs v-model="active">
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
                <div></div>
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
    return {};
  }
};
</script>
<style lang="scss" scoped>
.learning {
  width: 100%;
  height: 100%;
}
</style>
