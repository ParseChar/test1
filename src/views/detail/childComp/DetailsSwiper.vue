<template>

      <swiper class="detail-swiper">
        <swiper-item class="swiper-item" v-for="(item, index) in topImages" :key="index">
          <img v-lazy="item" alt="">
        </swiper-item>
      </swiper>

</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "DetailsSwiper",
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
.swiper-item{
  height: 300px;
}
</style>
