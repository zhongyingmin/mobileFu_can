<template>
  <div class="introduce">
    <van-nav-bar class="head_nav" left-text="返回" title="书籍介绍" left-arrow @click-left="back" />
    <div class="body">
      <div class="name-wrapper">
        <div class="left">
          <van-image
            width="100%"
            height="100%"
            src="http://img3.imgtn.bdimg.com/it/u=1708429602,3234889915&fm=26&gp=0.jpg"
          />
        </div>
        <div class="right">
          <div class="title">黄帝内经</div>
          <div class="tag">
            <div>
              <van-icon name="iconshoucangxian" class-prefix="iconfont iconshoucangxian"></van-icon>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
      <div class="introduce-wrapper">
        <div class="title">简介</div>
        <div class="content" id="content">
          《黄帝内经》是中国传统医学四大经典著作之一《黄帝内经》、《伤寒杂病论》、《神农本草经》、《难经》，
          也是第一部冠以中华民族先祖“黄帝”之名的传世巨著，是我国医学宝库中现存成书最早的一部医学典籍。是研究人的生理学、病理学、诊断学、
          治疗原则药物学的医学巨著。在理论上建立了中医学上的“阴阳五行学说”“脉象学说”“藏象学说”、“经络学说”、
          “病因学说”“病机学说”、“病症”、“诊法”、论治及“养生学”、“运、气学”等学说。其医学理论是建立在我国古代道家理论的基础之上的，反映了我国古代天人合一思想。
        </div>
        <div class="enter">进入阅读</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let content = document.getElementById("content");
    this.init(content);
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
          ? "<div style='font-size:14px;wight:100%;text-align:center'><i class='iconfont iconxia' style='font-size:18px'></i>展开全部</div>"
          : ""; ////判断显示的字数是否大于默认显示的字数    来设置a的显示
      a.style.cssText = `color: #666666`;
      a.href = "javascript:void(0)"; //让a链接点击不跳转

      a.onclick = function() {
        if (a.innerHTML.indexOf("展开") > 0) {
          //如果a中含有"展开"则显示"收起"
          a.innerHTML =
            "<div style='font-size:14px;wight:100%;text-align:center'><i class='iconfont iconxia' style='font-size:18px;display: -webkit-inline-box;transform: rotate(180deg);'></i>收起</div>";
          span.innerHTML = content;
        } else {
          a.innerHTML =
            "<div style='font-size:14px;wight:100%;text-align:center'><i class='iconfont iconxia' style='font-size:18px'></i>展开全部</div>";
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
.introduce {
  width: 100%;
  height: 100%;
  .body {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-color: #fff;
    .name-wrapper {
      display: flex;
      width: 100%;
      height: 200px;
      padding: 19px 0;
      border-bottom: 1px solid #f0f0f0;
      .left {
        background-color: #f7f3ed;
        width: 8em;
        height: 10em;
        margin: 0 30px;
        box-shadow: 0px 4px 8px 0px rgba(102, 91, 71, 0.4);
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;
        }
        .tag {
          > div {
            display: inline-block;
            background-color: #c8a060;
            color: #ffffff;
            border-radius: 25px;
            font-size: 13px;
            padding: 4px 10px;
          }
        }
      }
    }
    .introduce-wrapper {
      width: 100%;
      height: auto;
      padding: 10px 30px;
      .title {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .content {
        font-size: 15px;
        color: #000000;
        line-height: 25px;
        a {
          text-decoration: none;
        }
      }
      .enter {
        margin: 50px auto;
        width: 65px;
        background-color: #7e3330;
        border-radius: 25px;
      }
    }
  }
}
</style>