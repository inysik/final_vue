<template>
    <div class="center">
        <div class="conteiner_text">
    <h2 class="heading_title">Minimal Look Bedrooms</h2>
    <p class="Latest_Post_content_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
    <p class="Latest_Post_content_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
    </div>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="false"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(file, index) in swiperFiles" :key="index">
        <div class="swiper-zoom-container">
          <img :src="file" />
        </div>
      </swiper-slide>
    </swiper>
</div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Zoom, Navigation, Pagination } from 'swiper/modules';
  import { useStore } from 'vuex';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const store = useStore();
      
      return {
        modules: [Zoom, Navigation, Pagination],
        swiperFiles: store.getters.getSwiperFiles,
      };
    },
  };



  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import './style.css';


 
  
</script>  
<style>
* {
    box-sizing: border-box;
  }
.conteiner_text{
    padding-bottom: 100px;
    width: 658px;
    margin: 0 auto;
    text-align: start;

}
.center{
    margin: 0 auto;
    width: 1200px;

}
.heading_title{
    line-height: 52px;
    font-size: 50px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
}
.Latest_Post_content_text {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1%; 
}

</style>