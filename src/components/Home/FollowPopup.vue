<template>
  <div class="popupWrapper" @click="() => $emit('close')">
    <div class="popup">
      <button @click="$emit('close')">
        <img :src="require('@/assets/close.svg')" class="close__btn" alt="Close">
      </button>

      <h2 v-html="t('Home.follow.popup.title')"></h2>

      <div class="popup__wrapper">
        <img :src="require(`@/assets/team/avatars/${randomMember}.png`)" :alt="randomMember">
        <p v-html="t('Home.follow.popup.description')"></p>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({

  setup() {
    const { t } = useI18n();

    const team = ['Alena', 'Alexander', 'Anna', 'Dmitry', 'Fedor', 'Natalia', 'Platon', 'Ulyana']

    const randomMember = team[Math.floor(Math.random() * team.length)]

    return {
      t,
      randomMember
    };
  },
});
</script>

<style lang="scss" scoped>
.popupWrapper {
  min-height: 100vh;
  width: 100%;
  z-index: 9998;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #111111;
  display: grid;
  place-items: center;
  padding: 1rem;
}

.popup {
  max-width: 700px;
  padding: 48px 40px;
  border-radius: 1.5rem;
  background: #292929;
  line-height: 1.3;
  position: relative;
  z-index: 9999;

  img {
    width: 140px;
    height: 140px;
  }

  h2 {
    font-family: 'Stratos LC Web';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 111%;
    letter-spacing: -0.05em;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Stratos LC Web';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.015em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #ffffff66;
  }

  .popup__wrapper {
    display: flex;
    align-items: center;
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 20px;
    border: none;
    padding: 0;
    background: none;
    padding: 16px;
  }

  .close__btn {
    height: 18px;
    width: 18px;
    transition: all .15s ease-in;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 576px) {
    max-width: none;
    margin: 0;
    bottom: 0;
    transform: translateY(40%);
  }
}
</style>
