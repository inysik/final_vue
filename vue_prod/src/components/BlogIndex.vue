<template>
    <div class="blog heading center">
        <h2 class="blog_name heading_title">Articles & News</h2>
        <p class=" blog_text banner_text">It is a long established fact that a reader will be distracted by the of
            readable content of a page when lookings at its layouts the points of using.</p>
        <section class="blog_cards">
            <div class="bloc_cards_content">
                <img :src="card1" alt="">
                <h4 class="bloc_cards_content_title">Let’s Get Solution For Building Construction Work</h4>
                <p class="bloc_cards_content_text">26 December,2022 <button class="blog_button"><svg
                            xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button></p>

            </div>
            <div class="bloc_cards_content bloc_cards-content__colorfull">
                <img :src="card2"  alt="" style="border-radius: 45px 45px 0 0;">
                <h4 class="bloc_cards_content_title">Low Cost Latest Invented Interior Designing Ideas.</h4>
                <p class="bloc_cards_content_text">22 December,2022 <button
                        class="blog_button bloc_cards-content__colorfull_button"><svg xmlns="http://www.w3.org/2000/svg"
                            width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button></p>

            </div>
            <div class="bloc_cards_content">
                <img :src="card3" alt="">
                <h4 class="bloc_cards_content_title">Best For Any Office & Business Interior Solution</h4>
                <p class="bloc_cards_content_text">22 December,2022 <button class="blog_button"><svg
                            xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg></button></p>

            </div>
        </section>
    </div>
</template>

<script>
 
import card1 from "@/assets/img/card1.jpg";
import card2 from "@/assets/img/card2.jpg";
import card3 from "@/assets/img/card3.jpg";

export default {
  data() {
    return {
      card1: card1,
      card2: card2,
      card3: card3,
    };
  },
};


</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
  }
.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 92px 236px 92px 236px;
  }
  .heading_title {
    line-height: 52px;
    font-size: 50px;
    margin-bottom: 0px;
  }
  .banner_text {
    margin-top: 0px;
  }
  .center {
    margin: 0 auto;
    width: 1200px;
  }
    
.blog_name {
    text-align: center;
  }
  
  .blog_text {
    width: 811px;
    text-align: center;
    margin-bottom: 52px;
  }
  
  .blog_cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 27px;
  }
  
  .bloc_cards_content {
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    padding: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bloc_cards_content_title {
    font-size: 25px;
    letter-spacing: 2%;
    padding: 0px;
    text-align: start;
    padding-bottom: 31px;
    margin: 0px;
    line-height: 31px;
    letter-spacing: 2px;
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
  
  .bloc_cards-content__colorfull {
    background-color: #F4F0EC;
  }
  .bloc_cards-content__colorfull_button {
    background-color: #FFFFFF;
  }
</style>