<template>
  <section class="home__team" id="team">
    <div class="team__header-wrapper">
      <h2 v-html="t('Home.team.title')"></h2>
      <span v-html="t('Home.team.interactive')"></span>
    </div>
    <div class="team__content-wrapper">
      <div class="team__content">
        <div
          class="team__member"
          v-for="index in 8"
          :key="index"
          @mouseover="currentMember = index - 1"
        >
          <div class="member__name">
            {{ t(`Home.team.members[${index - 1}].name`).split(" ")[0] }}
            <br />
            {{ t(`Home.team.members[${index - 1}].name`).split(" ")[1] }}
            <img
              class="member__emoji"
              :src="
                require(`@/assets/team/emoji/${t(
                  `Home.team.members[${index - 1}].emoji`
                )}.png`)
              "
            />
          </div>

          <div
            class="member__avatar"
            :style="{
              '--background':
                '#' + t(`Home.team.members[${index - 1}].preferredColor`),
            }"
          >
            <img
              :src="
                require(`@/assets/team/avatars/${t(
                  `Home.team.members[${index - 1}].avatar`
                )}`)
              "
              :alt="t(`Home.team.members[${index - 1}].name`)"
            />
          </div>

          <div
            class="member__post"
            v-html="t(`Home.team.members[${index - 1}].post`)"
          ></div>
          <div
            class="member__description"
            v-html="t(`Home.team.members[${index - 1}].description`)"
          ></div>
          <div
            class="member__employment-exp"
            v-html="t(`Home.team.members[${index - 1}].employmentExp`)"
          ></div>
          <a
            class="member__link"
            target="_blank"
            :href="defineLink(t(`Home.team.members[${index - 1}].link`))"
            >{{ defineLinkText(t(`Home.team.members[${index - 1}].link`)) }}</a
          >
        </div>
      </div>
      <div class="team__description">
        <span class="member__name">
          {{ t(`Home.team.members[${currentMember}].name`).split(" ")[0] }}
          <br />
          {{ t(`Home.team.members[${currentMember}].name`).split(" ")[1] }}
          <img
            class="member__emoji"
            :src="
              require(`@/assets/team/emoji/${t(
                `Home.team.members[${currentMember}].emoji`
              )}.png`)
            "
          />
        </span>

        <span
          class="member__post"
          v-html="t(`Home.team.members[${currentMember}].post`)"
        ></span>
        <span
          class="member__description"
          v-html="t(`Home.team.members[${currentMember}].description`)"
        ></span>
        <span
          class="member__employment-exp"
          v-html="t(`Home.team.members[${currentMember}].employmentExp`)"
        ></span>
        <a
          class="member__link"
          target="_blank"
          :href="defineLink(t(`Home.team.members[${currentMember}].link`))"
          >{{
            defineLinkText(t(`Home.team.members[${currentMember}].link`))
          }}</a
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const http = /(http(s?)):\/\//i;
    const url =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;

    const currentMember = ref(0);

    const defineLink = (link: string) => {
      link = link.replace("&#64;", "@");
      if (email.test(link)) return `mailto:${link}`;
      else if (!http.test(link)) return `https://${link}`;
      else return link;
    };

    const defineLinkText = (link: string) => {
      link = link.replace("&#64;", "@");
      if (email.test(link)) return link.replace("mailto:", "");
      else if (
        url.test(link) &&
        !link.replace("https://", "").replace("http://", "").includes("/")
      )
        return link.replace("https://", "").replace("http://", "");
      else return "@" + link.slice(link.lastIndexOf("/") + 1, link.length);
    };

    return {
      t,
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
      font-size: 30px;
      line-height: 111%;
      letter-spacing: -0.05em;
      color: #ffffff;

      @media (min-width: 768px) {
        font-size: 64px;
      }

      &:after {
        position: absolute;
        content: "+3";
        font-family: "Inter", serif;
        font-weight: 500;
        font-size: 10px;
        line-height: 140%;
        letter-spacing: -0.06px;
        text-transform: capitalize;
        color: #ffffff;
        opacity: 0.4;
        padding: 4px 8px;
        border-radius: 24px;
        border: 1px solid #383838;

        @media (min-width: 768px) {
          font-size: 20px;
          padding: 8px 16px;
        }
      }
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
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
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
      justify-content: center;
      align-items: center;
      gap: 48px 16px;

      @media (min-width: 768px) {
        gap: 20px 16px;
        grid-template-columns: repeat(4, minmax(150px, 1fr));
        grid-template-rows: repeat(2, minmax(180px, min-content));
      }

      .team__member {
        display: grid;
        gap: 8px;
        grid: min-content / 100%;
        grid-template-columns: 1fr 96px;
        align-items: center;

        @media (min-width: 768px) {
          grid-template-columns: 1fr;
        }

        > * {
          grid-column: span 2;
        }

        .member__name {
          font-weight: 400;
          font-size: 24px;
          line-height: 111%;
          letter-spacing: -0.05em;
          color: #ffffff;
          grid-column: span 1;

          .member__emoji {
            height: 24px;
            width: 24px;
          }
        }

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
          grid-column: span 1;
          display: grid;
          place-items: center;
          background: var(--background, #111111);
          border-radius: 101.23px;
          padding: 12px 8px 16px 8px;
          position: relative;
          transition: background-color 0.25s ease-in-out;

          img {
            height: 100%;
            width: 100%;
          }
        }

        @media (min-width: 768px) {
          > *:not(.member__avatar) {
            display: none;
          }

          .member__avatar {
            background: #111111;
            padding: 29px 18px 35px 18px;
            cursor: pointer;

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
        margin-bottom: 30px;

        .member__emoji {
          height: 37px;
          width: 37px;
          vertical-align: bottom;
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
