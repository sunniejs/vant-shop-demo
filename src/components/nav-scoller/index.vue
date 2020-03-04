<template>
  <div class="label-nav" ref="tab-containter">
    <div class="label-scoll" id="nav" ref="nav">
      <ul class="label-wrapper" ref="tab-wrapper">
        <li
          class="label-item"
          v-for="(item, index) in list"
          ref="tabitem"
          :key="index"
          @click="checkStatus(index)"
          :class="{active: index == checkIndex}"
        >
          <div class="inner">{{ item.barName }}</div>
        </li>
      </ul>
    </div>
    <i class="more-bot" @click="() => (flag = !flag)"></i>
    <div class="drop-nav-list" v-if="flag">
      <div class="drop-title">
        <span class="status">请选择类目</span>
        <i class="more-top" @click="() => (flag = !flag)"></i>
      </div>
      <div class="nav-list-content">
        <span
          class="nav-item"
          v-for="(item, index) in list"
          :key="index"
          @click="checkStatus(index, true)"
          :class="{active: index == checkIndex}"
          >{{ item.barName }}</span
        >
      </div>
    </div>
    <div class="pop-mask" v-if="flag" @click="() => (flag = false)"></div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'NavScoller',
  props: {
    list: Array
  },
  data() {
    return {
      flag: false,
      checkIndex: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 横向滚动宽度
      let width = 0
      for (let i = 0; i < this.list.length; i++) {
        width += this.$refs.tabitem[i].getBoundingClientRect().width
        // getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      }
      this.$refs['tab-wrapper'].style.width = width + 'px'
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.nav, {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    checkStatus(index, pop) {
      this.checkIndex = index
      // 点击展开面板的选项
      if (pop) {
        this.flag = !this.flag
      }
      // tab回滚
      this.scroll.scrollToElement(this.$refs.tabitem[index], 300, -100)
      this.$emit('change', {index: index, item: this.list[index]})
    }
  }
}
</script>
<style lang="scss">
.label-nav {
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  right: 0;
  .drop-nav-list {
    background: #fff;
    padding: 0px 15px 20px 15px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
    .drop-title {
      height: 45px;
      line-height: 45px;
      font-size: 13px;
      font-weight: 600;
      .more-top {
        right: 0;
        top: 0;
        width: 33px;
        height: 45px;
        position: absolute;
        z-index: 1500;
        background: #fff;
        right: 0;
      }
      .more-top::after {
        border: solid 2px #000;
        border-bottom-width: 0;
        border-left-width: 0;
        content: ' ';
        top: 60%;
        right: 10px;
        position: absolute;
        width: 10px;
        height: 10px;
        -webkit-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(-45deg);
      }
    }
    .nav-list-content {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .nav-item {
        box-sizing: border-box;
        display: inline-block;
        width: 31%;
        margin: 1.6%;
        height: 30px;
        line-height: 30px;
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        text {
          color: #150099;
        }
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        &:nth-of-type(3n + 1) {
          margin-left: 0;
        }
      }
      .active {
        color: #eb0e0e;
        border: 1px solid #eb0e0e;
        text {
          color: #eb0e0e;
        }
      }
    }
  }
  .more-bot {
    right: 0;
    top: 0;
    width: 33px;
    height: 44px;
    position: absolute;
    z-index: 1;
    background: #ffffff;
    box-shadow: -7px 0px 7px -7px rgba(198, 198, 198, 1);
  }
  .more-bot::after {
    border: solid 2px #444;
    border-bottom-width: 0;
    border-left-width: 0;
    content: ' ';
    top: 50%;
    right: 10px;
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(135deg);
  }
  .label-scoll {
    background: #fff;
    width: 375px;
    box-sizing: border-box;
    padding-right: 40px;
    height: 45px;
    overflow: hidden;
    color: #444444;
    border-bottom: 1px solid #e9e9e9;
    .label-wrapper {
      .label-item {
        display: inline-block;
        box-sizing: border-box;
        padding: 0 8px;
        min-width: 50px;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        text-align: center;
        &:last-child {
          padding-right: 50px;
        }
      }
    }

    .active {
      color: #eb0e0e;
      .inner {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          background: #eb0e0e;
          display: block;
          left: 50%;
          top: 35px;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          transform: translateX(-50%);
        }
      }
      .num {
        color: #eb0e0e;
        border: 1rpx solid #eb0e0e;
      }
    }
  }
  .pop-mask {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
