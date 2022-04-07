<template>
  <section class="home__rare">
    <h2 class="rare__header">
      И&nbsp;лишь только редкий случай мог&nbsp;бы вас свести <br />
      Этот случай&nbsp;&mdash;<span> уже сейчас</span>
    </h2>

    <div class="rare__media-wrapper">
      <a href="#follow" class="rare__link">
        <svg
          width="54"
          height="68"
          viewBox="0 0 54 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.34"
            d="M43.7435 53.9981C34.7272 66.293 24.618 68.0007 20.8612 68.0007C10.0089 68.0007 3.69175 55.579 3.44345 46.1432C-0.313245 46.1432 -0.777722 32.6088 3.44345 31.4576C-0.996261 6.52622 32.1317 -11.2334 44.4265 10.9659C58.429 12.332 53.6477 32.482 49.8909 39.654C55.7137 39.654 49.6318 57.5311 43.7435 53.9981Z"
            class="svgavatar"
            fill="#111"
          />
          <path
            d="M35.5619 39.657H28.3899V47.2133H25.2308V39.657H18.0801V36.69H25.2308V29.1338H28.3899V36.69H35.5619V39.657Z"
            fill="#4F8B4A"
          />
        </svg>
      </a>
      <span class="rare__text">
        Вы&nbsp;оба сочетаете в&nbsp;себе многогранную комбинацию разных вкусов,
        интересов и&nbsp;взглядов на&nbsp;жизнь. Найти похожих людей очень
        трудно, но&nbsp;для нас это не&nbsp;проблема
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
    font-size: 80px;
    line-height: 111%;
    letter-spacing: -0.05em;
    color: #ffffff;
    max-width: 940px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 56px;
    }

    @media (max-width: 360px) {
      font-size: 30px;
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
      align-self: flex-start;
      margin-bottom: 21px;
      .svgavatar {
        transition: opacity 0.16s ease-in-out;
      }
    }

    .rare__link:hover {
      .svgavatar {
        opacity: 0.5;
      }
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
