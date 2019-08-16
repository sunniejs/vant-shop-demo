<!-- home -->
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <float-icons padding="20 20 20 20">
      icons
    </float-icons>
  </div>
</template>

<script>
import { List, Cell } from 'vant'
import FloatIcons from '@/components/s-icons'
export default {
  components: {
    'van-list': List,
    'van-cell': Cell,
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
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>
<style lang='scss' scoped>
h1 {
  background: red;
  width: 375px;
}
</style>
