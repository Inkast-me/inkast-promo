import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/donate",
    name: "Donate",
    component: () =>
      import(/* webpackChunkName: "donate" */ "../views/Donate.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "../views/Privacy.vue"),
  },
  {
    path: "/anketa",
    name: "Anketa",
    beforeEnter: (to, from, next) => {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLScdUJJNbC9WQl70gW3A-qiqClzAYypYWdboHyM6vER7tsK6Eg/viewform?usp=sf_link";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy-policy",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/docs/privacy-policy.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/user-agreement",
    name: "User-agreement",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/docs/user-agreement.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/personal-data",
    name: "Personal-data",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/docs/personal-data.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/invest",
    name: "Invest",
    component: () =>
      import(/* webpackChunkName: "donate" */ "../views/Investors.vue"),
  },
  {
    path: "/invest_ru",
    name: "InvestPresentationRu",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/invest_ru.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/invest_en",
    name: "InvestPresentationEn",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/invest_en.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/introduce",
    name: "Introduce",
    component: () =>
      import(/* webpackChunkName: "introduce" */ "../views/Introduce.vue"),
  },
  {
    path: "/soulmate",
    name: "Soulmate",
    component: () =>
      import(/* webpackChunkName: "soulmate" */ "../views/Soulmate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
