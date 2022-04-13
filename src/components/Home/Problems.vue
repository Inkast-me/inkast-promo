<template>
  <section class="home__problems" @scroll="scrollHandler">
    <div class="problems__sticky">
      <h2 v-html="t('Home.problems.title')"></h2>
      <img
        :src="
          require(`@/assets/cards/problems/${t(
            `Home.problems.cards[${currentProblem}].image`
          )}.png`)
        "
        :alt="t(`Home.problems.cards[${currentProblem}].title`)"
      />
    </div>
    <div class="problems__scroll">
      <div
        class="scroll__wrapper"
        v-for="index in 3"
        :key="index"
        :data-problem-id="index - 1"
      >
        <div
          class="scroll__title"
          v-html="t(`Home.problems.cards[${index - 1}].title`)"
        ></div>
        <div
          class="scroll__description"
          v-html="t(`Home.problems.cards[${index - 1}].description`)"
        ></div>
        <div class="scroll__image">
          <img
            :src="
              require(`@/assets/cards/problems/${t(
                `Home.problems.cards[${index - 1}].image`
              )}_mini.png`)
            "
            :alt="t(`Home.problems.cards[${index - 1}].title`)"
          />
        </div>
      </div>
      <div class="scroll__wrapper_last">
        <div class="scroll__wrapper" :data-problem-id="3">
          <div
            class="scroll__title"
            v-html="t(`Home.problems.cards[3].title`)"
          ></div>
          <div
            class="scroll__description"
            v-html="t(`Home.problems.cards[3].description`)"
          ></div>
          <div class="scroll__image">
            <img
              :src="
                require(`@/assets/cards/problems/${t(
                  `Home.problems.cards[3].image`
                )}_mini.png`)
              "
              :alt="t(`Home.problems.cards[3].title`)"
            />
          </div>
        </div>
        <Button
          href="#follow"
          class="scroll__join"
          v-html="t('Home.problems.join')"
        ></Button>

        <div class="scroll__void"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Button from "@/components/Button.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Button,
  },

  setup() {
    const { t } = useI18n();

    const currentProblem = ref(0);

    const scrollHandler = (event: Event) => {
      document.querySelectorAll("[data-problem-id]").forEach((item) => {
        const el = event.target as HTMLElement;
        const elHeight = item.clientHeight;
        const elId = Number(item.getAttribute("data-problem-id"));
        const elTop = el.scrollTop;
        if (elTop >= elHeight * elId) {
          currentProblem.value = elId;
        }
      });
    };
    return {
      t,
      currentProblem,
      scrollHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.home__problems {
  display: grid;
  background: #292929;
  overflow-y: auto;
  position: relative;
  gap: 40px;
  min-height: 95vh !important;

  @media (min-width: 992px) {
    grid: min-content / repeat(2, 1fr);
    height: 76vh;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  .problems__sticky {
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;

    @media (min-width: 992px) {
      height: calc(76vh - 104px);
    }

    h2 {
      font-weight: 400;
      font-size: 26px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #ffffff;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 48px;
      }

      @media (min-width: 992px) {
        font-size: 56px;
      }
    }

    // TODO: fix size of big img like in a design. Also, fix a margin of imgs
    img {
      display: none;
      margin: 0 auto;
      height: 400px;

      @media (min-width: 992px) {
        display: block;
      }

      @media (min-width: 1200px) {
        height: 520px;
      }
    }
  }

  .problems__scroll {
    display: grid;
    gap: 16px;
    position: relative;

    .scroll__wrapper {
      width: 100%;
      padding: 24px;
      background: #393939;
      border-radius: 24px;
      display: grid;
      grid:
        "title image" min-content
        "description description" min-content / 1fr auto;
      align-items: center;
      gap: 24px;

      @media (min-width: 768px) {
        grid:
          "title image" min-content
          "description image" min-content / 1fr auto;
        align-items: flex-end;
        gap: 24px;
      }

      .scroll__title {
        grid-area: title;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        font-feature-settings: "pnum" on, "lnum" on;
        color: #ffffff;
        margin: 0;
        max-width: 520px;
      }

      .scroll__description {
        grid-area: description;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.06px;
        color: #ffffff99;
        max-width: 350px;
      }

      .scroll__image {
        grid-area: image;
        background: #292929;
        border-radius: 50.069px;
        height: 56px;
        width: 50px;
        display: grid;
        place-content: center;

        @media (min-width: 768px) {
          width: 108px;
          height: 120px;
        }

        img {
          height: 56px;

          @media (min-width: 768px) {
            height: 120px;
          }
        }
      }
    }

    .scroll__wrapper_last {
      @media (min-width: 992px) {
        height: calc(76vh + 120px);
        display: flex;
        flex-flow: column;
        gap: 16px;
      }
    }

    .scroll__join {
      transition: opacity 0.25s ease-in-out;
      background: #292929 url("../../assets/cards/problems/button.svg");
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 1;
      display: none;

      &.active {
        opacity: 1;
      }

      &.active:hover {
        opacity: 0.8;
      }

      @media (min-width: 992px) {
        display: initial;
      }
    }

    .scroll__void {
      height: auto;
      display: none;

      @media (min-width: 992px) {
        display: block;
      }
    }
  }
}
</style>
