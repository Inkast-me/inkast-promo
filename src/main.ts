import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueGtag from "vue-gtag";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueGtag, { config: { id: "UA-226936827-1" } })
  .mount("#app");
