<template>
  <Navbar />
  <div class="invest">
    <section class="invest__hero">
      <h1>Inkast</h1>
      <div class="invest__hero-line">
        <div class="invest__hero-stuff">
          <div class="stuff">
            <img src="@/assets/invest/alena.png" alt="Alena" />
            <div class="stuff-info">
              <a
                href="https://t.me/alencombo"
                v-html="t('Investors.hero.CEO')"
                target="_blank"
              ></a>
              <span>CEO</span>
            </div>
          </div>
          <div class="stuff">
            <img src="@/assets/invest/fedor.png" alt="Fedor" />
            <div class="stuff-info">
              <a
                href="https://t.me/padobrik"
                v-html="t('Investors.hero.CFO')"
                target="_blank"
              ></a>
              <span>CFO</span>
            </div>
          </div>
          <div class="stuff">
            <img src="@/assets/invest/alexander.png" alt="Alexander" />
            <div class="stuff-info">
              <a
                href="https://t.me/greeneboy"
                v-html="t('Investors.hero.COO')"
                target="_blank"
              ></a>
              <span>COO</span>
            </div>
          </div>
          <div class="invest-us">
            <a href="mailto:invest@inkast.me?subject=invest"
              >invest@inkast.me</a
            >
            <span v-html="t('Investors.hero.contacts')"></span>
          </div>
        </div>
      </div>
    </section>
    <section class="invest__root-case">
      <h2 v-html="t('Investors.rootcase.title')"></h2>
      <div class="root-case__explanation">
        <h4 v-html="t('Investors.rootcase.leadtext')"></h4>
        <div class="root-case__details">
          <p v-html="t('Investors.rootcase.text')"></p>
          <router-link
            to="/invest__presentation"
            class="invest__presentation"
            v-html="t('Investors.rootcase.button')"
          >
          </router-link>
        </div>
      </div>
    </section>
    <section class="invest__mvp">
      <h2>Minimum Viable Product</h2>
      <div class="invest__legenda">
        <span v-html="t('Investors.mvp.legenda01')"></span>
        <span v-html="t('Investors.mvp.legenda02')"></span>
      </div>
      <div class="invest__mvp-map">
        <img
          :src="
            require(`@/assets/invest/map/${t(
              'Investors.mvp.mvpmap.image'
            )}.svg`)
          "
          alt=""
        />
      </div>
      <div class="scroll__indicator">
        <img src="@/assets/invest/arrow_right.svg" alt="scroll right" />
      </div>
      <div class="invest__footnote" v-html="t('Investors.mvp.footnote')"></div>
    </section>
    <section class="invest__conclusions">
      <h2 v-html="t('Investors.conclusions.title')"></h2>
      <p v-html="t('Investors.conclusions.description')"></p>
    </section>
    <div class="invest__country">
      <img class="dmap" src="@/assets/invest/worldwide.png" alt="worldwide" />
      <img class="mmap" src="@/assets/invest/mapp.png" alt="worldwide mobile" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Investors",
  components: {
    Navbar,
  },
  setup() {
    // TODO: fix position
    onMounted(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.invest {
  width: 100%;
  background: #000;
  padding: 0 64px;
  position: relative;
  margin: 0 auto;
  color: #fff;

  background: #000 url("../assets/invest/bgg.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  scroll-behavior: smooth;
}

section {
  -webkit-animation: fromNothingToGreatest 0.2s
    cubic-bezier(0.4, -0.14, 0.47, 0.89);
  animation: fromNothingToGreatest 0.2s cubic-bezier(0.4, -0.14, 0.47, 0.89);
}

nav {
  .content__wrapper {
    background: none;
  }
}

.mmap {
  display: none;
}

.invest__hero {
  width: 100%;
  min-height: calc(100vh + 1px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    font-weight: 400;
    font-size: 340px;
    line-height: 299px;
    letter-spacing: -0.045em;
    margin: 0;
  }

  h1::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 0 48px 0;
  }
}

.invest__hero-line {
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  // TODO: Upload Graphik LCG font
  font-family: "Graphik LCG";
  font-style: normal;
  font-size: 26px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.04em;
    margin-bottom: 4px;
    border-bottom: 0.45px solid rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    border-bottom: 0.45px solid rgba(255, 255, 255, 0.4);
  }

  span {
    line-height: 30px;
    letter-spacing: -0.04em;
    color: rgba(255, 255, 255, 0.5);
  }
}

@media (min-width: 1700px) {
  .invest__hero-line {
    font-size: 30px;
  }

  .stuff img {
    width: 116px;
    height: auto;
  }
}

.invest__hero-line::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 54px;
}

.invest__hero-stuff {
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  gap: 32px;
}

.stuff {
  display: flex;
  flex-flow: nowrap row;
  align-items: center;

  img {
    width: 96px;
    height: auto;
    padding-right: 24px;
  }

  .stuff-info {
    display: flex;
    flex-flow: nowrap column;
    white-space: nowrap;

    :first-child {
      margin-bottom: 4px;
    }
  }
}

.glow {
  position: absolute;
  left: -20%;
  top: 60%;
}

.invest-us {
  display: flex;
  flex-flow: nowrap column;
  margin-left: auto;

  a {
    width: fit-content;
  }
}

@media (max-width: 1240px) {
  .invest-us {
    margin-left: 0;
  }
}

h2 {
  margin: 72px 0 12px 0;
  font-family: "Stratos LC Web";
  font-style: normal;
  font-weight: 400;
  font-size: 128px;
  line-height: 87.98%;
  /* identical to box height, or 113px */

  letter-spacing: -0.045em;
}

