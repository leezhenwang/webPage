const gameList = () => import('../../pages/game/gameList/gameList.vue');
export default [{
  path: '/gameList',
  name: 'gameList',
  components: {
    default: gameList
  },
  meta: {
    title: '游戏列表',
  } 
},{
  path: '/Eluosifangkuai',
  name: 'Eluosifangkuai',
  components: {
    default: Eluosifangkuai
  },
  meta: {
    title: '俄罗斯方块',
  } 
}]