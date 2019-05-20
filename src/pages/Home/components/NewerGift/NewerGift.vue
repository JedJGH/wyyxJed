<template>
	  <div class="container">
       <div class="top"><span>新人专享礼</span></div>
       <div class="bottom">
         <a href="javascript:;" class="left"></a>
         <div class="right">
            <div></div>
            <div></div>
         </div>
       </div>
    </div>
</template>

<script>
  export default {
    name: "NewerGift"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .container
     width 750px
     height 557.97px
     background-color yellow
     .top
      width  100%
      height 90px
      background-color red
      span
       display inline-block
       text-align center
       font-size 30px
      .bottom
        width  100%
        height 438px
        background-color blue
        .left
           width 343px
           height 434px
           background-color pink
        .right
          width  343px
          height 438px
          background-color green
       
      
</style>
