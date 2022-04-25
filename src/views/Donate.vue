<template>
  <Navbar />
  <div class="donate">
    <div class="donate__contents">
      <div class="">
        <div class="donate__heading">
          <h1 v-html="t('Donate.title')"></h1>
          <div class="donate__heading-donators">
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="29" rx="13" fill="#FFFF00" />
              <path
                d="M10.6807 15.9941H12.082V16.5547C12.082 17.735 11.8132 18.6283 11.2754 19.2344C10.7376 19.8359 9.97656 20.1367 8.99219 20.1367C8.00781 20.1367 7.24447 19.8337 6.70215 19.2275C6.16439 18.6214 5.89551 17.7305 5.89551 16.5547V12.9453C5.89551 11.7695 6.16439 10.8786 6.70215 10.2725C7.24447 9.66634 8.00781 9.36328 8.99219 9.36328C9.97656 9.36328 10.7376 9.66634 11.2754 10.2725C11.8132 10.874 12.082 11.765 12.082 12.9453V13.3623H10.6807V12.9453C10.6807 12.1341 10.5371 11.5485 10.25 11.1885C9.96745 10.8285 9.54818 10.6484 8.99219 10.6484C8.44076 10.6484 8.01921 10.8285 7.72754 11.1885C7.44043 11.5485 7.29688 12.1341 7.29688 12.9453V16.5547C7.29688 17.3659 7.44043 17.9515 7.72754 18.3115C8.01465 18.6715 8.4362 18.8516 8.99219 18.8516C9.54362 18.8516 9.96289 18.6715 10.25 18.3115C10.5371 17.9515 10.6807 17.3659 10.6807 16.5547V15.9941ZM18.3046 20L15.208 14.832V20H13.8134V9.5H15.208V14.6133L18.2773 9.5H19.8154L16.664 14.5244L19.9863 20H18.3046Z"
                fill="black"
              />
            </svg>
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="29" rx="13" fill="black" />
              <path
                d="M12.2578 20V10.5527L10.1318 20H8.43652L6.32422 10.5049V20H5.03906V9.5H7.43164L9.3457 18.1543L11.2256 9.5H13.6592V20H12.2578ZM20.0117 20L16.915 14.832V20H15.5205V9.5H16.915V14.6133L19.9843 9.5H21.5224L18.3711 14.5244L21.6933 20H20.0117Z"
                fill="white"
              />
            </svg>
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="29" rx="13" fill="#F6526B" />
              <path
                d="M7.1709 20L9.52246 9.5H11.6211L13.9727 20H12.5576L12.0107 17.4229H9.12598L8.5791 20H7.1709ZM9.40625 16.1377H11.7305L10.5684 10.6211L9.40625 16.1377ZM14.9658 20V9.5H19.6074V10.7852H16.3603V20H14.9658Z"
                fill="white"
              />
            </svg>

            <span>12+</span>
          </div>
        </div>
        <div class="donate__links">
          <a
            @click.stop="event('Clicked Tinkoff')"
            href="https://www.tinkoff.ru/rm/samarina.alena19/LoAhG2156/"
            class="donate__links-item"
            target="_blank"
          >
            <img src="@/assets/donate/tinkoff.svg" alt="tinkoff" />
            <div class="donate__links-item__contents">
              <h3 v-html="t('Donate.variants.viaInternet.title')"></h3>
              <div>
                <img
                  src="@/assets/donate/alena_samarina_animoji.png"
                  alt="alena_samarina_animoji"
                />
                <p v-html="t('Donate.variants.viaInternet.description')"></p>
              </div>
            </div>
          </a>
          <a
            @click.stop="event('Clicked VK')"
            href="https://vk.com/inkast_me?source=description&w=donut_payment-212269763"
            class="donate__links-item"
            target="_blank"
          >
            <img src="@/assets/donate/vk.svg" alt="vkdonat" />
            <div class="donate__links-item__contents">
              <h3 v-html="t('Donate.variants.vk.title')"></h3>
              <div>
                <p
                  class="donate__links-item__contents-custom"
                  v-html="t('Donate.variants.vk.description')"
                ></p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="donate__footer">
        <a
          @click.stop="event('Clicked Problems')"
          href="mailto:donation@inkast.me?subject=Проблемы с донатом"
          target="_blank"
          v-html="t('Donate.problems')"
        ></a>
        <div class="donate__footer-social">
          <a href="https://vk.com/inkast_me" target="_blank"
            ><img src="@/assets/vk.png" alt=""
          /></a>
          <a href="https://t.me/inkast_me" target="_blank"
            ><img src="@/assets/tg.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useI18n } from "vue-i18n";
