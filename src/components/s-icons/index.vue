<template>
  <div ref="icons" class="icons-container" :style="{left: left + 'px', top: top + 'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FloatIcons',
  props: {
    // 滚动id
    scroller: {
      type: String,
      default: ''
    },
    // 距离上有下左的安全距离
    padding: {
      type: String,
      default: '10 10 10 10'
    },
    // 初始位置距离底部的距离
    bottom: {
      type: Number,
      default: 160
    }
  },
  data() {
    return {
      timer: null,
      currentTop: 0,
      clientWidth: 0,
      clientHeight: 0,
      itemWidth: 0,
      itemHeight: 0,
      left: null,
      top: null
    }
  },
  computed: {
    // 滚动对象，默认空返回window
    scrollContainer() {
      if (this.scroller === '') {
        return window
      } else {
        return document.getElementById(this.scroller)
      }
    },
    // 安全距离
    safeArea() {
      return this.padding.split(' ')
    }
  },
  created() {
    // 屏幕宽度
    this.clientWidth = document.documentElement.clientWidth
    // 屏幕高度
    this.clientHeight = document.documentElement.clientHeight
  },
  mounted() {
    this.$nextTick(() => {
      // 获取滚动元素
      this.scrollContainer.addEventListener('scroll', this.handleScrollStart)
      const div = this.$refs.icons
      // 获取宽度
      this.itemWidth = this.$refs.icons.offsetWidth
      this.itemHeight = this.$refs.icons.offsetHeight
      // 设置位置
      this.left = this.clientWidth - this.itemWidth - this.safeArea[1]
      this.top = this.clientHeight - this.itemWidth - this.bottom
      div.addEventListener('touchstart', e => {
        div.style.transition = 'none'
      })
      div.addEventListener('touchmove', e => {
        // 阻止默认动作
        e.preventDefault()
        if (e.targetTouches.length === 1) {
          const touch = event.targetTouches[0]
          this.left = touch.clientX - this.itemWidth / 2
          this.top = touch.clientY - this.itemHeight / 2
        }
      })
      div.addEventListener('touchend', e => {
        div.style.transition = 'all 0.3s'
        // 手指放开left位置
        if (this.left > this.clientWidth / 2) {
          this.left = this.clientWidth - this.itemWidth - this.safeArea[1]
        } else {
          this.left = this.safeArea[3]
        }
        // 手指放开top位置
        if (this.top < this.safeArea[0]) {
          this.top = this.safeArea[0]
        } else if (this.top > this.clientHeight - this.itemHeight - this.safeArea[2]) {
          // 不低于最低
          this.top = this.clientHeight - this.itemHeight - this.safeArea[2]
        }
      })
    })
  },
  beforeDestroy() {
    this.scrollContainer.removeEventListener('scroll', this.handleScrollStart)
  },
  methods: {
    // 滚动时候执行
    handleScrollStart() {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.handleScrollEnd()
      }, 300)
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.left > this.clientWidth / 2) {
        this.left = this.clientWidth - this.itemWidth / 2
      } else {
        this.left = -this.itemWidth / 2
      }
    },
    handleScrollEnd() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === this.currentTop) {
        if (this.left > this.clientWidth / 2) {
          this.left = this.clientWidth - this.itemWidth - this.safeArea[1]
        } else {
          this.left = this.safeArea[3]
        }
        clearTimeout(this.timer)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;

  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 10px 0px rgba(198, 198, 198, 0.5);
  // border-radius: 50%;
  z-index: 1000;
  transition: all 0.3s;
}
</style>
