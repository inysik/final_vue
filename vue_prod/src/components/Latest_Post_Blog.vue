<template>
    <div class="Latest_Post center">
        <h2 class="Latest_Post_title">Latest Post</h2>


        <div class="Latest_Post_contents">
            <img :src="last_image" alt="" srcset="">
            <div class="Latest_Post_content">
                <h3 class="Latest_Post_content_title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="Latest_Post_content_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It
                    has
                    roots in a piece of classica.</p>
                <p class="Latest_Post_content_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>


                <p class="bloc_cards_content_text">26 December,2022 <button class="blog_button"><svg
                            xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button></p>
            </div>
        </div>
    </div>
</template>
<script>
import testPng from '@/assets/img/Image_Lastest_post.png';
    export default {
        data() {
            return {
                last_image:testPng,
            }
        },
    }
</script>

<style lang="scss" scoped>
.center {
    margin: 0 auto;
    width: 1200px;
  }
  .bloc_cards_content_text {
    font-size: 16px;
    text-align: start;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 21px;
  }
  .blog_button {
    border: none;
    width: 52px;
    height: 52px;
    background-color: #F4F0EC;
    border-radius: 50%;
  }  
  .Latest_Post_title {
    font-size: 50px;
    letter-spacing: 2%;
  }
  
  .Latest_Post_contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 65px;
  }
  
  .Latest_Post_content {
    padding: 51px 34px 51px 0px;
    width: 470px;
  }
  
  .Latest_Post_content_title {
    font-size: 25px;
    letter-spacing: 2%;
    line-height: 31px;
  }
  
  .Latest_Post_content_text {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1%;
  }
  
  .blog_cards_vue {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 28px;
    -moz-column-gap: 28px;
         column-gap: 28px;
  }
  .vue_card {
    padding: 21px;
  }  
</style>