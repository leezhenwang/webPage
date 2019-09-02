const videoList = () => import('../../pages/video/videoList.vue');
export default [
  {
    path: '/videoList',
    name: 'videoList',
    components: {
        default: videoList
    },
    meta: {
        title: '视频播放页',
    }
  },
]