<template>
  <div class="info">
    <van-nav-bar class="head_nav" left-text="返回" title="完善个人信息" left-arrow @click-left="back" />
    <div class="info_main">
      <div class="m_item">
        <div class="m_title">姓名</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入姓名" />
        </van-cell-group>
      </div>
      <div class="m_item">
        <div class="m_title">联系地址</div>
        <van-cell-group>
          <van-field
            v-model="areaValue"
            @click="show=true"
            placeholder="选择省 / 市 / 区"
            right-icon="arrow-down"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入姓名" />
        </van-cell-group>
      </div>
      <div class="m_item"></div>
      <div class="m_item"></div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-area :area-list="areaList" @confirm="actiong" @cancel="shut" :value="addrCode" />
    </van-popup>
  </div>
</template>
<script>
import areaList from "../../../../static/json/province";
export default {
  data() {
    return {
      value: "",
      areaValue:"",
      show: false,
      addrCode: '440105',
      areaList
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
    },
    actiong(event) {
      let area=""
      event.forEach(element => {
          area+=element.name+"/";
      });
      area=area.slice(0,area.lastIndexOf())
      console.log(area)
      this.areaValue=area;
    },
    shut() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .info_main {
    padding: 15px;
    width: 100%;
    height: auto;
    .m_item {
      margin-bottom: 15px;
      .m_title {
        position: relative;
        padding: 0 15px 10px;
        font-size: 14px;
      }
      .m_title::before {
        position: absolute;
        top: 0px;
        left: 0px;
        color: #ee0a24;
        font-size: 20px;
        content: "*";
      }
      .van-cell {
        margin-bottom: 10px;
        padding: 10px 0;
      }
      .van-cell:not(:last-child)::after {
        left: 0px;
      }
      .van-cell-group {
        margin-bottom: 10px;
        > .van-cell {
          border-radius: 5px;
          border: solid 1px #cccccc;
          margin: 0 auto;
          line-height: 22px;
          padding: 8px 16px;
          color: #999999;
        }
      }
    }
  }
}
</style>
