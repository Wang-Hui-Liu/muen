<template>

      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                  <img :src='item.img' alt="">
              </div>
          </div>
      </div>
</template>

<script>
export default {
    props:{
        imgUrl:Array
    }
}
</script>

<style scoped lang="scss">
     .swiper-container{
         height: 200px;
         width: 100%;
         .swiper-wrapper,.swiper-slide,img{
             width: 100%;
             height: 100%;
         }
     }
</style>