<template>
  <Navbar />
  <section class="error">
    <div class="error__404">
      <div class="error__404-wrapper">
        <h1>404</h1>
        <span v-html="t('404.description')"></span>
        <router-link custom to="/" v-slot="{ navigate, href }">
          <Button
            :href="href"
            @click="navigate"
            v-html="t('404.main')"
          ></Button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Button from "@/components/Button.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "404",
  components: {
    Navbar,
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
.error {
  animation: fromNothingToGreatest 0.2s cubic-bezier(0.4, -0.14, 0.47, 0.89);
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 132px 64px 32px;
  position: relative;

  @media (max-width: 768px) {
    padding: 132px 16px 32px;
  }
}

.error__404 {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 32px 0px;
  background: #292929;
  border-radius: 24px;
  min-height: calc(100vh - 200px);

  background: #d172fd url("../assets/cards/404.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.error__404-wrapper {
  display: flex;
  flex-flow: nowrap column;
  align-items: center;

  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 265px;
    line-height: 91%;
    letter-spacing: -0.05em;
    color: #ffffff;
    margin-bottom: 4px;

    @media (max-width: 576px) {
      font-size: 104px;
    }
  }

  span {
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    margin-bottom: 40px;

    @media (max-width: 576px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  button {
    width: fit-content;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;

    color: #ffffff;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
}
</style>
