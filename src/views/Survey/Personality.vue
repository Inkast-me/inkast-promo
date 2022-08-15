<template>
  <Header></Header>
  <section class="personality">
    <div class="questions__wrapper">
      <Question
        v-for="key in Object.keys(personality)"
        :key="key"
        :modelValue="personality[key][activePage - 1]"
        @update:modelValue="
          (value) =>
            store.commit('changePersonality', {
              key: key,
              index: activePage - 1,
              value: value,
            })
        "
        :label-left="t(`Survey.Personality[${activePage - 1}].${key}.left`)"
        :label-right="t(`Survey.Personality[${activePage - 1}].${key}.right`)"
      ></Question>
    </div>
  </section>
  <Navigation
    :total-pages="totalPages"
    :active-page="activePage"
    @back="activePage > 0 ? activePage-- : 0"
    @forward="activePage < totalPages ? activePage++ : totalPages"
    @submit="submitHandler"
  ></Navigation>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

import Header from "@/components/Survey/Header.vue";
import Navigation from "@/components/Survey/Navigation.vue";
import Question from "@/components/Survey/Question.vue";
import { useStore } from "vuex";
import router from "@/router";

export default defineComponent({
  components: {
    Header,
    Navigation,
    Question,
  },
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const totalPages = ref(4);

    const activePage = ref(1);

    const personality = computed(() => store.state.personality);

    const submitHandler = () => {
      store.dispatch("getTypeOfPersonality");

      if (store.state.missing_pers_type_steps.length) {
        router.push({
          name: "Personality Correction",
        });
      } else {
        router.push({
          name: "Compability",
        });
      }
    };

    return {
      t,
      totalPages,
      activePage,
      personality,
      store,
      submitHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.personality {
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

  .questions__wrapper {
    background: #1c1c1c;
    border-radius: 40px;
    padding: 24px;
    display: flex;
    flex-flow: column;
    gap: 40px;
    justify-content: center;
  }
}
</style>
