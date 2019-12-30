import Vue from 'vue'
import Router from 'vue-router'
//博客模块
import blog from './module/blog'
// 游戏模块
import game from './module/game'

Vue.use(Router)

export default new Router({
  routes: [
    // ...home,
    // ...video,
    ...blog,
    ...game,
  ]
})
