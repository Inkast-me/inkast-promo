<template>
  <div class="home__footer">
    <span>Inkast 2022</span>
    <span
      >С&nbsp;<img
        src="@/assets/red_heart.png"
        alt="heart"
      />&nbsp;из&nbsp;Санкт-Петербурга</span
    >
    <a href="">Условия и Политика</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("this is footer");
  },
});
</script>

<style lang="scss" scoped>
.home__footer {
  color: #fff;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  padding: 0 60px;

  span {
    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
  }

  span:first-child {
      opacity: 0.4;
    }

  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    opacity: 0.4;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;
  }
  a:hover {
    opacity: 0.7;
  }
  img {
    width: 30px;
  }
}
</style>
