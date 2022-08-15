import { valueToNode } from "@babel/types";
<template>
  <Header></Header>
  <section class="compability">
    <div
      class="compability__wrapper"
      v-for="interest in current_array"
      :key="interest"
    >
      <div class="compability__title">
        <img
          :src="
            require(`@/assets/emoji/${translates.Interests[interest].image}.png`)
          "
          :alt="translates.Interests[interest].title"
        />
        <h2>{{ translates.Interests[interest].title }}</h2>
      </div>

      <div class="intrestings">
        <div class="intrestings__wrapper">
          <template
            v-for="point in translates.Interests[interest].points"
            :key="point"
          >
            <template v-if="point.subtitle">
              <h3>{{ point.subtitle }}</h3>
            </template>

            <template v-if="point.subpoints">
              <div
                v-for="subpoint in point.subpoints"
                :key="subpoint"
                class="wrapper__interest"
                :class="{
                  active: interests.includes(
                    `${interest}-${subpoint.code}`
                  ),
                }"
                @click="
                  onClickHandler(
                    `${interest}-${subpoint.code}`,
                    interest
                  )
                "
              >
                <span v-html="subpoint.label"></span>
              </div>
            </template>

            <template v-else>
              <div
                class="wrapper__interest"
                :class="{
                  active: interests.includes(`${interest}-${point.code}`),
                }"
                @click="onClickHandler(`${interest}-${point.code}`, interest)"
              >
                <span v-html="point.label"></span>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </section>
  <Navigation
    :progress="progress"
    @submit="submitHandler"
  ></Navigation>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import Header from "@/components/Survey/Header.vue";
import Navigation from "@/components/Survey/Navigation.vue";
import { useStore } from "vuex";
import router from "@/router";
import { listsTranslate } from "@/locales/arrays/index";

import { toggle } from '@/store'

export default defineComponent({
  components: {
    Header,
    Navigation
  },
  setup() {
    const { t, locale } = useI18n();

    const store = useStore();

    const minimum_amount = 1;

    const translates = computed(
      () => listsTranslate[locale.value as "ru-RU" | "en-US"]
    );
    const current_array = computed(() => store.state.interest_sections);
    const interests = computed(() => store.state.interests);

    const selected_sections = ref<string[]>([])

    const submitHandler = () => {
      router.push({
        name: "Survey",
      });
    };

    const onClickHandler = (item: any, section: string) => {
      store.commit(`toggleInterests`, {
        value: item,
      });

      if (interests.value.includes(item))
        selected_sections.value.push(section)
      else {
        const index = selected_sections.value.indexOf(section);
        if (index > -1) {
          selected_sections.value.splice(index, 1);
        }
      }
    };

    return {
      t,
      minimum_amount,
      current_array,
      interests,
      store,
      submitHandler,
      translates,
      onClickHandler,
      selected_sections,
      progress: computed(() => Math.ceil(new Set(selected_sections.value).size / current_array.value.length * 100))
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
  gap: 28px;
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

      img {
        height: 18px;
        width: 18px;

        @media (min-width: 576px) {
          height: 33px;
          width: 33px;
        }
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

      h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: -0.015em;
        color: #ffffff;
        opacity: 0.4;
        flex: 0 0 100%;
        margin: 0;
        margin-bottom: -4px;

        @media (min-width: 768px) {
          font-size: 26px;
          margin-bottom: -10px;
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
      }
    }
  }
}
</style>
