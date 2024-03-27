<template>
  <section class="home__how">
    <h2 class="how__header" v-html="t('Home.howItWorks.title')"></h2>
    <img
      class="inkast__works"
      src="@/assets/cards/HowInkastWorks.png"
      alt="HowInkastWorks"
    />
    <div class="how__wrapper">
      <h3 class="how__title" v-html="t('Home.howItWorks.additional')"></h3>
      <div
        class="how__description"
        v-html="t('Home.howItWorks.description')"
      ></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.home__how {
  background: #ffffff;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  gap: 32px;
  min-height: 40vh !important;

  .how__header {
    margin: 0;
    font-weight: 400;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #111111;
    padding-bottom: 16px;
    // border-bottom: 1px solid #ebebeb;
    font-size: 30px;

    @media (min-width: 768px) {
      font-size: 64px;
      padding-bottom: 8px;
    }

    @media (min-width: 992px) {
      font-size: 96px;
    }
  }

  .how__wrapper {
    // display: grid;
    // grid: min-content / repeat(auto-fill, minmax(500px, 1fr));
    // gap: 32px;
    display: flex;
    flex-flow: wrap row;

    .how__title {
      max-width: 539px;
      font-weight: 400;
      line-height: 118%;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #111111;
      font-size: 22px;
      margin: 0 0 32px 0;

      @media (min-width: 768px) {
        font-size: 32px;
        margin: 0 0 40px 0;
      }

      @media (min-width: 992px) {
        margin: 0 80px 40px 0;
      }
    }

    .how__description {
      margin-top: 16px;

      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.06px;
      color: #000000;
      max-width: 460px;

      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
  .inkast__works {
    overflow: hidden;
    border-radius: 20px;
  }
}
</style>
