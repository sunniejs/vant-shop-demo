<template>
  <div>
    <van-popup v-model="visible"  @close="close" :close-on-click-overlay="false" position="center" class="poster-popup">
       <div class="canvas-close" @click="close"></div>
      <!-- 单张图片生成海报图 -->
      <div class="poster-inner">
        <img :src="src" alt="" class="share-image" />
      </div>
    </van-popup>
    <!-- canvas -->
    <vueCanvasPoster class="poster" :painting="template" @success="success" @fail="fail" />
  </div>
</template>
<script>
// 引入 npm 包
import {vueCanvasPoster} from 'vue-canvas-poster'
// 统一管理生成json模板
import drawCanvas from '@/utils/drawer'
import {equal} from '@/utils'
export default {
  name: 'PosterPopup',
  components: {
    vueCanvasPoster
  },
  props: {
    info: {
      type: Object,
      value: {}
    },
    visible: {
      type: Boolean,
      value: false
    }
  },

  watch: {
    info: {
      handler: 'handleRender',
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      src: '',
      template: {},
      drawing: false, // 加锁
      commonInfo: {
        // common info
        name: 'sunnie',
        nickname: '花花'
      }
    }
  },
  deactivated() {
    this.drawing = false
    this.src = ''
  },
  methods: {
    // 重新渲染
    handleRender(newVal, oldVal) {
      // type必传
      if (newVal.type && !equal(newVal, oldVal)) {
        this.paintStart(newVal)
      }
    },
    // 调用对应模板
    paintStart() {
      if (this.drawing) return false
      this.drawing = true
      // 合并一些公共参数
      const params = Object.assign({}, this.info, this.commonInfo)
      this.template = drawCanvas(params)
    },
    // 关闭弹窗
    close() {
      this.drawing = false
      this.$emit('close')
    },
    // 保存
    success(src) {
      this.drawing = false
      this.src = src
    },
    // 失败
    fail() {
      this.drawing = false
      this.$toast({
        message: '生成图片失败，请稍后重试',
        duration: 3000
      })
      this.close()
    }
  }
}
</script>
<style lang="scss" scoped>
.poster-popup {
  background: none;
  padding: 50px 0;
  .poster-inner {
    overflow: hidden;
    height: auto;
    position: relative;

    .share-image {
      width: 275px;
      height: auto;
    }
  }

  .canvas-close {
    &.swiper-close {
      right: 50px;
    }
    position: absolute;
    right: 0px;
    top: 6px;
    width: 30px;
    height: 30px;
    background: url('../../assets/images/s-canvas-close.png') no-repeat center center;
    background-size: contain;
  }
}
</style>
