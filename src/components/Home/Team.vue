<template>
  <section class="home__team" id="team">
    <div class="team__header-wrapper">
      <h2>Команда</h2>
      <span>Интерактив</span>
    </div>
    <div class="team__content-wrapper">
      <div class="team__content">
        <div
          class="team__member"
          v-for="(member, index) in team"
          :key="index"
          @click="currentMember = index"
        >
          <div class="member__name">
            {{ member.name }}
            <img
              class="member__emoji"
              :src="require(`@/assets/team/emoji/${member.emoji}.png`)"
            />
          </div>

          <div
            class="member__avatar"
            :style="{ '--background': member.preferredColor }"
          >
            <img
              :src="require(`@/assets/team/avatars/${member.avatar}`)"
              :alt="member.name"
            />
          </div>

          <div class="member__post" v-html="member.post"></div>
          <div class="member__description" v-html="member.description"></div>
          <div
            class="member__employment-exp"
            v-html="member.employmentExp"
          ></div>
          <a
            class="member__link"
            target="_blank"
            :href="defineLink(member.link)"
            >{{ defineLinkText(member.link) }}</a
          >
        </div>
      </div>
      <div class="team__description">
        <span class="member__name">
          {{ team[currentMember].name }}
          <img
            class="member__emoji"
            :src="
              require(`@/assets/team/emoji/${team[currentMember].emoji}.png`)
            "
          />
        </span>

        <span class="member__post" v-html="team[currentMember].post"></span>
        <span
          class="member__description"
          v-html="team[currentMember].description"
        ></span>
        <span
          class="member__employment-exp"
          v-html="team[currentMember].employmentExp"
        ></span>
        <a
          class="member__link"
          target="_blank"
          :href="defineLink(team[currentMember].link)"
          >{{ defineLinkText(team[currentMember].link) }}</a
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const http = /(http(s?)):\/\//i;
    const url =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;

    const team = computed(() => [
      {
        avatar: "Alena.png",
        emoji: "paw",
        name: "Alena Samarina",
        post: "Аналитик & Product Owner",
        preferredColor: "#FFE5D6",
        description:
          "Выполняла проекты для Mars, Danone, Nexign, Schlumberger, Газпром Нефть, Северсталь, Росатом <br> Неоднократный победитель кейс-чемпионатов и&nbsp;хакатонов",
        employmentExp: "Опыт работы: 4&nbsp;года",
        link: "alencombo@gmail.com",
      },
      {
        avatar: "Alexander.png",
        emoji: "trackball",
        name: "Alexander Greene",
        post: "Продуктовый дизайнер",
        preferredColor: "#E7E7E9",
        description:
          "Выполнял проекты для Яндекса, VK, Газпром, Skyeng и&nbsp;X5&nbsp;Group <br> Призер олимпиады ВШЭ в&nbsp;области дизайна и&nbsp;неоднократный победитель хакатонов",
        employmentExp: "Опыт работы: 4&nbsp;года",
        link: "https://t.me/greeneboy",
      },
      {
        avatar: "Fedor.png",
        emoji: "dna",
        name: "Fedor Kabachenko",
        post: "ML-инженер",
        preferredColor: "#94ADE8",
        description:
          "Выполнял проекты для Центробанка, Росатома, ParSeq, OneCell и&nbsp;BIOCAD <br> Безработный, но&nbsp;зарабатывает",
        employmentExp: "Опыт работы: 2&nbsp;года",
        link: "https://t.me/padobrik",
      },
      {
        avatar: "Platon.png",
        emoji: "vulcan",
        name: "Platon Lapp",
        post: "Front-end developer",
        preferredColor: "#C7C789",
        description: "Просто хороший парень",
        employmentExp: "Опыт работы: 3&nbsp;года",
        link: "https://platon.page",
      },
      {
        avatar: "Natalia.png",
        emoji: "noevilmonkey",
        name: "Наталья Мальцева",
        post: "Backend разработчик",
        preferredColor: "#FFE5D6",
        description:
          "Разработчик в&nbsp;Arrival. Строила гоночный болид в&nbsp;отделе электрики. Выполняла проекты для Mars, Schlumberger, Danone. Проводила обучение по&nbsp;программированию для студентов. <br> Получатель гранта УМНИК. Победитель хакатонов и&nbsp;кейс-чемпионатов.",
        employmentExp: "Опыт работы: 3&nbsp;года",
        link: "maltsnata@gmail.com",
      },
      {
        avatar: "Ulyana.png",
        emoji: "tiger",
        name: "Ульяна Саламатова",
        post: "Android Developer",
        preferredColor: "#FFE5D6",
        description: "Пишу на&nbsp;Kotlin",
        employmentExp: "Опыт работы: 1&nbsp;года",
        link: "salamatova.uv@gmail.com",
      },
      {
        avatar: "Dmitry.png",
        emoji: "offnik",
        name: "Тимощенков Дмитрий",
        post: "Backend разработчик",
        preferredColor: "#FFE5D6",
        description: "Разработчик в&nbsp;Sixhands",
        employmentExp: "Опыт работы: 2&nbsp;года",
        link: "street-morik@yandex.ru",
      },
      {
        avatar: "Anna.png",
        emoji: "victory",
        name: "Анна Грохотова",
        post: "Маркетолог",
        preferredColor: "#FFE5D6",
        description:
          "Выполняю проекты в сфере нейротехнологий <br> Знаю, как работает наш мозг и что нужно людям",
        employmentExp: "Опыт работы: 3&nbsp;года",
        link: "anya.annie@yandex.ru",
      },
    ]);

    const currentMember = ref(0);

    const defineLink = (link: string) => {
      if (email.test(link)) return `mailto:${link}`;
      else if (!http.test(link)) return `https://${link}`;
      else return link;
    };

    const defineLinkText = (link: string) => {
      if (email.test(link)) return link.replace("mailto:", "");
      else if (url.test(link) && !link.includes("/"))
        return link.replace("https://", "").replace("http://", "");
      else
        return (
          "@" +
          link
            .replace("https://", "")
            .replace("http://", "")
            .slice(link.lastIndexOf("/"), link.length)
        );
    };

    return {
      team,
      defineLink,
      defineLinkText,
      currentMember,
    };
  },
});
</script>

