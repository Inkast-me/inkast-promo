<template>
  <section class="home__intrestings">
    <div class="intrestings__text-wrapper">
      <h3>Представьте<br />Может быть, вы&nbsp;оба...</h3>
      <div class="intrestings__more">+95 интересов</div>
    </div>
    <div class="intrestings__wrapper">
      <div class="wrapper__line">
        <span>мне лень</span>
        <span>мне лень</span>
        <span>мне лень</span>
      </div>
      <div class="wrapper__line">
        <span>мне лень</span>
        <span>мне лень</span>
        <span>мне лень</span>
      </div>
      <div class="wrapper__line">
        <span>мне лень</span>
        <span>мне лень</span>
        <span>мне лень</span>
      </div>
    </div>
  </section>
</template>

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
      margin: 0;
      font-family: "Stratos LC Web";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 95%;
      letter-spacing: -0.025em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;

      @media (min-width: 768px) {
        font-size: 104px;
      }

      @media (min-width: 360px) {
        font-size: 64px;
      }
    }

    .intrestings__more {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      padding: 12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
      color: #ffffff;

      @media (min-width: 360px) {
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
      animation: lineAnimation 5s linear infinite;
      span {
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
