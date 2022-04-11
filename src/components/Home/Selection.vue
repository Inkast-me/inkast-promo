<template>
  <section class="home__selection" id="product">
    <h3 v-html="t('Home.selection.title')"></h3>
    <Button href="#follow" v-html="t('Home.selection.join')"></Button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "@/components/Button.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  }
});
</script>

<style lang="scss" scoped>
.home__selection {
  background: #d172fd url("../../assets/cards/selection.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  background-position: bottom right;

  h3 {
    margin: 0;
    font-weight: 400;
    font-size: 32px;
    line-height: 111%;
    letter-spacing: -0.05em;
    color: #ffffff;
    max-width: 9.5em;

    @media (min-width: 768px) {
      font-size: 64px;
    }
  }
}
</style>
