<template>
    <div class=" flexx center">
        <button @click="showProducts(1)">Bathroom</button>
        <button @click="showProducts(2)">Bed Room2</button>
        <button @click="showProducts(3)">Kitchan</button>
        <button @click="showProducts(4)">Living Area</button>
        
        <Details :products="selectedProducts" />
      </div>
</template>

<script>
import Details from './Details.vue';
    export default {
    data() {
        return {
            
            selectedProducts: [],
      productsSet1: [
        {
          id: 1,
          image: require('@/assets/img/Images_1.png'),
          title: 'Minimal Bedroom',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 2,
          image: require('@/assets/img/Images_2.png'),
          title:'Minimal Bedroom',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 3,
          image: require('@/assets/img/Images_3.png'),
          title: 'Classic Minimal Bedroom',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 4,
          image: require('@/assets/img/Images_4.png'),
          title: 'Classic Minimal Bedroom',
          decor: 'Decor / Artchitecture',
        },
      ],
      productsSet2: [
        {
          id: 1,
          image: require('@/assets/img/Images_5.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 1,
          image: require('@/assets/img/Images_5.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
        
        
      ],
      productsSet3: [
        {
          id: 1,
          image: require('@/assets/img/Images_6.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 2,
          image: require('@/assets/img/Images_7.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
        // Add more products for set 3
      ],
      productsSet4: [
        {
          id: 1,
          image: require('@/assets/img/Images_8.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
        {
          id: 1,
          image: require('@/assets/img/Images_8.png'),
          title: 'Minimal Bedroom table',
          decor: 'Decor / Artchitecture',
        },
      ]
        }

    },
    components:{
        Details,
    },
    methods: {
    showProducts(set) {
      if (set === 1) {
        this.selectedProducts = this.productsSet1;
      } else if (set === 2) {
        this.selectedProducts = this.productsSet2;
      } else if (set === 3) {
        this.selectedProducts = this.productsSet3;
      }else if (set === 4) {
        this.selectedProducts = this.productsSet4;
      }
    }}}
</script>

<style lang="scss" scoped>
.center {
    margin: 0 auto;
    width: 1200px;
  }
  

button {
    color: black; /* Черный цвет текста */
    background-color: white; /* Белый цвет фона */
    border: none; /* Убираем границу */
    padding: 26px 66px 26px 66px; /* Задаем отступы */
    cursor: pointer; /* Делаем курсор указателем */
    width: max-content; /* Ширина кнопки равна ширине содержимого */
    white-space: nowrap;
    margin: 30px;
    font-size: 18px;
  }
  
  button:hover {
    background-color: #CDA274; /* Коричневый цвет фона при наведении */
    color: white; /* Белый цвет текста при наведении */
border-radius: 18px;  
}
  

</style>