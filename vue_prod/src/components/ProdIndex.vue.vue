<template>
    <div class="project center">
        <div class="project_card">
            <img :src="Image1_1" alt="">
            <div class="project_content">
                <div class="sub_content">
                    <h4 class="project_card_title">Modern Kitchan</h4>
                    <p class="project_card_text">Decor / Artchitecture</p>
                </div>
                <button class="project_card-button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></button>
            </div>
        </div>
        <div class="project_card">
            <img :src="Image2_2" alt="">
            <div class="project_content">
                <div class="sub_content">
                    <h4 class="project_card_title">Modern Kitchan</h4>
                    <p class="project_card_text">Decor / Artchitecture</p>
                </div>
                <button class="project_card-button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></button>
            </div>
        </div>
        <div class="project_card">
            <img :src="Image1" alt="">
            <div class="project_content">
                <div class="sub_content">
                    <h4 class="project_card_title">Modern Kitchan</h4>
                    <p class="project_card_text">Decor / Artchitecture</p>
                </div>
                <button class="project_card-button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></button>
            </div>
        </div>
        <div class="project_card">
            <img :src="Image2" alt="#">
            <div class="project_content">
                <div class="sub_content">
                    <h4 class="project_card_title">Modern Kitchan</h4>
                    <p class="project_card_text">Decor / Artchitecture</p>
                </div>
                <button class="project_card-button"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></button>
            </div>
        </div>
    </div>
</template>

<script>
import Image1 from "@/assets/img/Image1.jpg";
import Image3 from "@/assets/img/Image1_1.jpg";
import Image2 from "@/assets/img/Image2.jpg";
import Image4 from "@/assets/img/Image2_2.jpg";


export default {
  data() {
    return {
      Image2: Image2,
      Image1: Image1,
      Image1_1: Image3,
      Image2_2: Image4,
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
    display: grid;
    grid-template-areas: "A B" " C D";
    align-items: stretch;
    justify-items: stretch;
    grid-column-gap: 52px;
    row-gap: 56px;
    margin-bottom: 96px;
  }
  
  .project_card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .project_card img {
    width: 100%;
  }
  
  .project_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .project_card-button {
    background-color: #F4F0EC;
    border: #F4F0EC;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  
  .project_card_title {
    font-size: 25px;
    line-height: 31px;
    margin-bottom: 28px;
    margin-bottom: 4px;
  }
  
  .project_card_text {
    font-size: 22px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 33px;
  }
</style>