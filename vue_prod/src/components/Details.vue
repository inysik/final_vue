
<template>
    <div class=" colunns center">
        <div class="project_card">
        <div v-for="product in products" :key="product.id">
      
        <img :src="product.image" alt=""></img>
      <div class="project_content">
        <div class="sub_content">
      <h2 class="heading_title">  {{ product.title }} </h2>
     <p  class="project_card_text">  {{ product.decor }}</p>
        </div>
     <button class="project_card-button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
            viewBox="0 0 10 20" fill="none">
            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg> </button></div>
     
      </div></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      products: Array,
    },
  }
  </script>
  <style>
  .colunns{
    column-count: 2;
    column-gap: 10px;
  }
  .project_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

        padding: 10px;
      
  }
 
  .project_card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .heading_title {
    line-height: 52px;
    font-size: 25px;
    margin-bottom: 0px;
  }
  .project_card_text {
    font-size: 22px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 33px;
  }
  .project_card-button {
    background-color: #F4F0EC;
    border: #F4F0EC;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  body {
    padding: 0;
  }
  
  .center {
    margin: 0 auto;
    width: 1200px;
  }


</style>
  