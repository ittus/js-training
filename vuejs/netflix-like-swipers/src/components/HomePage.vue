<template>
    <swiper :options="swiperOptions">
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg" title="Avengers : Infinity War" description="Thanos is around" duration="2hrs"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg" title="Thor : Ragnarok" description="Thor lost his hair" duration="2hrs30mins"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg" title="Black Panther" description="Wakanda Forever" duration="2hrs15mins"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg " title="Avengers : Infinity War" description="Thanos is around" duration="2hrs"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg" title="Thor : Ragnarok" description="Thor lost his hair" duration="2hrs30mins"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg" title="Black Panther" description="Wakanda Forever" duration="2hrs15mins"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg " title="Avengers : Infinity War" description="Thanos is around" duration="2hrs"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg" title="Thor : Ragnarok" description="Thor lost his hair" duration="2hrs30mins"/>
        </swiper-slide>
        <swiper-slide>
          <Movie image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg" title="Black Panther" description="Wakanda Forever" duration="2hrs15mins"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import Movie from './Movie'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HomePage',
  components: {
    Movie,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions : {
        slidesPerView: 5,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.swiper-container {
  height : 450px;
  width : 100%;
}
</style>
