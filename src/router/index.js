import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/blog/HomeView.vue";
// import LoggedInLayout from "../layouts/BlankLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    meta: {
      layout: "BlogLayout",
    },
    component: HomeView,
  },
  {
    path: "/blog",
    name: "BlogIndex",
    meta: {
      layout: "BlogLayout",
    },
    component: () => import("../views/blog/BlogView.vue"),
  },
  {
    path: "/contact",
    name: "ContactIndex",
    meta: {
      layout: "BlogLayout",
    },
    component: () => import("../views/blog/ContactView.vue"),
  },
  {
    path: "/about",
    name: "AboutIndex",
    meta: {
      layout: "BlogLayout",
    },
    component: () => import("../views/blog/AboutView.vue"),
  },
  {
    path: "/back/login",
    meta: {
      layout: "BlankLayout",
    },
    name: "LoginIndex",
    component: () => import("../views/apps/LoginView.vue"),
  },
  {
    path: "/register",
    name: "RegisterIndex",
    meta: {
      layout: "BlankLayout",
    },
    component: () => import("../views/apps/RegisterView.vue"),
  },
  {
    path: "/dashboard",
    name: "DashboardIndex",
    meta: {
      layout: "AppsLayout",
    },
    component: () => import("../views/apps/DashboardView.vue"),
  },
  {
    // will match everything
    path: "*",
    component: () => import("../views/blog/The404View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
