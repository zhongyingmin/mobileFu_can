<template>
  <div class="ImageUpload">
    <van-nav-bar
      title="病历记录"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="ImageUpload_content">
      <div class="one">
        <div class="one_image" @click="show = true">
          <van-icon class-prefix="iconfont iconjia" name="iconjia" />
        </div>
        <div class="one_title">上传照片</div>
      </div>
      <div
        class="imager"
        v-for="(item, index) in images"
        :key="index"
        @click="show_image = true"
      >
        <div class="imager_image">
          <van-image :src="item.image">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
        <div class="imager_title">
          <div>{{ item.name }}</div>
          <div class="title_font">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <van-image-preview v-model="show_image" :images="images" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
    <van-dialog
      v-model="show"
      title="上传照片"
      class="a_dialog"
      show-cancel-button
      confirmButtonText="上传"
      confirmButtonColor="#c8a060"
    >
      <van-uploader :after-read="afterRead" />
      <van-field
        v-model="message_to"
        rows="1"
        autosize
        type="textarea"
        placeholder="编辑名称"
      />
    </van-dialog>
    <div class="flxed_bottom">
      <div class="f_conter">
        <van-icon class-prefix="iconfont iconshanchu1" name="iconshanchu1" />
        <span>删除</span>
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
      show: false,
      show_image: false,
      index: 0,
      file_add:'',
      Thumbnailurl:'',
      images: [
        {
          image: "https://img.yzcdn.cn/1.jpg",
          name: "病历1.png",
          date: "2019年5月30日"
        },
        {
          image: "https://img.yzcdn.cn/2.jpg",
          name: "病历1.png",
          date: "2019年5月30日"
        }
      ]
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.file_add = file;
      this.base64obj(file);
      return false;
    },
    base64obj(uploadFile) {
      let reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      let _this = this;
      reader.onloadend = function() {
        //console.log(reader.result);
        _this.Thumbnailurl = reader.result; // base64就是图片的转换的结果
        // _this.obj.title.imgfile = reader.result;
      };
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
.ImageUpload {
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
      .van-uploader {
        padding: 10px 16px 0;
        width: 100%;
        /deep/ .van-uploader__wrapper {
          width: 100%;
          .van-uploader__upload {
            width: 100%;
            height: 100px;
            margin: 0 0 8px 0;
          }
        }
      }
      .van-cell::after {
        border-bottom: none;
      }
      .van-cell {
        padding: 0 16px 10px;
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
  .ImageUpload_content {
    height: auto;
    overflow-y: auto;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    > div {
      display: inline-block;
      width: 30%;
      height: auto;
      margin-right: 5%;
      margin-bottom: 15px;
    }
    .one {
      .one_image {
        width: 100%;
        height: 105px;
        background-color: #d6d6d6;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: #fff;
          font-size: 45px;
        }
      }
      .one_title {
        margin-top: 5px;
        text-align: center;
        font-size: 13px;
      }
    }
    .imager {
      .imager_image {
        width: 100%;
        height: 105px;
        border-radius: 8px;
        overflow: hidden;
        > .van-image {
          width: 100%;
          height: 100%;
        }
      }
      .imager_title {
        margin-top: 5px;
        text-align: left;
        font-size: 13px;
        .title_font {
          margin-top: 2px;
          font-size: 10px;
          color: #666666;
        }
      }
    }
    > div:nth-of-type(3n) {
      margin-right: 0;
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
