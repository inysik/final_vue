
<!-- <h1> привет </h1> -->
<!-- <template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&family=Pacifico&family=Raleway:ital,wght@1,300;1,400&family=Roboto:ital,wght@0,100;1,300&family=Seymour+One&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="./style.css"> -->
<!-- <HelloComponent></HelloComponent>
<HeaderLogo/>
<BannerHomePages/>
<HeadingIndex/>
<ProdIndex/>
<CounterIndex/>
<BlogIndex/>
<Footer/> -->
<!-- тут должна быть вторая страница с хедером -->
<!-- <TopBlog/>
<Latest_Post_Blog/>
<Cards_bloc/> -->
<!-- тут должна закончится вторая страница с футером -->
<!-- тут начало 3 страницы тоже с хедером-->
<!-- <Banner_Det_blog/>
<div class="blog_det_contents center">
<ButtonsTags/>
<ArrComponents/>
</div>
</template> -->

<!-- <script>
import HelloComponent from './components/HelloComponent.vue';
import HeaderLogo from './components/HeaderLogo.vue';
import BannerHomePages from './components/BannerHomePages.vue';
import HeadingIndex from './components/HeadingIndex.vue';
import ProdIndex from './components/ProdIndex.vue';
import ProjectIndex from './components/ProdIndex.vue.vue';
import CounterIndex from './components/CounterIndex.vue';
import BlogIndex from './components/BlogIndex.vue';
import Footer from './components/Footer.vue';
import TopBlog from './components/TopBlog.vue';
import Latest_Post_Blog from './components/Latest_Post_Blog.vue';
import Cards_bloc from './components/Cards_bloc.vue';
import Banner_Det_blog from './components/Banner_Det_blog.vue';
import ButtonsTags from './components/ButtonsTags.vue';
import ArrComponents from './components/ArrComponents.vue';


export default {
components:{HelloComponent,HeaderLogo,BannerHomePages,HeadingIndex,ProdIndex,CounterIndex,BlogIndex,Footer,TopBlog,Latest_Post_Blog,Cards_bloc,Banner_Det_blog,ButtonsTags,ArrComponents}

}
</script>

<style lang="scss">
.Latest_Post_content_text, .top_text, .footer_cards_interno_text, .footer_cards_pages_text, .footer_cards_contact_text, .bloc_cards_content_text, .project_card_text, .banner_text, .navigation_item, a {
    color: #4D5053;
    font-weight: 400;
    font-size: 21px;
    font-family: "Jost";
  }
  
  .quote_text, .Latest_Post_content_title, .Latest_Post_title, .top_title, .footer_cards_contact_title, .footer_cards_pages_title, .bloc_cards_content_title, .counter_card_name, .project_card_title, .heading_title, .banner_header {
    color: #292F36;
    font-weight: 400;
    font-family: "DM Serif Display";
  }
  
.blog_det_contents {
    display: flex;
    flex-direction: row-reverse;
    gap: 52px;
    padding-top: 200px;
  }
  .center {
    margin: 0 auto;
    width: 1200px;
  }

</style> -->


<template>
    <h1>hi hello</h1>
<ProductDetails/>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';
    export default {
     name:'App',
     components:{ProductDetails}   
    }
</script>

<style lang="scss" scoped>
.title{
    color: red;
}
</style>
