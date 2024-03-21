<template>
    <div  class="blog_det_banner">
      <img :src="imageUrl"  style="width:100%;"></img>
    </div>
  </template>
  
  <script>
  import img from '@/assets/img/Banner_blog_details.jpg'
  export default {
    data() {
      return {
        imageUrl: img, 
      };
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  