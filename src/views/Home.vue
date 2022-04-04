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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

import Greeting from "@/components/Home/Greeting.vue";
import Selection from "@/components/Home/Selection.vue";
import Couple from "@/components/Home/Couple.vue";
import Intrestings from "@/components/Home/Intrestings.vue";
import Rare from "@/components/Home/Rare.vue";
import HowItWorks from "@/components/Home/HowItWorks.vue";
import NotEasy from "@/components/Home/NotEasy.vue";
import Problems from "@/components/Home/Problems.vue";

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
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background: #111111;
    padding: 10vh 16px 64px;
  position: relative;
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 104px 64px 32px;
  }

  section + section {
    width: 100%;
    min-height: 76vh;
    border-radius: 24px;
    padding: 24px 8px;

    @media (min-width: 360px) {
      padding: 48px 40px 64px;
    }
  }
}
</style>
