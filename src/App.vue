<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Stratos LC Web";
  src: url("./assets/fonts/StratosLCWeb-Regular.ttf") format("truetype");
}

*, ::after, ::before {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  font-family: "Stratos LC Web", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
}
</style>
