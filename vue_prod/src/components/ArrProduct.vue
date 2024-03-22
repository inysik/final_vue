<template>
    <div>
      <h2>name product: {{ product.name }}</h2>
      <p>price product rub {{ product.prise }}</p>
      <p>in stock: {{ product.inStock }}</p>
      <button @click="transverDollars"> перевести в доллар </button>
      <div v-if = isShow>
        <p>$ {{ product.prise*99 }}</p>
      </div>    
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
  },
  data(){
    return{
        isShow:false,
    }
  },
  methods: {
    transverDollars(){
        this.isShow = !this.isShow

    }
  },
}
  </script>
  
  <style lang="scss" scoped>
  .title {
    color: red;
  }
  </style>
  