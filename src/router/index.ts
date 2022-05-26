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
    path: "/invest",
    name: "Invest",
    beforeEnter: (to, from, next) => {
      window.location.href = "../assets/investors-presentation.pdf";
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
