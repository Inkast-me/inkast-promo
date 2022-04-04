<template>
  <section class="home__rare">
    <h2 class="rare__header">
      И лишь только редкий случай мог бы вас свести <br />
      Этот случай – <span>уже сейчас</span>
    </h2>

    <div class="rare__media-wrapper">
      <div class="rare__link">
        <img
          :src="require('@/assets/join.svg')"
          alt="Je na mange pas six jours!"
        />
      </div>
      <span class="rare__text">
        Вы&nbsp;оба сочетаете в&nbsp;себе многогранную комбинацию разных вкусов,
        интересов и&nbsp;взглядов на&nbsp;жизнь
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home__rare {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: #292929 url("../../assets/cards/rare.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  gap: 24px;

  .rare__header {
    font-weight: 400;
    font-size: 30px;
    line-height: 111%;
    letter-spacing: -0.05em;
    color: #ffffff;
    max-width: 940px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 80px;
    }

    @media (min-width: 360px) {
      font-size: 56px;
    }

    span {
      color: #7dff70;
    }
  }

  .rare__media-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap-reverse;

    .rare__link {
      background: #29292933;
      border-radius: 48.5517px;
      padding: 24px;
      cursor: pointer;
      z-index: 1;
    }

    .rare__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      max-width: 430px;

      @media (min-width: 768px) {
        font-size: 32px;
      }

      @media (min-width: 360px) {
        font-size: 24px;
      }
    }
  }
}
</style>
