<template>
  <nav class="nav__wrapper" :class="{ nav__wrapper_modal: openModal }">
    <router-link to="/" class="nav__logo">
      <img :src="require('@/assets/logo.svg')" alt="InKast" />
    </router-link>

    <div class="nav__links-wrapper">
      <router-link
        to="/#product"
        class="nav__link"
        v-html="t('Home.nav.product')"
        @click="scrollIntoView('#product')"
      ></router-link>
      <router-link
        to="/#team"
        class="nav__link"
        v-html="t('Home.nav.team')"
        @click="scrollIntoView('#team')"
      ></router-link>
      <router-link
        to="/donate"
        class="nav__link"
        v-html="t('Home.nav.donate')"
      ></router-link>
    </div>

    <div class="nav__additional">
      <div
        class="nav__language"
        @click="switchLang"
        v-html="t('Home.nav.language')"
      ></div>
      <router-link
        to="/#follow"
        class="nav__join"
        v-html="t('Home.nav.join')"
        @click="scrollIntoView('#follow')"
      ></router-link>
      <img
        @click="openModal = !openModal"
        class="nav__burger"
        :src="require(`@/assets/${openModal ? 'close' : 'burger'}.svg`)"
        alt="Изначально, наш проект назывался МетаСеть:)"
      />
    </div>
  </nav>

  <Transition name="modal">
    <div v-if="openModal" class="modal">
      <router-link
        to="/#product"
        class="nav__link"
        :class="{ active: route.hash == '#product' }"
        v-html="t('Home.nav.product')"
        @click="scrollIntoView('#product')"
      ></router-link>
      <router-link
        to="/#team"
        class="nav__link"
        :class="{ active: route.hash == '#team' }"
        v-html="t('Home.nav.team')"
        @click="scrollIntoView('#team')"
      ></router-link>
      <router-link
        to="/donate"
        class="nav__link"
        :class="{ active: route.name == 'Donate' }"
        v-html="t('Home.nav.donate')"
      ></router-link>
      <router-link
        to="/#follow"
        class="nav__join"
        v-html="t('Home.nav.join')"
        @click="scrollIntoView('#follow')"
      ></router-link>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const openModal = ref(false);
    const { t, availableLocales, locale } = useI18n();
    const yOffset = -24;

    const switchLang = () => {
      locale.value =
        locale.value == availableLocales[0]
          ? availableLocales[1]
          : availableLocales[0];

      localStorage.setItem("inkast:selectedLanguage", locale.value);
    };

    const scrollIntoView = (hash: string) => {
      openModal.value = false;
      const element = document.querySelector(hash);
      if (element) {
        const y =
          element?.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    return {
      openModal,
      switchLang,
      t,
      scrollIntoView,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav__wrapper {
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 40px 6vw 40px;
  display: grid;
  place-items: center flex-start;
  grid: min-content / auto 1fr auto;
  gap: 32px;
  z-index: 1001;
  background: #111111;

  &.nav__wrapper_modal {
    position: fixed;
    background: #111111;
  }

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
      text-decoration: none;
      transition: color 0.16s ease-in-out;
      display: inherit;
      color: #ffffff;

      &:hover,
      &.active {
        color: #ffffff33;
      }

      &.disabled {
        color: #ffffff33;
      }
    }

    .nav__link:nth-child(3)::after {
      content: "";
      display: inline-block;
      margin-bottom: 12px;
      width: 8px;
      height: 8px;
      background: #f6526b;
      border-radius: 100%;
    }
  }

  .nav__additional {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-self: flex-end;

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
      font-family: "Stratos LC Web";
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
      transition: background-color 0.16s ease-in-out;
      text-decoration: none;

      @media (min-width: 768px) {
        display: initial;
      }

      &:hover {
        background-color: #343434;
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
  padding: 156px 24px 24px;
  display: flex;
  flex-flow: column;
  gap: 44px;
  z-index: 1000;

  .nav__link {
    font-weight: 400;
    font-size: 56px;
    line-height: 91%;
    letter-spacing: -0.015em;
    color: #ffffff33;
    text-decoration: none;

    &:hover,
    &.active {
      color: #ffffff;
    }

    &.disabled {
      color: #ffffff33;
    }

    &:nth-child(3)::after {
      content: "";
      display: inline-block;
      margin-bottom: calc(0.9em - 16px);
      width: 16px;
      height: 16px;
      background: #f6526b;
      border-radius: 100%;
    }
  }

  .nav__join {
    margin-top: auto;
    background-color: #292929;
    border-radius: 8px;
    padding: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: background-color 0.16s ease-in-out;
    text-decoration: none;

    &:hover {
      background-color: #343434;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(100%);
}
</style>
