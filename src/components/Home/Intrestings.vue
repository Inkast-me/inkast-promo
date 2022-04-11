<template>
  <section class="home__intrestings">
    <div class="intrestings__text-wrapper">
      <h3 v-html="t('Home.intrestings.title')"></h3>
      <div class="intrestings__more">+95 {{t('Home.intrestings.additional')}}</div>
    </div>
    <div class="intrestings__wrapper">
      <div class="wrapper__line">
        <span>Фанаты настольных игр</span>
        <span>Кодите по&nbsp;ночам</span>
        <span>Играете в&nbsp;компьютерные игры</span>
      </div>
      <div class="wrapper__line">
        <span>Много работаете </span>
        <span>Мечтаете стать художниками</span>
        <span>Любите одинаковые песни</span>
      </div>
      <div class="wrapper__line">
        <span>Увлекаетесь астрологией</span>
        <span>Смотрите по&nbsp;ночам аниме</span>
        <span>Увлекатесь бегом</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  },
})
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

    .wrapper__line {
      display: flex;
      gap: 24px;
      flex-wrap: nowrap;

      transform: translateX(100%);
      // TODO: Just an example of speed, do it in JS please, Platon. Example -> https://dribbble.com/shots/7784835-Simple-Wine-News-Glossary-Screen
      animation: lineAnimation 30s linear infinite;
      span {
        white-space: nowrap;
        font-family: "Stratos LC Web";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 118%;
        font-feature-settings: "pnum" on, "lnum" on;
        color: #ffffff;

        background: #313031;
        border-radius: 1000px;
        padding: 20px 32px;
      }

      &:nth-child(2n) {
        animation-direction: reverse;
      }
    }

    @keyframes lineAnimation {
      from {
        transform: translateX(200%);
      }
      to {
        transform: translateX(-200%);
      }
    }
  }
}
</style>
