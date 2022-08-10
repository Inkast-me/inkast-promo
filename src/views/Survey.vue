<template>
  <Header></Header>
  <section class="survey">
    <h2>
      <mark>Это анкета.</mark> Чтобы Мэтч работал<br />нужно пройти тест на тип
      личности
    </h2>

    <div class="cards__wrapper">
      <router-link
        v-for="(route, num) in cards"
        :key="route"
        custom
        v-slot="{ navigate }"
        :to="{
          name: route,
        }"
      >
        <div
          class="card__wrapper"
          :class="{
            locked:
              route != 'Personality' &&
              (route == 'Compability'
                ? isPersonalityNotFilled
                : isCompabilityNotFilled),
          }"
          @click="navigate"
        >
          <h3>{{ t(`routes.${route}`) }}</h3>
          <span class="card__number">{{ num + 1 }}</span>

          <div class="card__image">
            <img
              class="card__image-fill"
              :src="require(`@/assets/survey/${route}.svg`)"
              alt=""
            />
            <img
              class="card__image-stroke"
              :src="require(`@/assets/survey/${route}_stroke.svg`)"
              alt=""
            />
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import Header from "@/components/Survey/Header.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const pers_type = computed(() => Object.values(store.state.pers_type));

    const cards = ["Personality", "Compability", "Interests"];

    return {
      t,
      cards,
      isPersonalityNotFilled: computed(
        () => pers_type.value.filter((v) => !v).length
      ),
      isCompabilityNotFilled: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.survey {
  width: 100%;
  min-height: 100vh;
  background: #000;
  padding: 104px 8px 64px;
  position: relative;
  display: grid;
  gap: 32px;
  max-width: 1920px;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 144px 16px 64px;
  }

  @media (min-width: 992px) {
    padding: 144px 64px 32px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -0.025em;
    color: rgba(#ffffff, 0.6);
    margin: 0;

    mark {
      background-color: transparent;
      color: rgba(#ffffff, 1);
    }
  }

  .cards__wrapper {
    --min-width: 250px;
    margin-top: auto;
    display: grid;
    grid: minmax(var(--min-width), 1fr) / repeat(
        auto-fit,
        minmax(var(--min-width), auto)
      );
    grid-auto-rows: 1fr;
    grid-auto-columns: 100%;
    gap: 16px 20px;

    @media (min-width: 520px) {
      --min-width: 380px;
    }

    .card__wrapper {
      background: #1c1c1c;
      border-radius: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      overflow: hidden;

      width: 100%;
      min-height: 400px;
      position: relative;

      &.locked {
        pointer-events: none;
        // cursor: no-drop;/

        &::after {
          content: "";
          position: absolute;
          inset: 0;

          height: 100%;
          width: 100%;

          background: linear-gradient(
            180deg,
            rgba(28, 28, 28, 0) 29.29%,
            #1c1c1c 83.36%
          );

          @media (min-width: 768px) {
            background: linear-gradient(
              180deg,
              rgba(28, 28, 28, 0) 0%,
              #1c1c1c 76.47%
            );
          }
        }

        &::before {
          content: "";

          position: absolute;
          bottom: 32px;
          left: 32px;

          width: 32px;
          height: 44px;
          background-image: url("../assets/survey/lock.svg");
          background-size: contain;
          background-repeat: no-repeat;
          z-index: 2;

          @media (min-width: 768px) {
            left: 50%;

            transform: translateX(-50%);
          }
        }

        .card__image-fill {
          opacity: 0 !important;
        }

        .card__image-stroke {
          opacity: 1 !important;
        }
      }

      h3 {
        flex: 0 0 50%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 120.6%;
        letter-spacing: -0.025em;
        color: #ffffff;
        margin: 16px 0 0 16px;

        @media (min-width: 768px) {
          font-size: 40px;
          margin: 32px 0 0 32px;
        }
        @media (min-width: 1400px) {
          font-size: 32px;
        }
      }

      .card__number {
        flex: 0 0 auto;
        display: grid;
        place-items: center;

        height: 22px;
        width: 22px;

        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);

        margin-left: auto;
        margin-right: 12px;
        margin-top: 12px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 140%;
        letter-spacing: -0.06px;
        text-transform: capitalize;

        color: #ffffff;

        @media (min-width: 768px) {
          height: 44px;
          width: 44px;

          margin-right: 20px;
          margin-top: 20px;

          font-size: 20px;
        }
      }

      .card__image {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;

        .card__image-fill,
        .card__image-stroke {
          position: absolute;
          left: 0;
          top: 0;
          transition: opacity 0.25s ease-in-out;
          height: 100%;
          width: 100%;
        }
        .card__image-fill {
          opacity: 1;
        }

        .card__image-stroke {
          opacity: 0;
        }

        @media (min-width: 768px) {
          .card__image-fill {
            opacity: 0;
          }

          .card__image-stroke {
            opacity: 1;
          }
          &:hover {
            .card__image-fill {
              opacity: 1;
            }

            .card__image-stroke {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
