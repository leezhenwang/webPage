<template>
  <ul class="blogIndex-sort">
    <li class="sort-item">js</li>
    <li class="sort-item">html</li>
    <li class="sort-item">css</li>
    <li class="sort-item">vue</li>
    <li class="sort-item">react</li>
    <li class="sort-item">node</li>
    <li class="sort-item" @click="goGameList">game</li>
  </ul>
</template>

<script>
  export default{
    name: 'blogIndex',
    data () {
      return {
        
      }
    },
    components:{
      
    },
    computed: {
      
    },
    created () {
      
    },
    mounted(){
      
    },
    methods: {
      goGameList(){
        this.$router.push({
          name: 'gameList',
        })
      },
    }
  }
</script>
<style lang='scss'>
  @import '../../assets/sass/blog/blogIndex.scss'; 
</style>