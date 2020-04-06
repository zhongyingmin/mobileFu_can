<template>
  <div class="attachedCopies">
    <van-nav-bar
      title="附件册"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="attachedCopies_content">
      <div @click="goPath('/ImageUpload')">
        <div>
          <van-icon
            class-prefix="iconfont iconwenjianjia"
            name="iconwenjianjia"
          />
        </div>
        <div class="content_right">
          <div>
            <div>病例记录</div>
            <div>默认文件夹</div>
          </div>
          <div @click.stop="goPath('/permissions')">
            <van-icon class-prefix="iconfont iconsuoguan" name="iconsuoguan" />
            <div>权限设置</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <van-icon
            class-prefix="iconfont iconwenjianjia"
            name="iconwenjianjia"
          />
        </div>
        <div class="content_right">
          <div>
            <div>化验单(检验报告)</div>
            <div>默认文件夹</div>
          </div>
          <div>
            <van-icon class-prefix="iconfont iconsuoguan" name="iconsuoguan" />
            <div>权限设置</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <van-icon
            class-prefix="iconfont iconwenjianjia"
            name="iconwenjianjia"
          />
        </div>
        <div class="content_right">
          <div>
            <div>医学影像检查资料</div>
            <div>默认文件夹</div>
          </div>
          <div>
            <van-icon class-prefix="iconfont iconsuoguan" name="iconsuoguan" />
            <div>权限设置</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <van-icon
            class-prefix="iconfont iconwenjianjia"
            name="iconwenjianjia"
          />
        </div>
        <div class="content_right">
          <div>
            <div>北京协和医院就诊病历</div>
            <div>默认文件夹</div>
          </div>
          <div>
            <van-icon class-prefix="iconfont iconsuoguan" name="iconsuoguan" />
            <div>权限设置</div>
          </div>
        </div>
      </div>
    </div>
    <van-dialog
      v-model="show"
      title="新建文件夹"
      class="a_dialog"
      show-cancel-button
      confirmButtonText="创建"
      confirmButtonColor="#c8a060"
    >
      <van-field
        v-model="message_to"
        rows="1"
        autosize
        type="textarea"
        placeholder="新建文件夹"
      />
      <van-checkbox v-model="checked">设为开放文件夹</van-checkbox>
    </van-dialog>
    <div class="flxed_bottom">
      <div class="f_conter" @click="show = true">
        <van-icon class-prefix="iconfont iconwenjian" name="iconwenjian" />
        <span>创建文件夹</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      message_to: "",
      checked: "",
      show: false
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
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.attachedCopies {
  width: 100%;
  height: 100%;
  .a_dialog {
    width: 250px;
    border-radius: 8px;
    min-height: 20%;
    /deep/ .van-dialog__header {
      padding-top: 15px;
    }
    .van-dialog__content {
      .van-cell::after {
        border-bottom: none;
      }
      .van-cell {
        /deep/ .van-field__value {
          padding: 5px 10px;
          background-color: #f5f5f5;
        }
      }
      .van-checkbox {
        padding: 0 16px 15px;
        font-size: 12px;
        /deep/ .van-checkbox__icon {
          height: 15px;
          line-height: 15px;
          i {
            font-size: 0.6em;
          }
        }
      }
    }
  }
  .attachedCopies_content {
    height: calc(100vh - 96px);
    overflow-y: auto;
    padding: 15px;
    > div {
      width: 100%;
      height: 90px;
      padding: 10px;
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      font-size: 11px;
      color: #666666;
      > div:first-child {
        padding-right: 10px;
        i {
          font-size: 60px;
          color: rgb(255, 202, 40);
        }
      }
      > .content_right {
        flex-grow: 1;
        height: auto;
        display: inline-flex;
        align-items: flex-end;
        > div:first-child {
          width: 80%;
          > div:first-child {
            font-size: 15px;
            color: #000;
            margin-bottom: 5px;
          }
        }
        > div:last-child {
          width: 20%;
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          i {
            font-size: 25px;
            color: #666666;
          }
        }
      }
    }
  }
  .flxed_bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ebedf0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .f_conter {
      display: inline-block;
      text-align: center;
      i {
        font-size: 20px;
        color: #646566;
      }
      span {
        display: block;
        font-size: 11px;
        color: #000;
      }
    }
  }
}
</style>
