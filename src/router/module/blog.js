const blogIndex = () => import('../../pages/blog/blogIndex.vue');
export default [{
    path: '/',
    name: 'blogIndex',
    components: {
        default: blogIndex
    },
    meta: {
        title: '博客首页',
    } 
},{
    path: '/blogIndex',
    name: 'blogIndex',
    components: {
        default: blogIndex
    },
    meta: {
        title: '博客首页',
    } 
}]