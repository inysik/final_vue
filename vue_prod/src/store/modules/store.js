import { createStore } from 'vuex';

import nature1 from '@/assets/img/slide_1.jpg';
import nature2 from '@/assets/img/slide_2.webp';
import nature3 from '@/assets/img/slide_3.webp';
import nature4 from '@/assets/img/slide_4.webp';
export default createStore({
  state: {
    swiperFiles: [
      
      
      nature1,
     nature2,
     nature3,
     nature4,
      // Добавьте здесь остальные файлы для Swiper
    ],
  },
  mutations: {
  
  },
  actions: {
   
  },
  getters: {
    getSwiperFiles: (state) => state.swiperFiles,
  },
});
