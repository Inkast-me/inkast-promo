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

    <div class="footer__progress" v-if="typeof progress == 'number'">
      <progress :value="progress" max="100"></progress>

      <p>{{progress}}%</p>
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
          :class="{
            disabled: disabled,
          }"
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
          disabled: disabled,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: null,
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

  .footer__progress {
    padding: 0 21px 17px;
    display: flex;
    flex-flow: column;
    gap: 12px;

    progress {
      -webkit-appearance: none;
      appearance: none;

      width: 180px;
      height: 12px;

      &::-webkit-progress-bar {
        background: #1C1C1C;
        border-radius: 86.6418px;
      }

      &::-webkit-progress-value {
        transform: all .2s ease-in-out;
        background-color: #CC5FFF;
        border-radius: 86.6418px;
      }
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 120.6%;
      letter-spacing: -0.015em;
      color: #FFFFFF;
      margin: 0;
    }
  }

  .footer__buttons-wrapper {
    margin-left: auto;
    display: flex;
    gap: 16px;
  }
}
</style>
