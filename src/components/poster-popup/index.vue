<template>
  <div>
    <van-popup v-model="visible" @close="close" :close-on-click-overlay="false" position="center" class="poster-popup">
      <div :class="['canvas-close', swiper ? 'swiper-close' : '']" @click="close"></div>
      <!-- 多张生成海报图 -->
      <van-swipe
        v-if="swiper"
        :width="swiperWidth"
        :initial-swipe="0"
        :show-indicators="false"
        class="poster-swipe"
        :autoplay="0"
        @change="swiperChange"
      >
        <van-swipe-item v-for="(item, index) in canvasPosterList" :key="index">
          <img class="share-image" :class="{active: index === current}" :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- 单张图片生成海报图 -->
      <div v-else class="poster-inner">
        <img v-if="!drawing" :src="src" alt="" class="share-image" />
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
import {equal, validDataUrl} from '@/utils'
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
  computed: {
    swiperWidth() {
      return (document.body.clientWidth / 375) * 305
    },
    // 多图
    swiper() {
      return this.info.shareImgs && this.info.shareImgs.length > 0
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
      },
      params: {},
      current: 0,
      canvasPosterList: [], // 海报数组，不能使用shareData污染之后会重新渲染
      same: false
    }
  },
  deactivated() {
    this.drawing = false
    this.src = ''
    this.canvasPosterList = []
  },
  methods: {
    // 重新渲染
    handleRender(newVal, oldVal) {
      // type必传
      if (newVal.type && !equal(newVal, oldVal)) {
        this.paintStart(newVal)
      }
    },
    // 开始
    paintStart() {
      const {shareImgs} = this.info
      // 合并一些公共参数
      this.params = Object.assign({}, this.info, this.commonInfo)
      // 多张图片分享
      if (this.swiper) {
        if (!shareImgs || shareImgs.length <= 1) {
          throw new Error('shareImgs 不存在或数量不符合')
        }
        // 重置index
        this.current = 0
        // 生成空数组
        this.canvasPosterList = new Array(shareImgs.length)
        // 多图
        this.drawSwiperCanvas()
      } else {
        if (this.drawing) return false
        this.drawing = true
        this.$toast({
          type: 'loading',
          forbidClick: true
        })
        this.template = drawCanvas(this.params)
      }
    },
    // 多张图
    drawSwiperCanvas() {
      const currentImg = this.canvasPosterList[this.current]
      //base64为生成过的图片， 不是base64图片再生成
      if (!validDataUrl(currentImg)) {
        if (this.drawing) return false
        this.drawing = true
        this.$toast({
          type: 'loading',
          forbidClick: true
        })
        const params = Object.assign({}, this.params, {current: this.current})
        this.template = drawCanvas(params)
      }
    },
    // 滑动分享图
    swiperChange(index) {
      this.current = index
      this.drawSwiperCanvas()
    },
    // 关闭弹窗
    close() {
      this.drawing = false
      this.$emit('close')
    },
    // 保存
    success(src) {
      this.drawing = false
      this.$toast.clear()
      // 多图
      if (this.swiper) {
        this.$set(this.canvasPosterList, this.current, src)
      } else {
        this.src = src
      }
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
  .poster-swipe {
    width: 375px;
    height: 400px;
    padding-left: 50px;
    box-sizing: border-box;
    .van-swipe-item {
      width: 275px;
      display: flex;
      align-items: center;
      .share-image {
        min-height: 350px;
        background: #fff;
        &.active {
          width: 275px !important;
        }
        border-radius: 10px;
        width: 240px;
        height: auto;
      }
    }
  }
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
