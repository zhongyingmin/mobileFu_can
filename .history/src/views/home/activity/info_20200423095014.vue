<template>
  <div class="activity_info">
    <van-nav-bar title="活动详情" left-text="返回" left-arrow @click-left="back" />
    <div class="content_a">
      <div class="content_item">
        <div class="content_item_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="ci_text">
          <div>
            <div>
              <span>张立伟</span>
              <span>内科医生</span>
            </div>
            <div>选择预约</div>
          </div>
          <div class="desc" id="content">
            2005年以后，互联网进入Web2.0时代，各种类似桌面软件的Web应用大量涌现，网站的前端由此发生了翻天覆地的变化。
            网页不再只是承载单一的文字和图片，各种富媒体让网页的内容更加生动，网页上软件化的交互形式为用户提供了更好的使用体验，
            这些都是基于前端技术实现的。以前会Photoshop和Dreamweaver就可以制作网页，现在只掌握这些已经远远不够了。
          </div>
          <div>
            <span>预约费:100/位</span>
            <span>最大接诊数:20位 剩余10位</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="ci_text">
          <div>
            <div>
              <span>张立伟</span>
              <span>内科医生</span>
            </div>
            <div>选择预约</div>
          </div>
          <div class="desc" id="content">
            2005年以后，互联网进入Web2.0时代，各种类似桌面软件的Web应用大量涌现，网站的前端由此发生了翻天覆地的变化。
            网页不再只是承载单一的文字和图片，各种富媒体让网页的内容更加生动，网页上软件化的交互形式为用户提供了更好的使用体验，
            这些都是基于前端技术实现的。以前会Photoshop和Dreamweaver就可以制作网页，现在只掌握这些已经远远不够了。
          </div>
          <div>
            <span>预约费:100/位</span>
            <span>最大接诊数:20位 剩余10位</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_image">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="ci_text">
          <div>
            <div>
              <span>张立伟</span>
              <span>内科医生</span>
            </div>
            <div>选择预约</div>
          </div>
          <div class="desc" id="content">
            2005年以后，互联网进入Web2.0时代，各种类似桌面软件的Web应用大量涌现，网站的前端由此发生了翻天覆地的变化。
            网页不再只是承载单一的文字和图片，各种富媒体让网页的内容更加生动，网页上软件化的交互形式为用户提供了更好的使用体验，
            这些都是基于前端技术实现的。以前会Photoshop和Dreamweaver就可以制作网页，现在只掌握这些已经远远不够了。
          </div>
          <div>
            <span>预约费:100/位</span>
            <span>最大接诊数:20位 剩余10位</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <span>已选1位</span>
        <span>合计100元</span>
      </div>
      <div class="button">确定预约</div>
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
  mounted() {
    document.body.style.background="rgba(0,0,0,.0)"
    console.log([document])
    let desc = document.getElementsByClassName("desc");
    for (let i = 0; i < desc.length; i++) {
      this.init(desc[i]);
    }
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
    init(div) {
      var len = 60; //默认显示字数
      var ctn = div; //获取div对象
      var content = ctn.innerHTML; //获取div里的内容

      //alert(content);
      var span = document.createElement("span"); //创建<span>元素
      var a = document.createElement("a"); //创建<a>元素
      span.innerHTML = content.substring(0, len); //span里的内容为content的前len个字符

      a.innerHTML =
        content.length > len
          ? "... 展开全部<i class='iconfont iconxia'></i>"
          : ""; ////判断显示的字数是否大于默认显示的字数    来设置a的显示
      a.style.cssText = `color: #666666`;
      a.href = "javascript:void(0)"; //让a链接点击不跳转

      a.onclick = function() {
        if (a.innerHTML.indexOf("展开") > 0) {
          //如果a中含有"展开"则显示"收起"
          a.innerHTML =
            "收起<i class='iconfont iconxia' style='display: -webkit-inline-box;transform: rotate(180deg);'></i>";
          span.innerHTML = content;
        } else {
          a.innerHTML = "... 展开全部<i class='iconfont iconxia'></i>";
          span.innerHTML = content.substring(0, len);
        }
      };
      // 设置div内容为空，span元素 a元素加入到div中
      ctn.innerHTML = "";
      ctn.appendChild(span);
      ctn.appendChild(a);
    }
  }
};
</script>
<style lang="scss" scoped>
.activity_info {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.0);
  .content_a {
    padding-top: 320px;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
    // background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1670627962,3776336742&fm=11&gp=0.jpg");
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    &.content_a:before {
      content: " ";
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1670627962,3776336742&fm=11&gp=0.jpg") center 0 no-repeat;
      background-size: cover;
    }
    .content_item {
      display: flex;
      margin: 15px;
      height: auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      .content_item_image {
        width: 30%;
        height: auto;
        .van-image {
          position: unset;
        }
      }
      .ci_text {
        width: 70%;
        padding: 10px 10px 0 8px;
        height: auto;
        > div:first-child {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
          > div:first-child {
            > span:first-child {
              font-size: 16px;
              color: #000000;
            }
            > span:last-child {
              font-size: 14px;
              color: #333333;
            }
          }
          > div:last-child {
            font-size: 12px;
            color: #c8a060;
          }
        }
        .desc {
          width: 100%;
          margin-bottom: 6px;
          font-size: 12px;
          color: #333333;
          line-height: 20px;
          a {
            text-decoration: none;
          }
        }
        > div:last-child {
          text-align: justify;
          font-size: 12px;
          color: #666666;
          > span {
            display: inline-block;
          }
        }
        > div:last-child:after {
          content: "";
          width: 100%;
          display: inline-block;
        }
      }
    }
  }
  .footer {
    position: fixed;
    width: 100%;
    height: 45px;
    bottom: 0px;
    display: flex;
    > div {
      padding: 0 10px;
      width: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      font-size: 14px;
      > span:first-child {
        color: #666666;
      }
      > span:last-child {
        color: #c8a060;
      }
    }
    .button {
      width: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      height: 45px;
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
    }
  }
}
</style>
