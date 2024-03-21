<template>
    
        <div class="articles">
          <div id="app">
            <div v-for="(component, index) in components" :key="index" :id="`app-${index + 1}`">
              <component :is="component.name" :class="component.class">
                <img :src="imageUrl" alt="Description of the image">
              </component>
            </div>
          </div>
        </div>
     </template>
  <script>
  import { defineComponent, h } from 'vue';
  import ImageBloc1 from '@/assets/img/Image_bloc1.jpg'; // Импорт изображения
  
  // Определяем компоненты
  const MyComponent = defineComponent({
    data() {
      return {
        title: "Let’s Get Solution for Building Construction Work",
        imageUrl: ImageBloc1,
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        descriptionTwo:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        additionalText: "",
      };
    },
    render() {
      return h("div", { class: "my-component" }, [
        h("h4", this.title),
        h("img", { src: this.imageUrl, alt: "Image" }),
        h("p", this.description),
        h("p", this.descriptionTwo),
        h("p", this.additionalText),
      ]);
    },

  });
  
  const MyComponentTwo = defineComponent({
    render() {
      return h("div", { class: "my-component-two" }, [
        h("h4", "Design sprints are great"),
        h(
          "p",
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. "
        ),
        h("ol", [
          h(
            "li",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
          ),
          h(
            "li",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
          ),
          h(
            "li",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
          ),
        ]),
        h("img", { src: require("@/assets/img/Image_blog2.jpg"), alt: "Image" }),
        h(
          "p",
          " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        ),
      ]);
    },
  });
  
  export default defineComponent({
    data() {
      return {
        components: [
          { name: MyComponent, class: "my-component" },
          { name: MyComponentTwo, class: "my-component-two" }
        ]
      };
    },
    mounted() {
      // Создаем экземпляры приложений
      this.components.forEach((component, index) => {
        const app = createApp({
          render: () => h(component.name)
        });
        app.mount(`#app-${index + 1}`);
      });
    }
  });
  </script>
  
  
  <style >
  /* Стили для заголовков h4 внутри компонентов */
  .my-component h4,
  .my-component-two h4 {
      font-family: 'DM Serif Display';
      font-size: 50px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 2%;
      margin: 0;
      margin-bottom: 21px;
  }
  
  /* Стили для изображений внутри компонента MyComponent */
  .my-component img {
      width: 799px; /* Применяем стиль к изображению в my-component */
  }
  
  /* Общие стили для параграфов в обоих компонентах */
  .my-component p,
  .my-component-two p {
      font-family: 'Jost';
      font-weight: 400;
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 1%;
  }
  
  /* Стили для списка ol внутри компонента MyComponentTwo */
  .my-component-two ol {
      list-style-type: none;
      counter-reset: my-counter;
      font-family: 'Jost';
      font-weight: 400;
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 1%;
      padding-left: 0;
  }
  
  /* Стили для элементов списка li внутри компонента MyComponentTwo */
  .my-component-two ol li {
      counter-increment: my-counter;
      position: relative;
      margin-bottom: 10px;
      padding-left: 15px;
  }
  
  /* Стили для маркеров списка li внутри компонента MyComponentTwo */
  .my-component-two ol li::before {
      content: counter(my-counter);
      position: absolute;
      left: 0px;
      color: #CDA274;
      font-family: 'DM Serif Display';
      font-size: 20px;
  }
  </style>
  
  