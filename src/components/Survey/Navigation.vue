<template>
  <footer>
    <div class="footer__pages-wrapper" v-if="totalPages">
      <div class="pages__bubles-wrapper">
        <div
          class="buble"
          v-for="num in totalPages"
          :key="num"
          :class="{
            active: num == activePage,
            passed: num <= activePage,
          }"
        ></div>
      </div>
      <p>{{ activePage }}/{{ totalPages }}</p>
    </div>

    <div class="footer__buttons-wrapper">
      <template v-if="totalPages">
        <Button
          data-variant="secondary"
          v-if="activePage > 1"
          @click="$emit('back')"
          >Назад</Button
        >
        <Button
          data-variant="primary"
          v-if="activePage < totalPages"
          @click="$emit('forward')"
          >Далее</Button
        >
      </template>
      <Button
        data-variant="primary"
        v-if="activePage == totalPages"
        :class="{
          'button__w-100--mobile': !totalPages,
        }"
        @click="$emit('submit')"
        >Завершить</Button
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import Button from "@/components/Survey/Button.vue";

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      default: 0,
    },
    activePage: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Button,
  },
  emits: ["back", "forward", "submit"],
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-content: center;

  padding: 24px 8px 24px 16px;

  @media (min-width: 768px) {
    padding: 24px 40px 24px 40px;
  }

  .footer__pages-wrapper {
    padding: 0 8px;

    display: flex;
    flex-flow: column;
    gap: 4px;
    @media (min-width: 768px) {
      padding: 0 16px 16px;
      gap: 12px;
    }

    .pages__bubles-wrapper {
      display: flex;
      gap: 12px;

      .buble {
        height: 14px;
        width: 14px;
        border-radius: 86.6418px;
        background: #292929;

        transition: all 0.25s ease-in-out;

        &.passed {
          background: #ffffff;
        }

        &.active {
          width: 35px;
        }
      }
    }

    p {
      margin: 0;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 120.6%;
      letter-spacing: -0.015em;
      color: #ffffff;
    }
  }

  .footer__buttons-wrapper {
    margin-left: auto;
    display: flex;
    gap: 16px;
  }
}
</style>
