<template>
  <div class="home__footer">
    <span>Inkast 2022</span>
    <span class="footer__love"
      >{{ t("Home.footer.with")
      }}<img src="@/assets/red_heart.png" alt="heart" />{{
        t("Home.footer.love")
      }}</span
    >
    <router-link to="/privacy" v-html="t('Home.footer.termsAndPolicy')"></router-link>
  </div>
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

@keyframes apperingText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.home__footer {
  animation: apperingText .2s ease-out;
  color: #ffffff;
  text-align: center;
  display: grid;
  place-items: center;
  gap: 12px;

  @media (min-width: 992px) {
    padding: 0 60px;
  }

  @media (min-width: 768px) {
    padding: 0 16px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
  }

  .footer__love {
    display: inline-flex;
    flex-flow: nowrap row;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;

    img {
      margin: 0 4px;
    }
  }

  span:first-child {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    opacity: 0.4;
  }

  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
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
