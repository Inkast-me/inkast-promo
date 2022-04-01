<template>
  <div class="nav__wrapper">
    <div class="nav__logo">
      <img :src="require('@/assets/logo.svg')" alt="InKast" />
    </div>

    <div class="nav__links-wrapper">
      <a href="#product" class="nav__link">Продукт</a>
      <a href="#team" class="nav__link">Команда</a>
    </div>

    <div class="nav__additional">
      <div class="nav__language">ЕN</div>
      <button class="nav__join">Присоединиться</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav__wrapper {
  position: absolute;
  top: 40px;
  width: 100%;
  padding: 0 6vw;
  display: grid;
  place-items: center flex-start;
  grid: min-content / auto 1fr auto;
  gap: 32px;
  z-index: 1001;

  .nav__logo {
    height: 64px;
    width: 64px;
  }

  .nav__links-wrapper {
    display: flex;
    gap: 48px;

    .nav__link {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      text-decoration: none;

      &:hover,
      &.active {
        color: #ffffff;
      }

      &.disabled {
        color: #ffffff33;
      }
    }
  }

  .nav__additional {
    display: flex;
    gap: 12px;
    align-items: center;

    .nav__language {
      height: 40px;
      width: 40px;
      display: grid;
      place-items: center;

      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      cursor: pointer;
    }

    .nav__join {
      background: #292929;
      border-radius: 8px;
      padding: 12px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      border: none;
      cursor: pointer;

      &:hover {
        background: #343434;
      }
    }
  }
}
</style>
