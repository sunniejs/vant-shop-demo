## vant-shop-demo

vue 开发手机端悬浮按钮实现，可以拖拽，滚动的时候收到里边，不影响视线
[github 地址][1]
使用，基于 vue-cli3.0+webpack 4+vant ui + sass+ rem 适配方案+axios 封装，构建手机端模板脚手架[vue-h5-template][2]
后续将发布各种商城组件组件，让商城简单高效开发
![iterm](static/2.gif)

## 线上体验

![iterm](static/demo.png)

## 参数

| 字段名  | 类型   | 默认值        | 描述                                                                     |
| ------- | ------ | ------------- | ------------------------------------------------------------------------ |
| padding | String | '10 10 10 10' | 悬浮按钮可拖拽的安全范围，与 css padding 传参一致                        |
| scoller | String | ''            | 监听页面滚动容器 id,不传时候监听 window （解决滚动时悬浮框按钮不收进去） |

## 注意

如果滚滚动的时候收到里边，需要穿 scoller 参数
比如：
你的滚动列表外层 div 设置 id

```html
<div id="loadmore">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in list" :key="item" :title="`我是你的小仙女，爱你第${item}遍`" />
  </van-list>
</div>
```

组件传参 scoller="loadmore"

```html
<float-icons **scoller="loadmore" ** padding="10 10 60 10" class="icons-warp"></float-icons>
```

因为你可能使用组件导致监听的滚动元素是 window，所以你需要将你的滚动容器的 id 传进我的组件

## 问题反馈

有什么问题可以提 issue 或扫描微信二维码跟我联系，项目持续优化，加群获取最新更新消息

[提 issue](https://github.com/sunnie1992/vant-shop-demo/issues/new)

## 关于我

您可以扫描添加下方的微信并备注 Soul 加交流群，给我提意见，交流学习。

<p>
  <img src="https://tweapp.top1buyer.com/mine.jpg" width="256" style="display:inline;">
</p>
 
如果对你有帮助送我一颗小星星（づ￣3￣）づ╭❤～
