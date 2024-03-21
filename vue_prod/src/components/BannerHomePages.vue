<template>
    <div  class="banner center">
      <h1 class="banner_header">Let Your Home Be Unique</h1>
      <p class="banner_text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
      <button class="banner_button">Get Started 
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
              stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </template>
  
<script>
    export default {
        
    }

</script>

<style lang="scss" scoped>

*{ box-sizing: border-box;
}
.center {
    margin: 0 auto;
    width: 1200px;
  }
.banner {
    background-image: url("@/assets/img/Image.jpg");
    background-repeat: no-repeat; // Добавьте это свойство
    background-size: cover; 
    height: 758px;
    padding: 208px 715px 208px 52px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  
  .banner_header {
    font-size: 65px;
    line-height: 81px;
    margin-bottom: 18px;
  }
  
  .banner_text {
    margin-top: 0px;
  }
  
  .banner_button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #292F36;
    color: #FFFFFF;
    font-size: 18px;
    font-family: "Jost";
    font-weight: 600;
    line-height: 22px;
    padding: 26px 48px 26px 48px;
    border-radius: 18px;
  }
</style>
