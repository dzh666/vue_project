<template>
    <div class='banner'>
     <div class="swiper-container swiper_find" ref="swiper_banner">
        <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(val,ind) in this.swiperList" :key='ind'><img :src="'/src/assets/musicImg/'+val" alt=""></div>
    </div>
    </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'
export default {
  name: '',
  props:['swiperList'],
  data () {
    return {
      
    }
  },
  updated(){
      var mySwiper = new Swiper(this.$refs.swiper_banner, {
        autoplay:true,
        loop:true
      })
    },
}
</script>

<style>
 
</style>
