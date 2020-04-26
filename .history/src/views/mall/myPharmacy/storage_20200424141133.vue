<template>
  <div class="storage">
    <van-nav-bar title="药房入库" left-text="返回" left-arrow @click-left="back" />
    <div class="storage_content">
      <van-cell-group>
        <van-field v-model="value1" label="单据编号" placeholder="请输入单据编号" />
        <van-field v-model="value2" label="供应商" right-icon="arrow-down" placeholder="请输入供应商" />
        <van-field v-model="value3" label="入库日期" right-icon="arrow-down" placeholder="请输入入库日期" />
        <van-field v-model="value4" label="验收人" right-icon="arrow-down" placeholder="请输入验收人" />
        <van-field
          v-model="value5"
          label="条码扫描"
          class="cell_saoyisao"
          icon-prefix="iconfont iconsaoyisao"
          right-icon="iconsaoyisao"
          placeholder="请输入条码扫描"
        />
        <van-field v-model="value6" label="添加药材" to="/mall/myPharmacy/AddHerbs" right-icon="arrow" placeholder="没有条码需手动填写表单" />
      </van-cell-group>
      <div class="storage_items">
        <div class="o_item">
          <div>
            <div>1 编号：001</div>
            <div>精品艾叶 500g</div>
            <div>
              <van-icon
                class="delete_icon"
                class-prefix="iconfont iconshanchu1"
                name="iconshanchu1"
              />
            </div>
          </div>
          <div>
            <div>数量60（个）</div>
            <div>进价19.9</div>
            <div>售价19.9</div>
          </div>
          <div>
            <div>预警数10</div>
            <div>有效日期3年</div>
            <div>总价10000</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_div">
      <div>打印</div>
      <div>提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "XSD_20200304_CJYH001",
      value2: "上海市药材有限公司",
      value3: "2020年3月4日",
      value4: "张丽丽",
      value5: "条码",
      value6:""
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
    }
  }
};
</script>
<style lang="scss" scoped>
.storage {
  width: 100%;
  height: 100%;
  .storage_content {
    width: 100%;
    height: 100%;
    /deep/ .van-cell-group {
      .van-cell {
        font-size: 15px;
        .van-field__value {
          font-size: 13px;
          color: #333333;
        }
      }
      .cell_saoyisao {
        .van-field__right-icon {
          padding: 0 5px;
          i {
            font-size: 30px;
            color: #c8a060;
          }
        }
      }
    }
    .storage_items {
      width: 100%;
      min-height: calc(100vh - 267px);
      padding: 15px 15px 45px;
      box-shadow: inset 0px 6px 24px 0px rgba(0, 0, 0, 0.1);
      .o_item {
        padding: 10px 15px 15px;
        border-radius: 5px;
        background-color: #fff;
        > div {
          display: flex;
          width: 100%;
          height: auto;
          justify-content: space-between;
          font-size: 13px;
          color: #000;
          align-items: center;
          .delete_icon {
            font-size: 25px;
            color: #666666;
          }
        }
        > div:nth-of-type(2) {
          margin-top: 10px;
          color: #c8a060;
          align-items: baseline;
          >div {
            border-radius: 3px;
            padding: 4px 10px;
            color: #c8a060;
            border: solid 1px #c8a060;
            background-color: #faf8f5;
          }
        }
        > div:last-child {
          margin-top: 10px;
          color: #c8a060;
          align-items: baseline;
          >div {
            border-radius: 3px;
            padding: 4px 10px;
            color: #c8a060;
            border: solid 1px #c8a060;
            background-color: #faf8f5;
          }
        }
      }
    }
  }
  .footer_div {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    height: 45px;
    display: flex;
    border-top: 1px solid #d1d1d1;
    > div {
      width: 50%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    > div:first-child {
      color: #666666;
    }
    > div:last-child {
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      color: #fff;
    }
  }
}
</style>
