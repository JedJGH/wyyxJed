<template>
   <div class="goodsList">
     <ul v-if="homeData.kingKongModule">
       <li v-for="(good,index) in homeData.kingKongModule.kingKongList" :key="index">
         <a href="javascript:">
           <img  :src="good.picUrl" :alt="good.picUrl">
           <p>{{good.text}}</p>
         </a>
       </li>
     </ul>
   </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: "GoodsList",
  
    // 异步去触发action
    async mounted() {
      // 触发 action 调用，进行 发送请求 ；
      await this.$store.dispatch('GetHomedatas')
    },
  
    // 读取 数据 到 组件 页面
    computed:{
      ...
        mapState({
          homeData: state => state.home.homeData
        })
    }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  @import '../../../../common/stylus/mixins.styl'
  
 .goodsList
   ul
     display flex
     flex-wrap wrap
     margin-bottom 40px
    li
      width 110px
      height 156px
      /*background-color green*/
      margin 10px  20px  0
      a
       width 100%
       height 100%
       display flex
       flex-direction column
       justify-content center
       align-items center
       img
         width 110px
         height 110px
       p
         font-size 24px
         line-height 36px
         color #333
  
</style>
