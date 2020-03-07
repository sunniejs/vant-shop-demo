<!-- icons -->
<template>
  <div>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="goods-list">
          <div class="goods-item" v-for="(item, index) in list" :key="index" @click="goDetail">
            <img src="../../assets/images/special_img.jpg" alt="" />
            <div class="goods-info">{{ index + 1 }} 无印良品 全棉色织水洗棉四件套（1.5米床笠款）</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  computed: {},

  mounted() {},
  // 动态设置keepAlive
  beforeRouteLeave: function(to, from, next) {
    // 如果去Detail，当前页面需要缓存，反之当前页面不缓存
    switch (to.name) {
      case 'Detail':
        from.meta.keepAlive = true
        break
      default:
        from.meta.keepAlive = false
    }
    next()
  },
  methods: {
    // 去详情页
    goDetail() {
      this.$router.push({name: 'Detail'})
    },

    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  width: 100%;
  padding: 0 1px 0 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .goods-item {
    margin: 7px 7px 0 0;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background: #fff;
    img {
      width: 172px;
      height: 172px;
    }
    .goods-info {
      width: 172px;
      padding: 0 10px;
      height: 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
