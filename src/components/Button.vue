<template>
  <button class="button__wrapper">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button__wrapper {
  background: #111111;
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

  @media (min-width: 768px) {
    font-size: 32px;
  }

  &:hover {
    background: #222222;
  }
}
</style>
