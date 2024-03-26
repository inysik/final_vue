import { createRouter, createWebHistory } from "vue-router";

import HeaderLogo from "@/components/HeaderLogo.vue";
import BannerHomePages from "@/components/BannerHomePages.vue";
import HeadingIndex from "@/components/HeadingIndex.vue";
import ProdIndex from "@/components/ProdIndex.vue";
import ProjectIndex from "@/components/ProdIndex.vue.vue";
import CounterIndex from "@/components/CounterIndex.vue";
import BlogIndex from "@/components/BlogIndex.vue";
import Footer from "@/components/Footer.vue";
import TopBlog from "@/components/TopBlog.vue";
import Latest_Post_Blog from "@/components/Latest_Post_Blog.vue";
import Cards_bloc from "@/components/Cards_bloc.vue";
import Banner_Det_blog from "@/components/Banner_Det_blog.vue";
import ButtonsTags from "@/components/ButtonsTags.vue";
import ArrComponents from "@/components/ArrComponents.vue";
import BlogDetails from "@/components/BlogDetails.vue";
import Swiper from "@/components/Swiper.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      headerLogo: HeaderLogo,
      bannerHomePages: BannerHomePages,
      headingIndex: HeadingIndex,
      prodIndex: ProdIndex,
      counterIndex: CounterIndex,
      blogIndex: BlogIndex,
      footer: Footer,
    },
  },
  {
    path: "/Project",
    name: "Project",
    components: {
      headerLogo: HeaderLogo,
      topBlog: TopBlog,
      latest_Post_Blog: Latest_Post_Blog,
      cards_bloc: Cards_bloc,
      footer: Footer,
    },
  },
  {
    path: "/Blog",
    name: "Blog",
    components: {
      headerLogo: HeaderLogo,
      banner_Det_blog: Banner_Det_blog,
      buttonsTags: ButtonsTags,
      arrComponents: ArrComponents,
      blogDetails: BlogDetails,
      swiper: Swiper,
      footer: Footer,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    components: {
      notFound: NotFound,
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});
export default router;
