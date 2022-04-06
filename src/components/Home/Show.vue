<template>
  <section class="home__show">
    <h2 class="show__header">Inkast знает этого человека и готов показать вам друг друга</h2>

    <div class="show__wrapper">
      <Button class="show__button">Найти друга</Button>
      <div class="show__couple">
        <div class="couple_left">
          <img :src="require('@/assets/man.png')" alt="Maaaan">
        </div>
        <div class="couple_right">
          <img :src="require('@/assets/woman.png')" alt="Not maaaan">
        </div>
        <div class="couple_join">
          <img :src="require('@/assets/join.svg')" alt="Me">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  setup() {
    console.log();
    
  },
})
</script>

<style lang="scss" scoped>
.home__show {
  display: flex;
  flex-flow: column;
  gap: 32px;

  .show__header {
    font-weight: 400;
    font-size: 68px;
    line-height: 120%;
    letter-spacing: -0.025em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    max-width: 900px;
    margin: 0;
  }

  .show__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;

    .show__button {
      background: #292929 url('../../assets/cards/problems/button.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }

    .show__couple {
      display: flex;
      justify-content: space-between;

      .couple_left, .couple_right, .couple_join {
        padding: 18px 8px;
        border-radius: 71.0807px;
        min-width: 150px;
        display: grid;
        place-items: center;
        
        img {
          height: 136px;
          // width: 136px;
        }
      }

      .couple_left {
        background: #292929 url('../../assets/cards/show/left.svg');
        background-repeat: no-repeat;
        background-size: cover;
      }
      .couple_right {
        background: #292929 url('../../assets/cards/show/right.svg');
        background-position: right top;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .couple_join {
        padding: 35px;
        background: #292929;

        img {
          height: 100px;
        }
      }
    }

  }
}
</style>
