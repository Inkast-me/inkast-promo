import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .directive("scroll", function (el: HTMLElement, binding: any) {
    addEventListener("scroll", () => {
      const clientScreenHeight = document.documentElement.clientHeight;

      if (el) {
        const elHeight = el.offsetHeight;

        const translateY = Math.max((Number(binding.arg)-1) * clientScreenHeight*0.76 + (Number(binding.arg) - 2)*64 - window.scrollY, 144)

        el.style.setProperty('--translateY', `${translateY}px`)

        if (translateY + elHeight > clientScreenHeight) {
          el.style.setProperty('--scale', Math.min(Math.max((0.5 + translateY/clientScreenHeight), 1), 1.08) + '') 
          el.style.opacity = '1'
        } else if (translateY == 144) {
          if (window.scrollY) el.style.opacity = '1'
          else el.style.opacity = '1'
        }
      }
    });

    const clientScreenHeight = document.documentElement.clientHeight;

      if (el) {
        const translateY = Math.max((Number(binding.arg)-1) * clientScreenHeight*0.76 + (Number(binding.arg) - 2)*64 - window.scrollY, 144)

        el.style.setProperty('--translateY', `${translateY}px`)

        const elHeight = el.offsetHeight;

        if (translateY + elHeight > clientScreenHeight) {
          el.style.setProperty('--scale', Math.min(Math.max((0.5 + translateY/clientScreenHeight), 1), 1.08) + '') 
          el.style.opacity = '1'
        } else if (translateY == 144) {
          if (window.scrollY) el.style.opacity = '1'
          else el.style.opacity = '1'
        }
      }
  })
  .mount("#app");
