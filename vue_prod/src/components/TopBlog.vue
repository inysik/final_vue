<template>
    <div class="top">
        <img :src="images" alt=""  style=" display: block;
        max-width: 100%;
        height: auto;">
        <div class="top_content center">
            <h2 class="top_title">Articles & News</h2>
            <p class="top_text">Home / Blog</p>
        </div>
    </div>
</template>

<script>
import Image_blog_top from "@/assets/img/Images_bugroundcolor_blog.jpg";
    export default {
        data() {
            return {
                images:Image_blog_top,
            }
        },
        
    }
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
  }
.center {
    margin: 0 auto;
    width: 1200px;
  }
.top {
    background: #FFFFFF;
  }
  .top_title {
    font-size: 50px;
    line-height: 62.5px;
    margin-bottom: 0px;
  }
  .top_text {
    font-size: 22px;
    line-height: 33px;
    margin-top: 0px;
  }
  
  .top_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 37px 37px 0px 0px;
    background-color: #FFFFFF;
    z-index: 1;
    position: relative;
    transform: translateY(-100%);
    width: 503px;
  }
</style>