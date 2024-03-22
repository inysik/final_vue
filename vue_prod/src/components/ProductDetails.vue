<template>
    <div>
      <!-- <ArrProduct v-for="product in products" :key="product.id" :product="product" /> -->
      <ArrProduct  v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import ArrProduct from './ArrProduct.vue';
  
  export default {
    data() {

      return {
        // emits:[],
        products: [
          {
            id: 1,
            name: "lol",
            prise: 123,
            inStock: true,
          },
          {
            id: 2,
            name: "lkek",
            prise: 123,
            inStock: true,
          },
          {
            id: 3,
            name: "xtr",
            prise: 123,
            inStock: true,
          }
        ]
      };
    },
    components: {
      ArrProduct,
    }
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  