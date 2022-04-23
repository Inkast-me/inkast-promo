<template>
  <section class="next">
    <h2 class="next__header" v-html="t('Home.next.title')"></h2>
    <div class="next__wrapper">
      <div
        class="next__description"
        v-html="t('Home.next.description')"
      ></div>
      <img :src="require(`@/assets/cards/next/${t('Home.next.image')}.png`)" alt="">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  },
})
</script>

<style lang="scss" scoped>
.next {
  background: #292929;;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  gap: 32px;

  .next__header {
    margin: 0;
    font-weight: 400;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #FFFFFF;
    padding-bottom: 16px;
    border-bottom: 1px solid #ffffff1a;
    font-size: 30px;

    @media (min-width: 768px) {
      font-size: 64px;
      padding-bottom: 40px;
    }

    @media (min-width: 992px) {
      font-size: 96px;
    }
  }

  .next__wrapper {
    display: grid;
    grid: min-content / repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;

    .next__description {
      margin-top: 16px;

      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.06px;
      color: #FFFFFF;
      max-width: 460px;

      @media (min-width: 768px) {
        font-size: 20px;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>

