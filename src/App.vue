<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { locale, t } = useI18n();
    const lang =
      localStorage.getItem("inkast:selectedLanguage") || navigator.language;
    if (/^[a-z][a-z]-[A-Z][A-Z]/.test(lang)) {
      locale.value = lang;
    }

    watchEffect(() => {
      document.title = t("title");
    });
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "Stratos LC Web";
  src: url("./assets/fonts/StratosLCWeb-Regular.ttf") format("truetype");
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

@keyframes fromNothingToGreatest {
  0% {
    transform: scale(0.98) translateY(2%);
    opacity: 0.4;
  }
  100% {
    opacity: 100;
    transform: scale(1) translateY(0%);
  }
}

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  background: #111;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  font-family: "Stratos LC Web", "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
}
</style>
