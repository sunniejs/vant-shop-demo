import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/example/icons',
    name: 'Icons',
    component: () => import('@/views/example/icons'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/example/navbar',
    name: 'Navbar',
    component: () => import('@/views/example/navbar'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/example/poster',
    name: 'Poster',
    component: () => import('@/views/example/poster'),
    meta: {
      title: '海报图',
      keepAlive: false
    }
  },
  {
    path: '/keepalive/index',
    name: 'Index',
    component: () => import('@/views/keepalive/index'),
    meta: {
      title: '首页',
      keepAlive: true
    }
  },
  {
    path: '/keepalive/list',
    name: 'List',
    component: () => import('@/views/keepalive/list'),
    meta: {
      title: '商品列表页',
      keepAlive: true
    }
  },
  {
    path: '/keepalive/detail',
    name: 'Detail',
    component: () => import('@/views/keepalive/detail'),
    meta: {
      title: '商品详情页',
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
  })

export default createRouter()
