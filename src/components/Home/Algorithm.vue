<template>
  <section class="algorithm">
    <h2 class="algorithm__title" v-html="t('Home.algorithm.title')"></h2>
    <div class="algorithm__wrapper">
      <div class="algorithm__step" data-step="1">
        <p v-html="t('Home.algorithm.step-1')"></p>
        <img
          :src="require('@/assets/cards/algorithm/step-1.png')"
          alt="Step 1"
        />
      </div>
      <div class="algorithm__step" data-step="2">
        <p v-html="t('Home.algorithm.step-2')"></p>
        <img
          :src="require('@/assets/cards/algorithm/step-2.png')"
          alt="Step 2"
        />
      </div>
      <div class="algorithm__step" data-step="3">
        <div class="algorithm__match" data-match="80">
          <span class="match__title">Match!</span>
          <span class="match__value">80%</span>
          <img
            :src="require('@/assets/cards/algorithm/match-80.png')"
            alt="Match 80%"
          />
        </div>
        <div class="algorithm__match" data-match="73">
          <span class="match__title">Match!</span>
          <span class="match__value">73%</span>
          <img
            :src="require('@/assets/cards/algorithm/match-73.png')"
            alt="Match 73%"
          />
        </div>

        <div class="match__description-wrapper">
          <p class="match__description" v-html="t('Home.algorithm.step-3')"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.algorithm {
  // background: #213278;
  display: flex;
  flex-flow: column;
  gap: 32px;
  position: relative;
  background: #213278 url("../../assets/cards/algorithm/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .algorithm__title {
    font-weight: 400;
    font-size: 30px;
    line-height: 91%;
    letter-spacing: -0.05em;
    color: #ffffff;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 64px;
    }

    @media (min-width: 1024px) {
      font-size: 96px;
    }
  }

  .algorithm__wrapper {
    display: grid;
    grid: min-content / 1fr;
    grid-auto-columns: 1fr;
    gap: 20px;
    position: relative;

    @media (min-width: 992px) {
      grid: min-content / repeat(2, minmax(400px, 1fr));
    }

    @media (min-width: 1400px) {
      padding-left: 180px;
    }

    &::before {
      content: "";
      height: 170px;
      width: 120px;
      background-image: url("../../assets/cards/algorithm/before.png"); //guy
      background-size: cover;
      position: absolute;
      display: none;

      @media (min-width: 1024px) {
        display: block;
        transform: scaleX(-1) translateY(-100%);
        top: 0;
        right: 0;
        height: 125px;
        width: 88px;
      }

      @media (min-width: 1400px) {
        transform: scaleX(1);
        top: 86px;
        left: 0;
        right: auto;
      }
    }
    &::after {
      content: "";
      height: 76px;
      width: 79px;
      background-image: url("../../assets/cards/algorithm/after.png"); //arrow
      background-size: cover;
      position: absolute;
      top: 105px;
      left: 102px;
      display: none;

      @media (min-width: 1400px) {
        display: block;
      }
    }

    .algorithm__step {
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 32px 76px 32px 24px;

      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      position: relative;

      @media (min-width: 768px) {
        font-size: 22px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
      }

      &::before {
        content: attr(data-step);
        height: 32px;
        width: 32px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 100px;

        display: grid;
        place-items: center;

        position: absolute;
        top: 6px;
        right: 6px;

        font-family: "Inter";
        letter-spacing: -0.06px;
        text-transform: capitalize;

        @media (min-width: 768px) {
          height: 44px;
          width: 44px;
          top: 16px;
          right: 16px;
        }
      }

      p {
        line-height: 1.2;
        @media (min-width: 576px) {
          font-size: 22px;
        }
      }

      &[data-step="1"] {
        p {
          margin: 0 0 38px;
          max-width: 370px;
        }

        img {
          width: 100%;
        }
      }
      &[data-step="2"] {
        p {
          margin: 0 0 50px;
          max-width: 440px;
        }

        img {
          width: 100%;
        }
      }
      &[data-step="3"] {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        @media (min-width: 768px) {
          grid-column: span 2;
        }

        .algorithm__match {
          border: 1px solid currentColor;
          border-radius: 16px;
          padding: 9px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 400;
          line-height: 95%;
          letter-spacing: -0.025em;
          font-feature-settings: "pnum" on, "lnum" on;
          width: 100%;
          margin-right: 16px;

          @media (min-width: 768px) {
            font-size: 48px;
            padding: 24px;
          }

          @media (min-width: 1200px) {
            max-width: 400px;
            margin-right: 0;
          }

          .match__title {
            color: currentColor;
          }

          .match__value {
            color: #ffffff;
          }

          img {
            height: 48px;
            width: 40px;
            margin-left: auto;

            @media (min-width: 992px) {
              height: 112px;
              width: 91px;
            }
          }

          &[data-match="80"] {
            color: #aedf7c;
          }

          &[data-match="73"] {
            color: #b78ff8;
          }
        }

        .match__description-wrapper {
          flex: 1 1 100%;

          .match__description {
            max-width: 400px;
          }
        }
      }
    }
  }
}
</style>
