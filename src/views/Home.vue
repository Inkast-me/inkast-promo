<template>
  <Navbar />
  <div class="home">
    <Greeting />

    <Selection />

    <Couple />

    <Intrestings />

    <Rare />

    <HowItWorks />

    <NotEasy />

    <Problems />

    <Show />

    <Team />

    <Follow />

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";

import Greeting from "@/components/Home/Greeting.vue";
import Selection from "@/components/Home/Selection.vue";
import Couple from "@/components/Home/Couple.vue";
import Intrestings from "@/components/Home/Intrestings.vue";
import Rare from "@/components/Home/Rare.vue";
import HowItWorks from "@/components/Home/HowItWorks.vue";
import NotEasy from "@/components/Home/NotEasy.vue";
import Problems from "@/components/Home/Problems.vue";
import Show from "@/components/Home/Show.vue";
import Team from "@/components/Home/Team.vue";
import Follow from "@/components/Home/Follow.vue";
import Footer from "@/components/Home/Footer.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Greeting,
    Selection,
    Couple,
    Intrestings,
    Rare,
    HowItWorks,
    NotEasy,
    Problems,
    Show,
    Team,
    Follow,
    Footer,
  },

  setup() {
    const route = useRoute();

    onMounted(() => {
      if(route.hash) document
        .querySelector(route.hash)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background: #111111;
  padding: 104px 8px 64px;
  position: relative;
  display: grid;
  gap: 32px;

  @media (min-width: 576px) {
    padding: 104px 16px 64px;
  }

  @media (min-width: 992px) {
    padding: 104px 64px 32px;
  }

  section + section {
    width: 100%;
    min-height: 76vh;
    border-radius: 24px;
    padding: 24px 16px;

    @media (min-width: 768px) {
      padding: 48px 40px 64px;
    }
  }
}
</style>
