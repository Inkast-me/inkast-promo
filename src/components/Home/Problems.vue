<template>
  <section class="home__problems" @scroll="scrollHandler">
    <div class="problems__sticky">
      <h2>Мы&nbsp;даём возможность решить актуальные проблемы</h2>
      <img
        :src="
          require(`@/assets/cards/problems/${problems[currentProblem].image}`)
        "
        :alt="problems[currentProblem].title"
      />
    </div>
    <div class="problems__scroll">
      <div
        class="scroll__wrapper"
        v-for="(problem, index) in problems"
        :key="index"
        :data-problem-id="index"
      >
        <div class="scroll__title" v-html="problem.title"></div>
        <div class="scroll__description" v-html="problem.description"></div>
        <div class="scroll__image">
          <img
            :src="require(`@/assets/cards/problems/${problem.image}`)"
            :alt="problem.title"
          />
        </div>
      </div>
      <Button :class="{ active: currentProblem == 3 }" class="scroll__join"
        >Join Us</Button
      >

      <div class="scroll__void"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  components: {
    Button,
  },

  setup() {
    const problems = ref([
      {
        title: "Отсутствие времени",
        description:
          "Если у&nbsp;вас нет времени на&nbsp;знакомства и&nbsp;вы&nbsp;много работаете, в&nbsp;нашем сервисе вы&nbsp;найдёте себе человека с&nbsp;таким&nbsp;же ритмом и&nbsp;складом жизни:)",
        image: "time.png",
      },
      {
        title: "Темы для разговоров",
        description:
          "Вам не&nbsp;придётся придумывать темы для разговоров, вам уже подобрали максимально похожими по&nbsp;интересам друг другу",
        image: "message.png",
      },
      {
        title: "Одиночество",
        description:
          "Даже имея много друзей, можно чувствовать себя одиноким, не&nbsp;находя в&nbsp;окружении собеседников по&nbsp;вашим интересам. Наш сервис найдёт человека с&nbsp;таким&nbsp;же мировоззрением, как и&nbsp;у&nbsp;вас",
        image: "loneliness.png",
      },
      {
        title: "Поиск друзей",
        description:
          "В&nbsp;сервисах для знакомств вам часто пишут с&nbsp;романтическими предложениями. Наши системы статусов сразу покажут, чего ищет человек: друзей, любимого человека, либо всё вместе",
        image: "friends.png",
      },
    ]);

    const currentProblem = ref(0);

    const scrollHandler = (event: Event) => {
      document.querySelectorAll("[data-problem-id]").forEach((item) => {
        const el = event.target as HTMLElement;
        const elHeight = item.clientHeight;
        const elId = Number(item.getAttribute("data-problem-id"));
        const elTop = el.scrollTop;
        if (elTop >= elHeight * elId) {
          currentProblem.value = elId;
        }
      });
    };
    return {
      problems,
      currentProblem,
      scrollHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.home__problems {
  display: grid;
  background: #292929;
  overflow-y: auto;
  position: relative;
  gap: 40px;
  min-height: 95vh !important;

  @media (min-width: 768px) {
    grid: min-content / repeat(2, 1fr);
    height: 76vh;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  .problems__sticky {
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;

    @media (min-width: 768px) {
      height: calc(76vh - 104px);
    }

    h2 {
      font-weight: 400;
      font-size: 26px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #ffffff;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 56px;
      }
    }

    // TODO: fix size of big img like in a design. Also, fix a margin of imgs
    img {
      display: none;
      margin: 0 auto;
      height: 521px;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .problems__scroll {
    display: grid;
    gap: 16px;

    .scroll__wrapper {
      width: 100%;
      padding: 24px;
      background: #393939;
      border-radius: 24px;
      display: grid;
      grid: "title image" min-content
            "description description" min-content / 1fr auto;
      align-items: center;
      gap: 24px;

      .scroll__title {
        grid-area: title;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        font-feature-settings: "pnum" on, "lnum" on;
        color: #ffffff;
        margin: 0;
        max-width: 520px;
      }

      .scroll__description {
        grid-area: description;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: -0.06px;
        color: #ffffff99;
        max-width: 350px;
      }

      .scroll__image {
        grid-area: image;
        background: #292929;
        border-radius: 50.069px;
        height: 56px;
        width: 50px;
        display: grid;
        place-items: center;

        img {
          height: 56px;
        }
      }
    }

    .scroll__join {
      transition: opacity 0.25s ease-in-out;
      background: #292929 url("../../assets/cards/problems/button.svg");
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 1;
      display: none;

      &.active {
        opacity: 1;
      }

      &.active:hover {
        opacity: 0.8;
      }

      @media (min-width: 768px) {
        display: initial;
      }
    }

    .scroll__void {
      height: 29vh;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
}
</style>
