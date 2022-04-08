<template>
  <section class="home__couple">
    <div class="couple__text-wrapper">
      <h3>
        Где-то на&nbsp;земле существует человек, который создан именно
        для&nbsp;тебя
      </h3>
      <span
        >И&nbsp;вы&nbsp;еще не&nbsp;знаете о&nbsp;существовании друг друга</span
      >
    </div>
    <div class="couple__media-wrapper">
      <img :src="require('@/assets/cards/couple.png')" alt="Couple in Russia" />
      <a href="#follow" class="couple__link">
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
            fill="white"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home__couple {
  background: #ffffff;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  // gap: 40px;

  .couple__text-wrapper {
    // display: grid;
    // width: 100%;
    // grid: min-content / repeat(auto-fit, minmax(500px, 1fr));
    display: flex;
    flex-flow: wrap row;
    // gap: 40px;
    z-index: 1;

    h3 {
      margin: 0 129px 40px 0;
      font-weight: 400;
      font-size: 64px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #000000;
      max-width: 600px;
      min-width: 500px;

      @media (max-width: 992px) {
        margin: 0 0 40px 0;
      }
    }

    span {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #000000cc;
      max-width: 400px;
    }
  }

  .couple__media-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    @media (min-width: 1200px) {
      width: auto;
    }

    > img {
      width: 80vw;
      height: auto;

      @media (min-width: 1200px) {
        position: absolute;
        bottom: -30px;
        right: -100px;
      }

      @media (max-width: 992px) {
        width: 120vh; //70vw
        height: 70vh;
      }
    }

    .couple__link {
      background-color: #ebebeb;
      border-radius: 48.5517px;
      padding: 24px;
      cursor: pointer;
      z-index: 1;

      .svgavatar {
        transition: opacity 0.16s ease-in-out;
      }
    }
    .couple__link:hover {
      .svgavatar {
        opacity: 0.5;
      }
    }
  }
}
</style>
