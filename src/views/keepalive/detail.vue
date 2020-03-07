<template>
  <div>
    <div class="goods-detail">
      <img src="../../assets/images/special_img.jpg" alt="" />
      <div class="goods-name">无印良品 全棉色织水洗棉四件套（1.5米床笠款）</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style lang="scss" scoped>
.goods-detail {
  img {
    width: 100%;
    height: auto;
  }
  .goods-name {
    padding: 15px 0;
    font-size: 16px;
    color: #000000;
    line-height: 23px;
  }
}
</style>
