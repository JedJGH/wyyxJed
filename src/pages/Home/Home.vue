<template>
	<div>
    <Header/>
    <div class="wrapper">
      <div class="content">
        <KJFSwiper/>
        <ServicePolicy/>
        <GoodsList/>
        <NewerGift/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Header from '../../components/Header/Header'
  import KJFSwiper from './components/KFJSwiper/KFJSwiper'
  import ServicePolicy from './components/ServicePolicy/ServicePolicy'
  import GoodsList from './components/GoodsList/GoodsList'
  import NewerGift from './components/NewerGift/NewerGift'


  export default {
    name: "Home",
    components:{
      Header,
      KJFSwiper,
      ServicePolicy,
      GoodsList,
      NewerGift
    },
    async mounted() {
      // 触发 action 调用，进行 发送请求 ；
      await this.$store.dispatch('GetHomedatas')
    },
    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      })
    },
    watch:{
       homeData(){  //homeData 数据更新了
         this.$nextTick(() => {
            new BScroll('.wrapper',{
              click: true,
              scrollY: true
            })
         })
       }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrapper
  width 750px
  height 1406px
  .content
    width 100%
    height 3000px

</style>
