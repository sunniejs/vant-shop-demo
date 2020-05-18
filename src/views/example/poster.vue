<template>
  <div>
    <div class="app-container">
      <div class="title">vue-canvas-poster</div>
      <div class="tips">
        分享专场海报图
      </div>
      <div class="btn-group">
        <van-button type="primary" size="small" @click="doShareActivity">点我生成海报</van-button>
      </div>
      <div class="tips">
        分享商品海报图
      </div>
      <div class="btn-group">
        <van-button type="primary" size="small" @click="doShareGoods">点我生成海报</van-button>
      </div>
      <div class="tips">
        生成多张海报图
      </div>
      <div class="btn-group">
        <van-button type="primary" size="small" @click="doShareSwiper">点我生成海报</van-button>
      </div>
    </div>
    <!-- 海报图弹窗 -->
    <poster-popup :info="shareData" :visible="posterVisible" @close="closePoster"></poster-popup>
  </div>
</template>

<script>
import PosterPopup from '@/components/poster-popup'
export default {
  name: 'Poster',
  components: {
    'poster-popup': PosterPopup
  },
  data() {
    return {
      shareData: {},
      posterVisible: false,
      swiper: false
    }
  },
  methods: {
    // 分享专场海报图
    doShareActivity() {
      this.shareData = {
        type: 'activity', // 模板类型
        shareTitle: '无印良品精选',
        specialLogo: require('../../assets/images/avatar.jpg'),
        specialDate: '03/04-03/08',
        shareImg: require('../../assets/images/special_img.jpg'),
        qrcode: 'https://github.com/sunniejs/vue_canvas_poster'
      }
      this.posterVisible = true
    },
    doShareGoods() {
      this.shareData = {
        type: 'goods',
        specialLogo: require('../../assets/images/avatar.jpg'),
        goodsImg: require('../../assets/images/avatar.jpg'),
        goodsName: '玫瑰金',
        goodsMoney: '18000.00',
        goodsPrice: '19999.00',
        qrcode: 'https://github.com/sunniejs/vue_canvas_poster'
      }
      this.posterVisible = true
    },
    // 生成多张海报图
    doShareSwiper() {
      // 多张  shareImgs 多图通过 shareImgs设置
      this.shareData = {
        type: 'swiper',
        shareImgs: [
          {
            shareImg: require('../../assets/images/share/s-home-share-0.png'),
            title: '花花'
          },
          {
            shareImg: require('../../assets/images/share/s-home-share-1.png'),
            title: '小仙女'
          },
          {
            shareImg: require('../../assets/images/share/s-home-share-2.png'),
            title: '花花小仙女'
          }
        ],
        qrcode: 'https://github.com/sunniejs/vue_canvas_poster'
      }
      this.posterVisible = true
    },
    // 分享
    closePoster() {
      this.posterVisible = false
    }
  }
}
</script>

<style>
/* src/pages/xml2can/xml2can.wxss */

.app-container {
  padding: 25px 15px;
  text-align: center;
}
.title {
  width: 100%;
  font-size: 20px;
  text-align: left;
}
.btn-group {
  margin-top: 15px;
}
.tips {
  width: 100%;
  font-size: 14px;
  color: #999999;
  margin-top: 50px;
}
</style>
