<template>
  <nav
    class="nav__wrapper"
    :class="{ nav__wrapper_modal: openModal }"
    ref="header"
    @mouseenter="mouseEnterHandler"
  >
    <div class="content__wrapper">
      <router-link to="/" class="nav__logo">
        <img :src="require('@/assets/logo.svg')" alt="InKast" />
      </router-link>
      <div class="nav__links-wrapper">
        <router-link
          class="nav__link"
          :to="{
            name: $route.name != 'Survey' ? 'Survey' : 'Home',
          }"
        >
          <img :src="require('@/assets/survey/chevron.svg')" alt="Chevron" />
          <span>{{
            $route.name != "Survey" ? t("routes.Survey") : t("routes.Home")
          }}</span>
        </router-link>
      </div>
      <div
        class="nav__additional"
        :class="{
          'nav__additional-left': $route.name == 'Survey',
        }"
      >
        <img :src="require('@/assets/survey/me.svg')" alt="Me" />
        <span v-if="$route.name != 'Survey'">{{
          t(`routes.${$route.name}`)
        }}</span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const openModal = ref(false);
    const { t, availableLocales, locale } = useI18n();
    const yOffset = -24;

    const lastScroll = ref(0);
    const defaultOffset = 100;
    const header: Ref<null | HTMLElement> = ref(null);

    const mouseEnterHandler = () => {
      if (header.value) {
        header.value.classList.remove("hide");
        if (window.pageYOffset >= window.screen.height) {
          setTimeout(function () {
            header.value!.classList.add("hide");
          }, 5000);
        }
      }
    };
    const scrollHandler = () => {
      if (header.value) {
        const containHide = header.value.classList.contains("hide");
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        if (
          scrollPosition > lastScroll.value &&
          !containHide &&
          scrollPosition > defaultOffset
        ) {
          //scroll down
          header.value.classList.add("hide");
        } else if (scrollPosition < lastScroll.value && containHide) {
          //scroll up
          header.value.classList.remove("hide");
        }
        lastScroll.value = scrollPosition;
      }
    };

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

    onMounted(() => {
      document.addEventListener("scroll", scrollHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", scrollHandler);
    });

    return {
      openModal,
      switchLang,
      t,
      scrollIntoView,
      route,
      header,
      mouseEnterHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav__wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;

  .content__wrapper {
    padding: 16px 6vw;
    display: grid;
    place-items: center flex-start;
    grid: min-content / auto 1fr auto;
    gap: 4px;
    background: #000;
    transition: transform 0.2s ease-in-out;

    @media (min-width: 992px) {
      gap: 32px;
    }
  }

  &.hide .content__wrapper {
    transform: translateY(-100%);
  }

  &.nav__wrapper_modal {
    position: fixed;
    background: #000;
  }

  .nav__logo {
    display: none;
    height: 64px;
    width: 64px;

    @media (min-width: 992px) {
      display: flex;
    }
  }

  .nav__links-wrapper {
    gap: 48px;

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
      position: relative;
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        display: none;

        @media (min-width: 992px) {
          display: flex;
        }
      }

      &:hover,
      &.active {
        color: #ffffff33;
      }

      &.disabled {
        color: #ffffff33;
      }
    }
  }

  .nav__additional {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-self: center;

    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: #ffffff;

    &.nav__additional-left {
      justify-self: flex-end;
    }
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000;
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
