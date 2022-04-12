<template>
  <section class="home__intrestings">
    <div class="intrestings__text-wrapper">
      <h3 v-html="t('Home.intrestings.title')"></h3>
      <div class="intrestings__more">
        +95 {{ t("Home.intrestings.additional") }}
      </div>
    </div>
    <div class="intrestings__wrapper">
      <div class="wrapper__line-fixed" v-for="array in interests" :key="array">
        <div class="wrapper__line">
          <div 
            class="wrapper__interest" 
            v-for="interest in array" 
            :key="interest" 
          >
            <img 
              :src="require(`@/assets/emoji/${t(`Home.intrestings.bubles[${interest}].image`)}.png`)" 
              :alt="t(`Home.intrestings.bubles[${interest}].text`)"
            >
            <span v-html="t(`Home.intrestings.bubles[${interest}].text`)"></span>
          </div>
        </div>
        <div class="wrapper__line wrapper__interest_doubler">
          <div 
            class="wrapper__interest" 
            v-for="interest in array" 
            :key="interest" 
          >
            <img 
              :src="require(`@/assets/emoji/${t(`Home.intrestings.bubles[${interest}].image`)}.png`)" 
              :alt="t(`Home.intrestings.bubles[${interest}].text`)"
            >
            <span v-html="t(`Home.intrestings.bubles[${interest}].text`)"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const interests = ref([
      [Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99)],
      [Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99)],
      [Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99), Math.ceil(Math.random()*99)],
    ])

    return {
      t,
      interests
    };
  },
});
</script>

<style lang="scss" scoped>
.home__intrestings {
  padding: 48px 40px;
  display: flex;
  flex-flow: column;
  background: #292929;
  overflow: hidden;

  .intrestings__text-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 18px;
    padding-bottom: 48px;
    border-bottom: 1px solid #ffffff1a;

    h3 {
      font-size: 30px;
      margin: 0;
      font-family: "Stratos LC Web";
      font-style: normal;
      font-weight: 400;
      line-height: 95%;
      letter-spacing: -0.025em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;

      @media (min-width: 992px) {
        font-size: 104px;
      }

      @media (min-width: 768px) {
        font-size: 64px;
      }
    }

    .intrestings__more {
      font-family: "Inter", sans-serif;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      padding: 12px;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
      color: #ffffff;

      @media (min-width: 768px) {
        padding: 24px;
        font-size: 20px;
      }
    }
  }

  .intrestings__wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 32px;
    padding: 64px 0;
    position: relative;

    &:hover .wrapper__line {
      animation-play-state: paused;
    }

    .wrapper__line-fixed {
      height: 88px;
      width: 100%;
      display: flex;
      gap: 24px;
      flex-wrap: nowrap;

      &:nth-child(2n+1) .wrapper__line {
        animation-direction: reverse;
      }
    }

    .wrapper__line {
      display: flex;
      gap: 24px;
      flex-wrap: nowrap;
      transform: translateX(0);
      $animation-duration: 30s;
      animation: lineAnimation $animation-duration linear infinite;

      .wrapper__interest {
        white-space: nowrap;
        font-family: "Stratos LC Web";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 118%;
        font-feature-settings: "pnum" on, "lnum" on;
        color: #ffffff;
        position: relative;

        background: #313031;
        border-radius: 1000px;
        padding: 20px 32px;
        display: flex;
        gap: 16px;
        align-items: center;

        img {
          height: 48px;
          width: 48px;
        }
      }

      .wrapper__interest_doubler {
        animation-delay: calc($animation-duration / 2);
      }

      
    }

    @keyframes lineAnimation {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
