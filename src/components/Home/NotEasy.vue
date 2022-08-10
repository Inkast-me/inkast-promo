<template>
  <section class="home__easy">
    <h2 class="easy__header" v-html="t('Home.notEasy.title')"></h2>

    <div class="easy__wrapper">
      <div class="easy__title" v-html="t('Home.notEasy.additional')"></div>
      <div
        class="easy__description"
        v-html="t('Home.notEasy.description')"
      ></div>
      <img
        class="easy__illustration"
        :src="require('@/assets/cards/easy/illustration.png')"
        alt="Me"
      />
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
.home__easy {
  // display: flex;
  // flex-flow: column;
  // justify-content: space-between;
  position: relative;
  background: #c04cf6 url("../../assets/cards/easy/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  gap: 24px;

  .easy__header {
    margin: 0;
    font-weight: 400;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    padding-bottom: 16px;
    margin-bottom: 37px;
    border-bottom: 1px solid #ffffff33;
    font-size: 30px;

    @media (min-width: 768px) {
      font-size: 64px;
      padding-bottom: 40px;
    }

    @media (min-width: 992px) {
      font-size: 96px;
    }
  }

  .easy__wrapper {
    display: grid;
    gap: 40px;

    .easy__title {
      font-weight: 400;
      font-size: 22px;
      line-height: 118%;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      max-width: 700px;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    .easy__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.06px;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      max-width: 450px;

      @media (min-width: 768px) {
        font-size: 22px;
      }
    }
    .easy__illustration {
      align-self: flex-end;
      width: 100%;
      margin-left: -20px;

      @media (min-width: 768px) {
        height: 240px;
        width: auto;
        position: absolute;
        bottom: 0px;
        right: -90px;
      }

      @media (min-width: 992px) {
        height: 340px;
      }
    }
  }
}
</style>
