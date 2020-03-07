<!-- home -->
<template>
  <div class="index-page">
    <div class="index-hd">
      <img class="index-logo" src="../../assets/images/logo.png" alt="" />
      <div class="title-text">Sol 商城组件</div>
    </div>
    <div class="index-bd">
      <van-cell title="可拖拽悬浮按钮" is-link to="/example/icons" />
      <van-cell title="滚动导航" is-link to="/example/navbar" />
      <van-cell title="生成海报图" is-link to="/example/poster" />
      <van-cell title="返回浏览位置" is-link to="/keepalive/index" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
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
