<template>
  <section class="home__greeting">
    <div class="greetings__ifno">
      <h1>
        <span v-html="t('Home.greeting.hello')"></span> <br />
        <span v-html="t('Home.greeting.inkast')"></span>
      </h1>
      <span v-html="t('Home.greeting.slogan')" class="slogan"></span>
    </div>
    <div class="greeting__socials">
      <a href="https://vk.com/inkast_me" class="greeting__vk" target="_blank">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30.72C0 16.2384 0 8.99768 4.49884 4.49884C8.99768 0 16.2384 0 30.72 0H33.28C47.7616 0 55.0023 0 59.5012 4.49884C64 8.99768 64 16.2384 64 30.72V33.28C64 47.7616 64 55.0023 59.5012 59.5012C55.0023 64 47.7616 64 33.28 64H30.72C16.2384 64 8.99768 64 4.49884 59.5012C0 55.0023 0 47.7616 0 33.28V30.72Z"
            fill="#0077FF"
          />
          <path
            d="M34.054 46.1068C19.4673 46.1068 11.1474 36.1068 10.8008 19.4668H18.1074C18.3474 31.6801 23.734 36.8535 28.0006 37.9201V19.4668H34.8809V30.0001C39.0942 29.5468 43.5204 24.7468 45.0137 19.4668H51.8938C50.7472 25.9735 45.9472 30.7735 42.5339 32.7468C45.9472 34.3468 51.4141 38.5335 53.4941 46.1068H45.9205C44.2938 41.0401 40.2409 37.1201 34.8809 36.5868V46.1068H34.054Z"
            fill="white"
          />
        </svg>
      </a>
      <a href="https://t.me/inkast_me" class="greeting__tg" target="_blank">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
            fill="url(#paint0_linear_1048_11792)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4867 31.6621C23.8153 27.5978 30.0359 24.9183 33.1484 23.6237C42.0351 19.9274 43.8817 19.2853 45.0853 19.2641C45.35 19.2595 45.9419 19.3251 46.3253 19.6362C46.649 19.8989 46.7381 20.2537 46.7807 20.5028C46.8233 20.7518 46.8764 21.3192 46.8342 21.7625C46.3526 26.8225 44.2689 39.1017 43.2088 44.7689C42.7602 47.1669 41.8769 47.971 41.0219 48.0496C39.1636 48.2206 37.7525 46.8215 35.9526 45.6417C33.1362 43.7955 31.5451 42.6463 28.8113 40.8447C25.6519 38.7627 27.7 37.6184 29.5005 35.7483C29.9717 35.2589 38.1594 27.8115 38.3179 27.1359C38.3377 27.0514 38.3561 26.7365 38.169 26.5702C37.9819 26.4039 37.7057 26.4607 37.5065 26.506C37.224 26.5701 32.7247 29.5439 24.0087 35.4275C22.7316 36.3045 21.5748 36.7317 20.5384 36.7094C19.3958 36.6847 17.198 36.0633 15.5641 35.5322C13.5601 34.8808 11.9674 34.5364 12.1061 33.4301C12.1783 32.8538 12.9718 32.2645 14.4867 31.6621Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1048_11792"
              x1="32"
              y1="0"
              x2="32"
              y2="63.5253"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2AABEE" />
              <stop offset="1" stop-color="#229ED9" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a href="https://www.youtube.com/@inkast_me" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="57"
          fill="none"
        >
          <path
            fill="red"
            d="M78.965 8.896a10.018 10.018 0 0 0-7.073-7.073C65.656.151 40.64.151 40.64.151S15.622.15 9.386 1.823a10.018 10.018 0 0 0-7.072 7.073C.64 15.132.64 28.15.64 28.15s0 13.018 1.673 19.255a10.017 10.017 0 0 0 7.072 7.072C15.622 56.15 40.64 56.15 40.64 56.15s25.017 0 31.253-1.673a10.017 10.017 0 0 0 7.073-7.072c1.672-6.236 1.672-19.255 1.672-19.255s-.006-13.02-1.672-19.255Z"
          />
          <path
            fill="#fff"
            d="m32.632 40.15 20.783-11.998-20.783-11.998V40.15Z"
          />
        </svg>
      </a>
    </div>
    <img
      src="@/assets/cards/maskot.png"
      alt="Маскот приложения по поиску друзей Инкаст "
      class="maskot"
    />
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
.home__greeting {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 24px;
  padding-top: 54px;
  margin-bottom: 56px;
  padding-left: min(5vw, 9.861vh);
  padding-right: 34px;

  @media (min-width: 768px) {
    // align-items: flex-end;
    flex-flow: wrap column;
    gap: 40px;
    margin-bottom: 72px;
  }

  h1 {
    font-weight: 400;
    font-size: 48px;
    line-height: 93%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    margin: 0;
    margin-bottom: 18px;

    @media (min-width: 576px) {
      font-size: 104px;
    }

    @media (min-width: 992px) {
      font-size: 144px;
    }
  }

  .greeting__socials {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      transition: transform 0.2s ease-in-out;
    }

    a:hover {
      transform: scale(0.95);
    }
  }

  .maskot {
    height: 40.792vw;
    position: absolute;
    right: 0;
    bottom: -34.8%;

    @media (max-width: 576px) {
      display: none;
    }
  }

  .greeting__vk img,
  .greeting__tg img {
    height: 64px;
    width: 64px;
  }

  .greeting__tg {
    order: 2;
  }

  .greeting__vk {
    order: 3;
  }

  .slogan {
    opacity: 0.4;
    padding-left: 0;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    display: block;
    max-width: 320px;

    @media (min-width: 576px) {
      padding-left: 8px;
      font-size: 28px;
      max-width: none;
    }
  }
}
</style>
