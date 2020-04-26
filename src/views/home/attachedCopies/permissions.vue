<template>
  <div class="permissions">
    <van-nav-bar
      title="权限设置"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="members">
      <van-cell title="成员及权限" is-link to='/attachedCopies/members'>
        <template #label>
          <div class="members_item">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            张患者
          </div>
          <div class="members_item">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            张患者
          </div>
          <div class="members_item">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            张患者
          </div>
          <div class="members_item">
            <van-image
              round
              width="3rem"
              height="3rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            张患者
          </div>
        </template>
      </van-cell>
      <van-cell value="添加成员"  to='/attachedCopies/membersAdd'/>
    </div>
    <div>
      <van-cell value="默认仅查看" />
      <div class="item_font">医生收到文件后仅可查看，不会泄露你的隐私</div>
    </div>
    <div>
      <van-cell title="默认时间" value="3天"  is-link />
      <div class="item_font">医生只可以在选择的时间内查看文件</div>
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
.permissions {
  width: 100%;
  height: 100%;
  .members {
    padding: 15px 0;
    .van-cell__label {
      display: flex;
      margin-top: 8px;
      width: 300px;
      height: 72px;
      overflow: hidden;
      overflow-x: auto;
      .members_item {
        width: 3rem;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 15px;
        .van-image {
          margin-bottom: 2px;
        }
      }
    }
  }
  > div {
    padding-bottom: 15px;
    .item_font {
      font-size: 12px;
      color: #969799;
      padding-top: 8px;
      padding-left: 16px;
      text-align: left;
    }
  }
}
</style>
