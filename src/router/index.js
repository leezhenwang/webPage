import Vue from 'vue'
import Router from 'vue-router'
// 首页模块
import home from './module/home';
// 视频模块
import video from './module/video'
//博客模块
import blog from './module/blog'

Vue.use(Router)

export default new Router({
  routes: [
    // ...home,
    // ...video,
    ...blog,
  ]
})
