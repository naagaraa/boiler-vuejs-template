import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";

// Install Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/popper.js/dist/umd/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// layout
import Blank from "./layouts/BlankLayout.vue";
import Blog from "./layouts/BlogLayout.vue";
import Apps from "./layouts/AppsLayout.vue";

Vue.component("BlankLayout", Blank);
Vue.component("BlogLayout", Blog);
Vue.component("AppsLayout", Apps);

// middleware
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueMeta);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount();
