<template>
    <Navbar />
  <div class="home">

    <section class="home__greeting">
      <h1>Привет! <br> Это InKast</h1>

      <div class="greeting__socials">
        <div class="greeting__vk">
          <img :src="require('@/assets/vk.png')" alt="Vkontakte">
        </div>
        <div class="greeting__tg">
          <img :src="require('@/assets/tg.png')" alt="Telegram">
        </div>
      </div>
    </section>

    <section class="home__selection">
      <h3>Подбираем людей по&nbsp;интересам, целям, любимым занятиям и&nbsp;даже характеру</h3>
      <Button>Присоединиться</Button>
    </section>

    <section class="home__couple">
      <div class="couple__text-wrapper">
        <h3>Где-то на&nbsp;земле существует человек, который создан именно для тебя</h3>
        <span>И&nbsp;вы&nbsp;еще не&nbsp;знаете о&nbsp;существовании друг друга</span>
      </div>
      <div class="couple__media-wrapper">
        <img :src="require('@/assets/cards/couple.png')" alt="Couple in Russia">
        <div class="couple__link">
          <img :src="require('@/assets/join.svg')" alt="Je na mange pas six jours!">
        </div>
      </div>
    </section>

    <section class="home__intrestings">
      <div class="intrestings__text-wrapper">
        <h3>Представьте<br>Может быть, вы&nbsp;оба...</h3>
        <div class="intrestings__more">
          +95 интересов
        </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Button from '@/components/Button.vue'

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Button
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background: #111111;
  padding: 104px 64px 32px;
  position: relative;
  display: grid;
  gap: 32px;

  .home__greeting {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    padding-top: 40px;
    margin-bottom: 64px;
    flex-wrap: wrap;

    h1 {
      margin: 0 auto;
      font-weight: 400;
      font-size: 48px;
      line-height: 93%;
      letter-spacing: -0.025em;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #FFFFFF;
      user-select: none;
      min-width: 6em;

      @media (min-width: 768px) {
        font-size: 144px;
      }

      @media (min-width: 360px) {
        font-size: 104px;
      }
    }

    .greeting__socials {
      display: flex;
      gap: 24px;
    }

    .greeting__vk img, .greeting__tg img {
      height: 64px;
      width: 64px;
    }
  }

  section + section {
    width: 100%;
    min-height: 76vh;
    border-radius: 24px;
    padding: 48px 40px 64px;
  }

  .home__selection {
    background: #D172FD url('../assets/cards/selection.svg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    background-position: bottom right;

    h3 {
      margin: 0;
      font-weight: 400;
      font-size: 32px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #FFFFFF;
      max-width: 9.5em;

      @media (min-width: 768px) {
        font-size: 64px;
      }
    }
  }

  .home__couple {
    background: #FFFFFF;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
    gap: 40px;

    .couple__text-wrapper {
      display: grid;
      width: 100%;
      grid: min-content / repeat(auto-fit, minmax(500px, 1fr));
      gap: 40px;

      h3 {
        margin: 0;
        font-weight: 400;
        font-size: 64px;
        line-height: 111%;
        letter-spacing: -0.05em;
        color: #000000;
        max-width: 600px;
        min-width: 500px;
      }

      span {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        font-feature-settings: 'pnum' on, 'lnum' on;
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
        width: 120vh; //70vw
        height: 70vh;

        @media (min-width: 1200px) {
          position: absolute;
          bottom: -30px;
          right: -100px;
        }
      }

      .couple__link {
        background: #EBEBEB;
        border-radius: 48.5517px;
        padding: 24px;
        cursor: pointer;
        z-index: 1;
      }
    }
  }

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
        font-family: 'Stratos LC Web';
        font-style: normal;
        font-weight: 400;
        font-size: 104px;
        line-height: 95%;
        letter-spacing: -0.025em;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
      }

      .intrestings__more {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 100px;
        padding: 24px;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.06px;
        text-transform: capitalize;
        color: #FFFFFF
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
          font-family: 'Stratos LC Web';
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 118%;
          font-feature-settings: 'pnum' on, 'lnum' on;
          color: #FFFFFF;

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
}
</style>