h2::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 12px 0 51px 0;
}

.invest__root-case {
  min-height: 70vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 64px;

  .root-case__explanation {
    display: flex;
    flex-flow: wrap row;
    justify-content: baseline;
    gap: 120px;

    h4 {
      min-width: 600px;
      margin: 0;
      flex: 2 1 35%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 140%;
      /* or 56px */

      letter-spacing: -0.045em;
    }

    .root-case__details {
      flex: 1 1 30%;

      p {
        max-width: 510px;
        margin-bottom: 48px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;

        letter-spacing: -0.045em;
      }
    }
  }
}

.invest__mvp {
  z-index: 2;
  position: relative;

  h2 {
    margin: 0;
  }

  h2::after {
    margin: 12px 0 0 0;
  }
}

.invest__mvp-map {
  overflow-x: scroll;
  position: relative;
}

.invest__mvp-map::-webkit-scrollbar {
  height: 8px;
}

.invest__mvp-map::-webkit-scrollbar-track {
  background: transparent;
}

.invest__mvp-map::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 100px;
}

.invest__mvp-map::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

.invest__hidden-aria {
  position: absolute;
  top: 0;
  right: 0;
  width: 10vw;
  height: 100%;
  background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}

.invest__legenda {
  display: flex;
  flex-flow: nowrap row;
  margin-bottom: 16px;

  span {
    flex: 1 1 50%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.045em;
    color: #4af5d9;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  span:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  span:last-child {
    text-align: right;
  }
}

// ::-webkit-scrollbar {
//   display: none;
// }

.invest__footnote {
  font-family: "Graphik LCG";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120.6%;
  color: rgba(255, 255, 255, 0.3);
  padding: 12px 0;
  text-align: center;
  margin-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar__blacked.nav__wrapper {
  background: #000;
}

.invest__conclusions {
  min-height: 90vh;
  position: relative;
  z-index: 1;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 140%;
    letter-spacing: -0.045em;
    max-width: 856px;
  }
}

.invest__country {
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
    z-index: 0;
  }
}

.invest__presentation {
  padding: 14.5px;
  background-color: rgba(209, 114, 253, 1);
  font-family: "Stratos LC Web";
  font-style: normal;
  font-weight: 400;
  font-size: 24.1667px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.015em;
  font-feature-settings: "pnum" on, "lnum" on;
  border-radius: 12px;

  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
}

.invest__presentation:hover {
  background-color: rgb(217, 142, 252);
}

.scroll__indicator {
  position: absolute;
  right: 0;
  bottom: 56px;
  padding: 8px 20px;
  background: #191919;
  border-radius: 16px;
}

@media (max-width: 992px) {
  .invest {
    padding: 0 32px;
  }

  .invest__hero {
    h1 {
      font-size: 256px;
    }
  }

  .invest__hero-stuff {
    .invest-us {
      margin: 0;
    }
  }

  .invest__root-case h2 {
    font-size: 80px;
  }

  .root-case__explanation {
    gap: 24px !important;

    h4 {
      font-size: 32px !important;
    }

    p {
      font-size: 22px !important;
    }
  }

  .invest__mvp h2 {
    font-size: 80px;
  }

  .invest__conclusions {
    h2 {
      font-size: 80px;
    }

    p {
      font-size: 24px;
    }
  }
}

@media (max-width: 768px) {
  .invest {
    background: #000 url("../assets/invest/smhands.svg");
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .invest__hero {
    h1::after {
      margin: 0 0 24px 0;
      line-height: 1;
    }
  }

  .invest__hero-stuff {
    column-gap: 0;
    column-gap: 32px;
    row-gap: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .invest {
    padding: 0 16px;
  }

  .invest__hero {
    h1 {
      font-size: 180px;
      line-height: 1.2;
    }
  }

  .invest__hero-line {
    font-size: 20px;
  }

  .invest__hero-stuff {
    row-gap: 16px;
    display: grid;
    grid-template-columns: 1fr;
  }

  .stuff {
    img {
      width: 88px;
    }
  }

  .root-case__explanation {
    h4 {
      flex: 2 1 100% !important;
      min-width: unset !important;
      font-size: 24px !important;
    }
  }

  .root-case__details {
    p {
      font-size: 18px !important;
    }

    a {
      font-size: 18px;
    }
  }

  .invest__hero h1 {
    font-size: 96px;
  }

  .invest__hero-stuff {
    row-gap: 24px;
  }

  .invest__root-case {
    h2 {
      font-size: 48px;
    }
    h2::after {
      margin: 12px 0 24px 0;
    }
  }

  .invest__conclusions {
    h2 {
      font-size: 48px;
    }
    h2::after {
      margin: 12px 0 24px 0;
    }
    p {
      font-size: 18px;
    }
  }

  .invest__mvp {
    h2 {
      font-size: 48px;
      line-height: 1;
    }
  }

  .invest__mvp-map {
    img {
      height: 340px;
    }
  }

  .scroll__indicator {
    bottom: 104px;
  }

  .invest__legenda {
    span {
      font-size: 16px;
    }
  }

  .invest__footnote {
    font-size: 12px;
  }

  .invest__hero h1::after {
    margin: 0 0 24px 0;
  }

  .invest {
    background: #000 url("../assets/invest/mhands.svg");
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .mmap {
    display: block;
  }

  .dmap {
    display: none;
  }
}

@media (max-height: 667px) {
  .invest {
    background: #000 url("../assets/invest/smhands.svg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
</style>
