import { valueToNode } from "@babel/types";
<template>
  <Header></Header>
  <section class="compability">
    <div class="compability__wrapper">
      <div class="compability__title">
        <h2>
          {{
            t(`Survey.Compability.${compability_pages[activePage - 1]}_title`)
          }}
        </h2>
        <span>{{ t(`Survey.Compability.at_least`, minimum_amount) }}</span>
      </div>

      <div class="intrestings">
        <div class="intrestings__wrapper">
          <div
            class="wrapper__interest"
            :class="{
              active: current_array.includes(interest.code),
            }"
            v-for="interest in translates.Compability[
              compability_pages[activePage - 1]
            ]"
            :key="interest.code"
            @click="onClickHandler(interest)"
          >
            <img
              :src="require(`@/assets/emoji/${interest.image}.png`)"
              :alt="interest.text"
            />
            <span v-html="interest.text"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Navigation
    :total-pages="totalPages"
    :active-page="activePage"
    :disabled="store.state[compability_pages[activePage - 1]].length < 3"
    @back="activePage > 0 ? activePage-- : 0"
    @forward="activePage < totalPages ? activePage++ : totalPages"
    @submit="submitHandler"
  ></Navigation>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import Header from "@/components/Survey/Header.vue";
import Navigation from "@/components/Survey/Navigation.vue";
import { useStore } from "vuex";
import router from "@/router";
import { listsTranslate } from "@/locales/arrays/index";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default defineComponent({
  components: {
    Header,
    Navigation,
  },
  setup() {
    const { t, locale } = useI18n();

    const store = useStore();

    const compability_pages = ["describes", "qualities"] as const;
    const minimum_amount = 3;
    let interest_sections_array = [] as string[];

    const totalPages = ref(compability_pages.length);

    const activePage = ref(1);

    const current_array = computed(
      () => store.state[compability_pages[activePage.value - 1]]
    );
    const translates = computed(
      () => listsTranslate[locale.value as "ru-RU" | "en-US"]
    );

    const submitHandler = () => {
      router.push({
        name: "Survey",
      });
    };

    const onClickHandler = (item: any) => {
      store.commit(
        `toggle${capitalizeFirstLetter(
          compability_pages[activePage.value - 1]
        )}`,
        {
          value: item.code,
        }
      );

      if (compability_pages[activePage.value - 1] == compability_pages[0])
        if (current_array.value.includes(item.code)) {
          interest_sections_array.push(item.section);
        } else {
          const index = interest_sections_array.indexOf(item.section);
          if (index > -1) {
            interest_sections_array.splice(index, 1);
          }
        }
    };

    watch(activePage, () => {
      store.commit("changeInterestSections", {
        value: [...new Set(interest_sections_array)],
      });
    });

    return {
      t,
      compability_pages,
      minimum_amount,
      totalPages,
      activePage,
      current_array,
      store,
      submitHandler,
      translates,
      onClickHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.compability {
  width: 100%;
  min-height: calc(100vh - 114px);
  height: 100%;
  background: #000;
  padding: 104px 8px 64px;
  position: relative;
  display: grid;
  gap: 32px;
  max-width: 1920px;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 106px 16px 64px;
  }

  @media (min-width: 992px) {
    padding: 106px 40px 32px;
  }

  .compability__wrapper {
    --pr: 16px;
    --pt: 24px;
    background: #1c1c1c;
    border-radius: 40px;
    padding: var(--pt) 0 var(--pt) var(--pr);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 40px;

    @media (min-width: 576px) {
      --pr: 32px;
      --pt: 42px;
    }

    @media (min-width: 992px) {
      --pr: 40px;
      --pt: 54px;
    }

    .compability__title {
      display: flex;
      gap: 12px 16px;
      flex-wrap: wrap;
      padding-right: var(--pr);

      h2 {
        font-weight: 400;
        font-size: 18px;
        line-height: 110%;
        letter-spacing: -0.025em;
        color: #ffffff;
        margin: 0;

        @media (min-width: 768px) {
          font-size: 30px;
          line-height: 120%;
        }
      }

      span {
        margin-top: auto;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: -0.025em;
        color: rgba(#ffffff, 0.4);
      }
    }

    .intrestings {
      overflow-x: auto;
      padding-right: var(--pr);
      max-width: calc(100vw - 2 * var(--pr));
      .intrestings__wrapper {
        display: flex;
        flex-wrap: wrap;
        min-width: 200vw;
        align-items: center;
        --gap: 12px 8px;
        gap: var(--gap);
        @media (min-width: 576px) {
          --gap: 24px;
          min-width: 150vw;
        }
        @media (min-width: 768px) {
          --gap: 28px;
          min-width: 100%;
        }
      }
      .wrapper__interest {
        white-space: nowrap;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        color: #ffffff;

        padding: 10px 12px;

        background: #1c1c1c;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 80px;

        display: flex;
        gap: 8px;
        align-items: center;

        cursor: pointer;
        transition: background 0.2s ease-in, color 0.2s ease-in;

        &:hover,
        &.active {
          background: #ffffff;
          color: #1c1c1c;
        }

        @media (min-width: 768px) {
          font-size: 20px;
          padding: 14px 28px;
          gap: 12px;
        }

        img {
          height: 18px;
          width: 18px;

          @media (min-width: 576px) {
            height: 33px;
            width: 33px;
          }
        }
      }
    }
  }
}
</style>