import { event } from "vue-gtag";

export default defineComponent({
  name: "Donate",
  components: {
    Navbar,
  },
  setup() {
    const { t } = useI18n();

    onMounted(() => {
      event("enter Donate");
    });

    return {
      t,
      event
    };
  },
});
</script>

<style lang="scss" scoped>
.donate {
  animation: fromNothingToGreatest 0.2s cubic-bezier(0.4, -0.14, 0.47, 0.89);
  width: 100%;
  min-height: 100vh;
  background: #111111;
  color: #fff;
  padding: 132px 64px 32px;
  position: relative;

  @media (max-width: 768px) {
    padding: 132px 16px 32px;
  }
}

.donate__contents {
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  padding: 40px 0px 32px 0px;
  background: #292929;
  border-radius: 24px;
  min-height: calc(100vh - 200px);
}

.donate__heading {
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 48px;

  @media (max-width: 576px) {
    h1 {
      font-size: 40px !important;
    }
    padding: 0 16px;
    margin-bottom: 16px;
  }

  h1 {
    margin: 0 12px 0 0;
    font-weight: 400;
    font-size: 64px;
    line-height: 91%;
    letter-spacing: -0.05em;

    @media (max-width: 992px) {
      margin: 0 12px 16px 0;
    }
  }
}

.donate__heading::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #3e3e3e;
  margin-top: 22px;
}

.donate__heading-donators {
  display: flex;
  align-items: center;
  padding: 24px;
  background: #383838;
  border-radius: 100px;

  svg {
    margin-right: -8px;
  }
  span {
    font-family: "Inter", sans-serif;
    display: block;
    margin-left: 16px;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.06px;
    text-transform: capitalize;
    color: #ffffff;
  }
}

.donate__links {
  text-decoration: none;
  color: #fff;
}

.donate__links-item {
  display: flex;
  text-decoration: none;
  color: #fff;
  padding: 12px 24px;
  margin: 0 16px;
  border-radius: 16px;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 16px;

  img {
    margin-right: 18px;
  }

  @media (max-width: 768px) {
    img {
      width: 140px;
    }
  }

  @media (max-width: 600px) {
    margin: 0 8px 24px 8px;

    img {
      display: none;
    }
  }

  background-color: #292929;
}

.donate__links-item:hover {
  background-color: #383838;
}

.donate__links-item__contents {
  margin: 21px 0;

  h3 {
    margin: 0 0 12px 0;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.02em;
    font-feature-settings: "pnum" on, "lnum" on;

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0;
      width: 95px;
    }

    p {
      margin: 0;
      max-width: 362px;
      font-weight: 400;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.015em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #7f7f7f;
    }
  }
}

.donate__links-item__contents-custom {
  max-width: 438px !important;
}

.donate__footer {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 576px) {
    padding: 0 22px 0 22px;
  }

  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    text-decoration: none;
    text-align: center;
    letter-spacing: -0.015em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #545454;
    transition: color 0.35s ease-in-out;

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }
  a:hover {
    color: #fff;
  }
}

.donate__footer-social {
  img {
    width: 36px;
  }
  a {
    display: inline-block;

    img {
      transition: transform 0.15s ease-in-out;
    }
  }

  a:first-child {
    margin-right: 14px;
  }

  a:hover {
    img {
      transform: scale(0.95);
    }
  }
}
</style>
