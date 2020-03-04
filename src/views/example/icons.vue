<!-- icons -->
<template>
  <div>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="`我是你的小仙女，爱你第${item}遍`" />
      </van-list>
    </div>
    <float-icons padding="10 10 60 10" class="icons-warp">
      <div class="float-icon-item">
        <img src="../../assets/images/home-icon.png" alt="" @click="handleIcons('home')" />
        <span>首页</span>
      </div>
      <div class="float-icon-item">
        <img src="../../assets/images/cart-icon.png" alt="" @click="handleIcons('cart')" />
        <span>购物车</span>
      </div>
    </float-icons>
  </div>
</template>

<script>
import FloatIcons from '@/components/s-icons'
export default {
  components: {
    'float-icons': FloatIcons
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  computed: {},

  mounted() {
    console.log('222')
  },

  methods: {
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
    },
    // 点击按钮
    handleIcons(router) {
      console.log('router', router)
      this.$router.push(router)
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  background: red;
  width: 375px;
}
.icons-warp {
  border-radius: 25px;
  .float-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 3px;
    }
    span {
      font-size: 9px;
      color: #666666;
    }
  }
}
</style>
