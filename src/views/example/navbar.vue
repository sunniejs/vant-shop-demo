<!-- demo -->
<template>
  <div>
    <nav-scoller v-if="navList.length > 0" :list="navList" @change="navChange"></nav-scoller>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>
<script>
import NavScoller from '@/components/nav-scoller'
export default {
  components: {
    'nav-scoller': NavScoller
  },
  data() {
    return {
      navList: [
        {num: 20, barName: '全部', id: '097b0651ca000031b193e2bca6be792d'},
        {num: 7, barName: '爆款', id: '905cf8edf1dd45fcb821eeaba6485b07'},
        {num: 3, barName: '预告', id: '087b0651ca000031b193e2bca6be792d'},
        {num: 1, barName: '数码家电', id: 'c559a4fa5a174771867205af397d6414'},
        {num: 1, barName: '运动', id: 'a08476468ef144a99a4c7228c8909bb6'},
        {num: 2, barName: '大牌运动惠', id: 'ff1067b74999458c85ae234f046f06a7'},
        {num: 1, barName: '自营', id: 'da6aea26551a476dbbc0511182ef6b45'},
        {num: 4, barName: '日化品', id: '00bb0651caab4731b193e2bca6be792d'}
      ],
      content: ''
    }
  },

  computed: {},
  mounted() {},
  methods: {
    // 切换导航
    navChange(data) {
      const {index, item} = data
      console.log('index', index)
      console.log('item', item)
      this.content = item.barName
    }
  }
}
</script>
<style lang="scss" scoped>
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
.content {
  padding-top: 50px;
}
</style>
