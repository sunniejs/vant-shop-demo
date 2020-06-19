// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Popup, Toast, Swipe, SwipeItem, Loading } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Loading)
