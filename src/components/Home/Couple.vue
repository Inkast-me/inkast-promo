<template>
  <section class="home__couple">
    <div class="couple__text-wrapper">
      <h3>
        Где-то на&nbsp;земле существует человек, который создан именно для тебя
      </h3>
      <span
        >И&nbsp;вы&nbsp;еще не&nbsp;знаете о&nbsp;существовании друг друга</span
      >
    </div>
    <div class="couple__media-wrapper">
      <img :src="require('@/assets/cards/couple.png')" alt="Couple in Russia" />
      <div class="couple__link">
        <img
          :src="require('@/assets/join.svg')"
          alt="Je na mange pas six jours!"
        />
      </div>
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
      width: 120vh; //70vw
      height: 70vh;

      @media (min-width: 1200px) {
        position: absolute;
        bottom: -30px;
        right: -100px;
      }
    }

    .couple__link {
      background: #ebebeb;
      border-radius: 48.5517px;
      padding: 24px;
      cursor: pointer;
      z-index: 1;
    }
  }
}
</style>
