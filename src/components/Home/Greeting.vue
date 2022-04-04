<template>
  <section class="home__greeting">
    <h1>
      Привет! <br />
      Это InKast
    </h1>

    <div class="greeting__socials">
      <div class="greeting__vk">
        <img :src="require('@/assets/vk.png')" alt="Vkontakte" />
      </div>
      <div class="greeting__tg">
        <img :src="require('@/assets/tg.png')" alt="Telegram" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
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

  .greeting__vk img,
  .greeting__tg img {
    height: 64px;
    width: 64px;
  }
}
</style>
