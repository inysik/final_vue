<template>
    <div id="app" class="blog_vue center">
      <div class="card-container blog_cards_vue">
        <!-- Используем директиву v-for для создания карточек -->
        <div v-for="(card, index) in cards" :key="index" class="card bloc_cards_content vue_card">
          <!-- Изображение карточки -->
          <img :src="card.img" :alt="card.title" class="card-image" style="border-radius: 40px 40px 0 0 ;" />
          <!-- Заголовок карточки -->
          <h4 class="card-title bloc_cards_content_title">{{ card.title }}</h4>
          <!-- Дата карточки -->
          <p class="card-date bloc_cards_content_text">{{ card.date }} <button class="card-button blog_button" @click="openLink(card.link)"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none"><path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Массив данных для карточек
        cards: [
          {
            img: require('@/assets/img/card1.jpg'), // Замените на путь к вашему изображению
            title: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          },
          {
            img: require('@/assets/img/card2.jpg'), // Замените на путь к вашему изображению
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          },
          {
            img: require('@/assets/img/card3.jpg'), // Замените на путь к вашему изображению
            title: 'Best For Any Office & Business Interior Solution',
            date: '22 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          },
          {
            img: require('@/assets/img/card3.jpg'), // Замените на путь к вашему изображению
            title: 'Best For Any Office & Business Interior Solution',
            date: '22 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          }, {
            img: require('@/assets/img/card3.jpg'), // Замените на путь к вашему изображению
            title: 'Best For Any Office & Business Interior Solution',
            date: '22 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          }, {
            img: require('@/assets/img/card3.jpg'), // Замените на путь к вашему изображению
            title: 'Best For Any Office & Business Interior Solution',
            date: '22 December, 2022',
            link: 'https://example.com' // Замените на вашу ссылку
          },
     
        ]
      };
    },
    methods: {
      // Метод для открытия ссылки в новой вкладке
      openLink(link) {
        window.open(link, '_blank');
      }
    }
  };
  </script>
  
  <style lang="scss">
  * {
    box-sizing: border-box;
  }

  .center {
    margin: 0 auto;
    width: 1200px;
  }
  .blog_cards_vue {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    row-gap: 28px;
    -moz-column-gap: 28px;
    column-gap: 28px;
  }
  .vue_card {
    padding: 21px;
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
  