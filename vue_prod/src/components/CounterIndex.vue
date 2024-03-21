<template>
    <div class="counter">
        <div class="counter-cards">
            <h1 class="counter_card_name">12</h1>
            <p class="banner_text">Happy CUstomers</p>

        </div>
        <!-- <q> -->
        <div class="counter-cards">
            <h1 class="counter_card_name">85</h1>
            <p class="banner_text">Years Of Experiance</p>

        </div>
        <!-- <q> -->
        <div class="counter-cards">
            <h1 class="counter_card_name">15</h1>
            <p class="banner_text">Success Project</p>

        </div>
        <!-- <q> -->
        <div class="counter-cards">
            <h1 class="counter_card_name">95</h1>
            <p class="banner_text">Active Project</p>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.counter {
    background-color: #F4F0EC;
    height: 457px;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 152px;
    text-align: center;
    margin-bottom: 96px;
  }
  
  .counter-cards {
    position: relative;
  }
  
  .counter-cards:not(:last-child)::before {
    content: "";
    background-color: #CDA274;
    height: 130px;
    width: 1px;
    position: absolute;
    right: -76px;
  }
  
  .counter_card_name {
    color: #CDA274;
    font-size: 77px;
    margin: 0px;
  }
</style>