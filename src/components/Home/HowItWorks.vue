<template>
  <section class="home__how">
    <h2 class="how__header">Как это работает?</h2>
    <div class="how__wrapper">
      <h3 class="how__title">
        Сейчас у&nbsp;каждого человека в&nbsp;сети есть свой цифровой портрет,
        который строится на&nbsp;основе его метаданных
      </h3>
      <div class="how__description">
        <span
          >Можете не&nbsp;волноваться о&nbsp;конфиденциальной информации, потому
          что вы&nbsp;самостоятельно предоставляете доступ только к&nbsp;тем
          метаданным, по&nbsp;которым хотели&nbsp;бы найти себе любимого
          человека или друга</span
        >
        <span
          >Например, вы&nbsp;можете находить людей по&nbsp;просмотренным видео
          в&nbsp;ТикТок или подпискам на&nbsp;паблики ВКонтакте</span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home__how {
  background: #ffffff;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  gap: 32px;

  .how__header {
    margin: 0;
    font-weight: 400;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #111111;
    padding-bottom: 40px;
    border-bottom: 1px solid #ebebeb;
      font-size: 30px;

    @media (min-width: 992px) {
      font-size: 120px;
    }

    @media (min-width: 768px) {
      font-size: 64px;
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
      margin: 0 0 40px 0;

      @media (min-width: 992px) {
        margin: 0 80px 40px 0;
      }

      @media (min-width: 768px) {
        font-size: 40px;
      }
    }

    .how__description {
      display: grid;
      gap: 40px;
      margin-top: 16px;

      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.06px;
      color: #000000;

      > span {
        max-width: 460px;
      }

      @media (min-width: 360px) {
        font-size: 20px;
      }
    }
  }
}
</style>