<style lang="scss" scoped>
.home__team {
  display: flex;
  flex-flow: column;
  gap: 32px;
  background: #292929;
  a {
    text-decoration: none;
  }

  .team__header-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;

    h2 {
      position: relative;
      margin: 0;
      font-weight: 400;
      font-size: 64px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #ffffff;
    }
    h2:after {
      position: absolute;
      font-family: "Inter", serif;
      content: "+3";
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
      color: #ffffff;
      opacity: 0.4;
      padding: 8px 16px;
      border: 1px solid #383838;
      border-radius: 24px;
    }

    span {
      font-family: Inter;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
      color: #ffffff66;
      padding: 24px;
      background: #383838;
      border-radius: 100px;
    }
  }

  .team__content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    justify-content: space-between;

    .team__content {
      flex: 1 1 50%;
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, min-content));
      grid-auto-columns: min-content;
      grid-auto-rows: min-content;
      gap: 20px 16px;
      justify-content: center;

      .team__member {
        display: grid;
        gap: 8px;
        grid: min-content / 100%;

        .member__name {
          font-weight: 400;
          font-size: 24px;
          line-height: 111%;
          letter-spacing: -0.05em;
          color: #ffffff;

          .member__emoji {
            height: 37px;
            width: 37px;
          }
        }
        // TODO: do smth with br tag in 'description' cuz it haven't any margin in text
        .member__post,
        .member__link,
        .member__description,
        .member__employment-exp {
          font-family: Inter;
          font-weight: 500;
          font-size: 15px;
          line-height: 140%;
          letter-spacing: -0.06px;
          color: #ffffff;
          text-decoration: none;
        }

        .member__description,
        .member__employment-exp {
          color: #adacad;
        }

        .member__avatar {
          display: grid;
          place-items: center;
          background: var(--background, #111111);
          border-radius: 101.23px;
          padding: 29px 18px 35px 18px;
          position: relative;
          transition: background-color 0.25s ease-in-out;

          img {
            height: 180px;
            width: 180px;
          }
        }

        @media (min-width: 768px) {
          > *:not(.member__avatar) {
            display: none;
          }

          .member__avatar {
            background: #111111;

            &:hover {
              background: var(--background, #111111);
            }
          }
        }
      }
    }

    .team__description {
      display: none;

      @media (min-width: 768px) {
        padding-top: 28px;
        display: block;
        flex: 1 1 10%;
        // display: grid;
        // gap: 8px;
        // width: 285px;
        // grid: min-content / 100%;

        span {
          display: block;
          margin-bottom: 16px;
        }
      }

      .member__name {
        font-weight: 400;
        font-size: 40px;
        line-height: 111%;
        letter-spacing: -0.05em;
        color: #ffffff;
        display: flex;
        gap: 4px;
        margin-bottom: 30px;

        .member__emoji {
          height: 37px;
          width: 37px;
        }
      }

      .member__post,
      .member__link,
      .member__description,
      .member__employment-exp {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.06px;
        // text-transform: capitalize;
        max-width: 320px;
        color: #ffffff;
        margin-bottom: 38px;
      }

      .member__description,
      .member__employment-exp {
        color: #adacad;
      }
    }
  }
}
</style>
