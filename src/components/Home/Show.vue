<template>
  <section class="home__show">
    <h2 class="show__header" v-html="t('Home.show.title')"></h2>

    <div class="show__wrapper">
      <Button
        href="#follow"
        class="show__button"
        v-html="t('Home.show.join')"
      ></Button>
      <div class="show__couple">
        <div class="couple_left">
          <img
            :src="require('@/assets/man.png')"
            alt="Приложении для поиска любимого человека"
          />
        </div>
        <div class="couple_right">
          <img
            :src="require('@/assets/woman.png')"
            alt="Приложении для поиска любимого человека"
          />
        </div>
        <a href="#follow" class="couple_join">
          <svg
            width="79"
            height="99"
            viewBox="0 0 79 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.34"
              d="M63.6414 78.1909C50.4414 96.1909 35.6414 98.6909 30.1414 98.6909C14.2534 98.6909 5.00494 80.5053 4.64143 66.6911C-0.85845 66.6911 -1.53845 46.8765 4.64143 45.1911C-1.8584 8.69107 46.6416 -17.3093 64.6414 15.1909C85.1414 17.1909 78.1414 46.6909 72.6414 57.1909C81.1662 57.1909 72.2621 83.3633 63.6414 78.1909Z"
              fill="#111111"
            />
            <path
              opacity="0.1"
              d="M51.6641 56.1704H41.1641V67.2329H36.5391V56.1704H26.0703V51.8267H36.5391V40.7642H41.1641V51.8267H51.6641V56.1704Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
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
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.home section {
  min-height: auto !important;
  margin-bottom: 32px;
}

.home__show {
  display: flex;
  flex-flow: column;
  gap: 32px;

  .show__header {
    font-weight: 400;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    max-width: 900px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 68px;
    }
  }

  .show__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;

    .show__button {
      background: #292929 url("../../assets/cards/problems/button.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .show__button:hover {
      opacity: 0.9;
    }

    .show__couple {
      display: flex;
      justify-content: space-between;

      .couple_left,
      .couple_right,
      .couple_join {
        padding: 11px 5px;
        border-radius: 71.0807px;
        min-width: 90px;
        display: grid;
        place-items: center;

        @media (min-width: 768px) {
          padding: 18px 8px;
          min-width: 150px;
        }

        img {
          height: 80px;

          @media (min-width: 768px) {
            height: 136px;
          }
          // width: 136px;
        }
      }

      .couple_left {
        background: #292929 url("../../assets/cards/show/left.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .couple_right {
        background: #292929 url("../../assets/cards/show/right.svg");
        background-position: right top;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .couple_join {
        padding: 20px;
        background: #292929;

        @media (min-width: 768px) {
          padding: 35px;
        }

        svg {
          width: 50px;
          height: 60px;

          @media (min-width: 768px) {
            width: 79px;
            height: 100px;
          }
        }
        svg path {
          transition: opacity 0.2s ease-in-out;
        }
      }

      .couple_join:hover {
        svg path:first-child {
          opacity: 0.6;
        }
        svg path:last-child {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
