<template>
  <div id="app">
    <keep-alive :include="arr">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      arr: ['Index', 'List']
    }
  },
  watch: {
    // 监听router
    $route: function(to, from) {
      if (from.meta.keepAlive) {
        this.arr.includes(from.name) || this.arr.push(from.name)
      } else {
        var name = from.name
        if (this.arr.includes(name)) {
          var index = this.arr.findIndex(function(item) {
            return item === name
          })
          this.arr.splice(index, 1)
        }
      }
      if (to) {
        switch (to.name) {
          // 需要缓存的页面
          case 'Index':
          case 'List':
            this.arr.includes(to.name) || this.arr.push(to.name)
            break
          default:
            break
        }
      }
      console.log(`从${from.name}去${to.name},缓存页面有： ${this.arr}`)
    }
  }
}
</script>
