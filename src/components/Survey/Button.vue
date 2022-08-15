<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  &,
  &[data-variant="primary"] {
    --primary: #cc5fff;
    --on-primary: #ffffff;
  }

  &[data-variant="secondary"] {
    --primary: #ffffff;
    --on-primary: #111111;
  }

  border-radius: 12px;
  padding: 10px 16px 11px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  background-color: var(--primary);
  color: var(--on-primary);

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.08px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  &:hover {
    opacity: 0.8;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
