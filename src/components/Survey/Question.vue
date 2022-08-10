<template>
  <div class="question__wrapper">
    <p class="question__label--left" v-html="labelLeft"></p>
    <input type="range" max="2" min="-2" step="1" v-model="rangeValue" />
    <p class="question__label--right" v-html="labelRight"></p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0,
      required: true,
    },
    labelLeft: {
      type: String,
      default: "Left",
    },
    labelRight: {
      type: String,
      default: "Right",
    },
  },
  setup(props, { emit }) {
    const rangeValue = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", Number(value));
      },
    });

    return {
      rangeValue,
    };
  },
});
</script>

<style lang="scss" scoped>
$track-color: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 25%,
    rgba(0, 0, 0, 0.5) 25% calc(25% + 1px)
  ),
  linear-gradient(90deg, #70cbfa 1.33%, #d172fd 100%);
$thumb-color: #ffffff;

$thumb-radius: 100px;
$thumb-height: 20px;
$thumb-width: 20px;
$thumb-shadow-size: 4px;
$thumb-shadow-blur: 4px;
$thumb-shadow-color: rgba(0, 0, 0, 0.25);
$thumb-border-width: 0px;

$track-width: 100%;
$track-height: 10px;
$track-shadow-size: 0px;
$track-shadow-blur: 0px;
$track-shadow-color: rgba(0, 0, 0, 0);
$track-border-width: 0px;

$track-radius: 40px;

@import "../../inputrange";
.question__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  align-items: center;
  min-height: 80px;

  .question__label--left {
    flex: 100px 1 1;
  }
  .question__label--right {
    flex: 100px 1 1;
    text-align: right;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: -0.015em;
    color: #ffffff;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      font-size: 26px;
    }
  }

  input[type="range"] {
    flex: 0 0 100%;
    order: 1;
    @media (min-width: 768px) {
      flex: 200px 1 1;
      order: 0;
    }
  }
}
</style>
