<template>
    <div class="app-buttons">
      <h3>{{ title }}</h3>
      <button v-for="button in buttons" :key="button.id" @click="button.handler">{{ button.text }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Tags",
        buttons: [
          { id: 1, text: "Kitchen", handler: this.showFirstComponent },
          { id: 2, text: "Bedroom" },
          { id: 3, text: "Building" },
          { id: 4, text: "Architecture" },
          { id: 5, text: "Kitchen Planning", handler:this.showSecondComponent },
          { id: 6, text: "Bedroom" },
        ],
        currentComponent: 1,
      };
    },
    methods: {
      showFirstComponent() {
        this.currentComponent = "MyComponent";
      },
      showSecondComponent() {
        this.currentComponent = "MyComponentTwo";
      },
    },
  };
  </script>
  <style scoped>
  .center {
    margin: 0 auto;
    width: 1200px;
  }
  .app-buttons {

    padding: 20px;
}

h3 {
    font-family: DM Serif Display;
    font-weight: 400;
    color: #292F36;
    font-size: 25px;
    margin: 0;
}


button {
    background-color: #F4F0EC;
    color: #292F36;
    font-size: 18px;
    letter-spacing: 2%;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px;
}

button:hover {
    background-color: #292F36;
    color: #F4F0EC;

}

.my-component h4,
.my-component-two h4 {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 2%;
    margin: 0;
    margin-bottom: 21px;
}

.my-component app-bloc {
    width: 799px;
}

.my-component h4,
.my-component-two h4 {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 2%;
    margin: 0;
    margin-bottom: 21px;
}

.my-component,
.my-component-two p {
    font-family: Jost;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1%;
}

.my-component-two ol {
    list-style-type: none;
    counter-reset: my-counter;
    font-family: Jost;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1%;
    padding-left: 0;

}

.my-component-two ol li {
    counter-increment: my-counter;
    position: relative;
    margin-bottom: 10px;
    padding-left: 15px;
}

.my-component-two ol li::before {
    content: counter(my-counter);
    position: absolute;
    left: 0px;
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 20px;

}
</style>