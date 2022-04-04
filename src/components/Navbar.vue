<template>
  <nav class="nav__wrapper">
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
      <img @click="openModal = !openModal" class="nav__burger" :src="require('@/assets/burger.svg')" alt="Изначально, наш проект назывался МетаСеть:)">
    </div>
  </nav>

    <Transition name="modal">
      <div v-if="openModal" class="modal">
          <div @click="openModal = !openModal" class="modal__close">Close</div>

          <a href="#product" class="nav__link">Продукт</a>
          <a href="#team" class="nav__link">Команда</a>

          <div class="nav__language">ЕN</div>
          <button class="nav__join">Присоединиться</button>
      </div>
    </Transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const openModal = ref(false)

    return {
      openModal
    }
  },
})
</script>


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
    display: none;
    gap: 48px;

    @media (min-width: 768px) {
      display: flex;
    }

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
      display: none;
      place-items: center;

      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      cursor: pointer;

      @media (min-width: 768px) {
        display: grid;
      }
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
      display: none;

      @media (min-width: 768px) {
        display: initial;
      }

      &:hover {
        background: #343434;
      }
    }

    .nav__burger {
      display: block;
      cursor: pointer;
      margin-right: auto;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #111111;
  padding: 24px;
  display: grid;
  gap: 24px;
  z-index: 1001;

  .modal__close {
    color: #FFFFFF;
    justify-self: flex-end;
  }

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

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(100%)
}
</style>
