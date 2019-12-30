<template>
  <ul class="game-sort">
    <li class="sort-item" @click="goEluosifangkuai">俄罗斯方块</li>
  </ul>
</template>

<script>
  export default{
    name: 'gameList',
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
      goEluosifangkuai(){
        this.$router.push({
          name: 'goEluosifangkuai',
        })
      },
    }
  }
</script>
<style lang='scss'>
  @import '../../../assets/sass/game/gameList.scss';
</style>