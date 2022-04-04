<template>
  <section class="home__easy">
    <h2 class="easy__header">Не&nbsp;всё так просто</h2>

    <div class="easy__wrapper">
      <div class="easy__title">
        Мы&nbsp;создали свои собственные алгоритмы машинного обучения, которые
        создают ваших цифровых двойников, приписывая им&nbsp;определенные
        интересы и&nbsp;характер
      </div>
      <div class="easy__description">
        Цифровые двойники сравниваются дополнительными алгоритмами
        и&nbsp;прогнозируются наилучшие комбинации людей для вас
      </div>
      <img
        class="easy__illustration"
        :src="require('@/assets/cards/easy/illustration.svg')"
        alt="Me"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home__easy {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: #c04cf6 url("../../assets/cards/easy/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  gap: 24px;

  .easy__header {
    margin: 0;
    font-weight: 400;
    font-size: 30px;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    padding-bottom: 40px;
    border-bottom: 1px solid #ffffff33;

    @media (min-width: 768px) {
      font-size: 120px;
    }

    @media (min-width: 360px) {
      font-size: 64px;
    }
  }

  .easy__wrapper {
    display: grid;
    gap: 40px;
    position: relative;

    .easy__title {
      font-weight: 400;
      font-size: 22px;
      line-height: 118%;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      max-width: 700px;

      @media (min-width: 360px) {
        font-size: 40px;
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

      @media (min-width: 360px) {
        font-size: 22px;
      }
    }

    .easy__illustration {
      align-self: flex-end;
      height: 170px;

      @media (min-width: 360px) {
        height: 280px;
      }

      @media (min-width: 768px) {
        height: 340px;
        position: absolute;
        bottom: -40px;
        right: -90px;
      }
    }
  }
}
</style>
