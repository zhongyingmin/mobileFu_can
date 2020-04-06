<template>
  <div class="membersAdd">
    <van-nav-bar
      title="添加成员"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="membersAdd_content">
      <van-checkbox-group v-model="result">
        <div class="membersAdd_c-item">
          <div class="membersAdd_c-title">已预约医生</div>
          <div
            class="m_content"
            v-for="(item, index) in list"
            :key="index"
            @click="toggle(index)"
          >
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="c_right">
              <div>张世杰医生</div>
              <div>
                <van-checkbox ref="checkboxes" :name="item"></van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="membersAdd_c-item">
          <div class="membersAdd_c-title">最近联系医生</div>
          <div
            class="m_content"
            v-for="(item, index) in list"
            :key="index"
            @click="toggle(index)"
          >
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="c_right">
              <div>谢沙医生</div>
              <div>
                <van-checkbox ref="checkboxes" :name="item"></van-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="membersAdd_c-item">
          <div class="membersAdd_c-title">我的健康服务医生</div>
          <div
            class="m_content"
            v-for="(item, index) in list"
            :key="index"
            @click="toggle(index)"
          >
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="c_right">
              <div>张世杰医生</div>
              <div>
                <van-checkbox ref="checkboxes" :name="item"></van-checkbox>
              </div>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>

    <div class="flxed_bottom">
      <span @click="submit">确定</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["a", "b"],
      result: []
    };
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
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    submit(){
      console.log(this.result)
    }
  }
};
</script>
<style lang="scss" scoped>
.membersAdd {
  width: 100%;
  height: 100%;
  .membersAdd_content {
    padding: 15px 15px 50px;
    .membersAdd_c-item {
      width: 100%;
      height: auto;
      .membersAdd_c-title {
        font-size: 13px;
        color: #969799;
        padding-bottom: 15px;
      }
      .m_content {
        padding: 15px 10px;
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #fff;
        display: flex;
        align-items: center;
        .van-image {
          margin-right: 10px;
        }
        .c_right {
          flex-grow: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          color: #000;
        }
      }
    }
  }
  .flxed_bottom {
    position: fixed;
    bottom: 5px;
    left: 0;
    display: block;
    width: 100%;
    > span {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 45px;
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
      border-radius: 40px;
      color: #ffffff;
    }
  }
}
</style>
