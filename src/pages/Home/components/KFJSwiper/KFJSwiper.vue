<template>
	<div class="top_swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,index) in imgNodes" :key="index">
          <img :src="i" alt="img">
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
  import "../../../../common/swiper/swiper.css"
  import Swiper from "swiper"
  export default {
    name: "KFJSwiper",
    data () {
      return {
        imgNodes: ['https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted() {
      new Swiper('.top_swiper .swiper-container', {
        autoplay: true,    //可选选项，自动滑动
        loop: true, // 循环 ；
        pagination: { // 分页器 ；
          el: '.top_swiper .swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .top_swiper
    margin-top 130px
    width 100%
    height 400px
    .swiper-slide
      height 400px
      width 100%


</style>
