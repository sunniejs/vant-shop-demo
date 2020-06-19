<!-- icons -->
<template>
  <div>
    <div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="brand-item" v-for="(item, index) in list" :key="index" @click="goList">
          <img src="../../assets/images/brand.jpg" alt="" />
          <div class="brand-info">{{ index + 1 }} 无印良品家居四件套专场</div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  computed: {},

  mounted() {},

  methods: {
    // 去列表页
    goList() {
      this.$router.push({ name: 'List' })
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
.brand-item {
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  img {
    width: 100%;
    height: 130px;
    background: #ddd;
    position: relative;
  }
  .brand-info {
    padding: 0 10px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
