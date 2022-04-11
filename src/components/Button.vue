<template>
  <a :href="href" class="button__wrapper" v-if="href">
    <slot></slot>
  </a>
  <button class="button__wrapper" v-else>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["href"],
});
</script>

<style lang="scss" scoped>
.button__wrapper {
  font-family: "Stratos LC Web";
  background-color: #111111;
  border-radius: 12px;
  padding: 0.75em 0.75em calc(0.75em + 4px);
  border: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.16s ease-in-out;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  &:hover {
    background-color: #222222;
  }
}
</style>
