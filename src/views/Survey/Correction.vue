<template>
  <Header></Header>
  <section class="correction">
    <div class="correction__title correction__shine">
      <span>Что тебе ближе?</span>
    </div>

    <div class="correction__decisions">
      <div
        class="correction__decision correction__shine"
        v-for="letter in letters"
        :key="letter"
        @click="makeDecision(letter)"
      >
        <span>{{ t(`Survey.Personality Correction.${letter}`) }}</span>
      </div>
    </div>
  </section>
  <footer class="correction__navigation">
    <router-link
      :to="{
        name: 'Personality',
      }"
      custom
      v-slot="{ navigate }"
    >
      <Button
        class="navigation__button"
        data-variant="secondary"
        @click="activePage ? activePage-- : navigate()"
        >Назад</Button
      >
    </router-link>
  </footer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
  watchEffect,
} from "vue";

import Header from "@/components/Survey/Header.vue";
import Button from "@/components/Survey/Button.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import router from "@/router";

export default defineComponent({
  components: {
    Header,
    Button,
  },
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const missing_pers_type_steps = computed(
      () => store.state.missing_pers_type_steps
    );

    const activePage = ref(0);

    const makeDecision = (letter: string) => {
      store.commit("changePersType", {
        key: missing_pers_type_steps.value[activePage.value],
        value: letter,
      });

      activePage.value++;
    };

    const moveHandler = (e: PointerEvent) => {
      const shineEls = document.querySelectorAll(".correction__shine");

      shineEls.forEach((shineEl) => {
        // Not optimized yet, I know
        const rect = shineEl.getBoundingClientRect();

        shineEl.setAttribute(
          "style",
          `--x: ${e.clientX - rect.left}; --y: ${e.clientY - rect.top}`
        );
      });
    };

    watchEffect(() => {
      if (!missing_pers_type_steps.value[activePage.value])
        router.push({
          name: "Survey",
        });
    });

    onMounted(() => {
      document.addEventListener("pointermove", moveHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("pointermove", moveHandler);
    });

    return {
      t,
      letters: computed(() =>
        store.state.missing_pers_type_steps[activePage.value].split("/")
      ),
      makeDecision,
      activePage,
    };
  },
});
</script>

<style lang="scss" scoped>
.correction {
  width: 100%;
  min-height: calc(100vh - 134px);
  height: 100%;
  background: #000;
  padding: 104px 8px 64px;
  position: relative;
  display: grid;
  grid: min-content 1fr / 1fr;
  gap: 24px 32px;
  max-width: 1920px;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 106px 16px 64px;
  }

  @media (min-width: 992px) {
    padding: 106px 40px 32px;
  }

  .correction__title {
    background: #1c1c1c;
    border-radius: 40px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: #ffffff;

    text-align: center;

    padding: 24px;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 30px;
      padding: 45px;
    }
  }

  .correction__decisions {
    display: flex;
    gap: 24px 32px;
    flex-wrap: wrap;
    height: 100%;
  }

  .correction__decision {
    flex: 200px 1 1;
    height: 100%;
    cursor: pointer;

    font-weight: 400;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #ffffff;

    display: grid;
    place-items: center;

    background: #2e2d2d;
    border-radius: 40px;
  }

  .correction__shine {
    position: relative;
    --x-px: calc(var(--x) * 1px);
    --y-px: calc(var(--y) * 1px);
    --border: 2px;
    overflow: hidden;

    span {
      position: absolute;
      inset: var(--border);
      background-color: #1c1c1c;
      display: grid;
      place-items: center;
      border-radius: inherit;
      z-index: 3;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      inset: 0px;
      border-radius: inherit;
      background: radial-gradient(
        800px circle at var(--x-px) var(--y-px),
        rgba(255, 255, 255, 0.3),
        transparent 40%
      );
    }

    &:before {
      z-index: 1;
    }

    &:after {
      opacity: 0;
      z-index: 2;
      transition: opacity 0.4s ease;
    }

    &:hover:after {
      opacity: 1;
    }
  }
}
.correction__navigation {
  padding: 18px 16px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 32px 40px;
  }

  @media (min-width: 1200px) {
    padding: 40px 40px;
  }
}
</style>
