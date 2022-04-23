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

    <Algorithm />

    <Next />

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
import Algorithm from "@/components/Home/Algorithm.vue";
import Next from "@/components/Home/Next.vue";
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
    Algorithm,
    Problems,
    Show,
    Team,
    Follow,
    Footer,
    Next,
  },

  setup() {
    const route = useRoute();

    onMounted(() => {
      if (route.hash) {
        const element = document.querySelector(route.hash);
        if (element) {
          const y = element?.getBoundingClientRect().top + window.scrollY - 48;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
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
  max-width: 1920px;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 144px 16px 64px;
  }

  @media (min-width: 992px) {
    padding: 144px 64px 32px;
  }

  section + section {
    animation: fromNothingToGreatest 0.2s cubic-bezier(0.4, -0.14, 0.47, 0.89);
    width: 100%;
    // min-height: min(76vh, 550px);
    min-height: 550px;
    border-radius: 24px;
    padding: 24px 16px;

    @media (min-width: 576px) {
      min-height: 76vh;
    }

    @media (min-width: 768px) {
      padding: 48px 40px 64px;
    }
  }
}
</style>
