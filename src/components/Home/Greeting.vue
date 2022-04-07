<template>
  <section class="home__greeting">
    <h1>
      Привет! <br />
      Это&nbsp;Inkast
    </h1>

    <div class="greeting__socials">
      <a href="https://vk.com/inkast_me" class="greeting__vk" target="_blank">
        <img :src="require('@/assets/vk.png')" alt="Vkontakte" />
      </a>
      <a href="https://t.me/inkast_me" class="greeting__tg" target="_blank">
        <img :src="require('@/assets/tg.png')" alt="Telegram" />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home__greeting {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 24px;
  padding-top: 54px;
  margin-bottom: 73px;
  padding-left: max(5vw, 9.861vw);
  padding-right: 34px;

  @media (min-width: 768px) {
    align-items: flex-end;
    flex-flow: row;
  }

  h1 {
    font-weight: 400;
    font-size: 144px;
    line-height: 93%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    user-select: none;
    // min-width: 6em;
    margin: 0;

    @media (max-width: 992px) {
      font-size: 104px;
    }

    @media (max-width: 360px) {
      font-size: 104px;
    }
  }

  .greeting__socials {
    display: flex;
    gap: 24px;

    a {
      transition: transform 0.2s ease-in-out;
    }

    a:hover {
      transform: scale(0.95);
    }
  }

  .greeting__vk img,
  .greeting__tg img {
    height: 64px;
    width: 64px;
  }
}
</style>
