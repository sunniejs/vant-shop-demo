<!-- home -->
<template>
  <div class="index-page">
    <div class="index-hd">
      <img class="index-logo" src="../../assets/images/logo.png" alt="">
      <div class='title-text'>Soul 商城组件</div>
    </div>
    <div class="index-bd">
      <van-cell title="可拖拽悬浮按钮" is-link url="/example/icons" />
      <van-cell title="滚动导航" is-link to="/example/navbar" />
    </div>

  </div>
</template>

<script>
import { Cell } from 'vant'
export default {
  components: {
    'van-cell': Cell
  },
  data() {
    return {
    }
  },
  computed: {},

  mounted() {
  },

  methods: {
  }
}
</script>
<style lang='scss' scoped>
.index-page {
  background: #f8f8f8;
  min-height: 100vh;
  .index-hd {
    padding: 80px 10px;
    text-align: center;
    .index-logo {
      width: 40px;
      height: 40px;
      display: inline-block;
      vertical-align: middle;
    }
    .title-text {
      display: inline-block;
      vertical-align: middle;
      font-size: 28px;
      margin-left: 12px;
      font-weight: 400;
      font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    }
  }

  .index-bd {
    padding: 0 15px 20px;
  }
}
</style>
