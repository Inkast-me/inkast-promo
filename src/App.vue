<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { locale } = useI18n()
    const language = navigator.language

    locale.value = language
  },
})
</script>


<style lang="scss">
@font-face {
  font-family: "Stratos LC Web";
  src: url("./assets/fonts/StratosLCWeb-Regular.ttf") format("truetype");
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

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
