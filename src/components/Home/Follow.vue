<template>
  <section class="home__follow" id="follow">
    <div class="follow__text-wrapper">
      <h3>Будем<br />друзьями!</h3>
      <div class="follow__social-wrapper">
        <a href="https://vk.com/inkast_me">
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1048_11781)">
              <path
                d="M0 36.48C0 19.2831 0 10.6847 5.34237 5.34237C10.6847 0 19.2831 0 36.48 0H39.52C56.7169 0 65.3152 0 70.6577 5.34237C76 10.6847 76 19.2831 76 36.48V39.52C76 56.7169 76 65.3152 70.6577 70.6577C65.3152 76 56.7169 76 39.52 76H36.48C19.2831 76 10.6847 76 5.34237 70.6577C0 65.3152 0 56.7169 0 39.52V36.48Z"
                fill="black"
              />
              <path
                d="M40.4374 54.7517C23.1157 54.7517 13.2359 42.8767 12.8242 23.1167H21.5009C21.7859 37.62 28.1824 43.7634 33.2491 45.03V23.1167H41.4194V35.625C46.4227 35.0867 51.6787 29.3867 53.4521 23.1167H61.6222C60.2606 30.8434 54.5606 36.5434 50.5072 38.8867C54.5606 40.7867 61.0526 45.7584 63.5226 54.7517H54.5289C52.5972 48.735 47.7844 44.08 41.4194 43.4467V54.7517H40.4374Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1048_11781">
                <rect width="76" height="76" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://t.me/inkast_me">
          <svg
            width="77"
            height="76"
            viewBox="0 0 77 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1048_11784)">
              <path
                d="M38.0625 76C59.0493 76 76.0625 58.9868 76.0625 38C76.0625 17.0132 59.0493 0 38.0625 0C17.0757 0 0.0625 17.0132 0.0625 38C0.0625 58.9868 17.0757 76 38.0625 76Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2627 37.5989C28.3405 32.7724 35.7274 29.5906 39.4235 28.0533C49.9765 23.6639 52.1693 22.9014 53.5986 22.8762C53.9129 22.8707 54.6158 22.9486 55.0711 23.318C55.4555 23.63 55.5613 24.0514 55.6119 24.3471C55.6625 24.6429 55.7256 25.3166 55.6755 25.8431C55.1036 31.8518 52.6291 46.4333 51.3702 53.1631C50.8376 56.0108 49.7887 56.9656 48.7733 57.059C46.5665 57.2621 44.8909 55.6007 42.7535 54.1996C39.409 52.0073 37.5196 50.6425 34.2732 48.5032C30.5214 46.0308 32.9535 44.6719 35.0917 42.4512C35.6512 41.87 45.3741 33.0263 45.5623 32.224C45.5859 32.1237 45.6077 31.7497 45.3855 31.5522C45.1633 31.3547 44.8354 31.4222 44.5987 31.4759C44.2633 31.5521 38.9204 35.0835 28.5701 42.0702C27.0536 43.1116 25.6799 43.619 24.4492 43.5924C23.0924 43.5631 20.4824 42.8253 18.5422 42.1946C16.1625 41.421 14.2711 41.012 14.4358 39.6983C14.5216 39.014 15.4639 38.3142 17.2627 37.5989Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1048_11784">
                <rect
                  width="76"
                  height="76"
                  fill="white"
                  transform="translate(0.0625)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
    <div class="follow_form-wrapper">
      <span
        >Подпишитесь на&nbsp;обновления, чтобы не&nbsp;пропустить запуск</span
      >
      <!-- TODO: add a grey text to input by default -->
      <input type="text" />
      <input type="text" />
      <Button>Присоединиться</Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "@/components/Button.vue";

export default defineComponent({
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
.home__follow {
  background: #d172fd url("../../assets/cards/follow.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-start;
  background-position: bottom right;
  min-height: auto !important;

  .follow__text-wrapper {
    display: flex;
    flex-flow: wrap column;

    h3 {
      margin: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 120px;
      line-height: 95%;
      letter-spacing: -0.025em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      font-size: 120px;
      margin-bottom: 116px;

      @media (max-width: 768px) {
        font-size: 64px;
      }
    }
  }

  .follow__social-wrapper {
    display: flex;
    gap: 32px;

    a {
      transition: transform 0.2s ease-in-out;
    }
    a:hover {
      transform: scale(0.95);
    }
  }

  .follow_form-wrapper {
    display: flex;
    flex-flow: nowrap column;
    max-width: 537px;
    margin-top: 32px;

    input {
      font-family: "Inter", sans-serif;
      margin-bottom: 24px;
      padding: 24px;
      border-radius: 12px;
      border: none;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
      color: #292929;
    }

    .button__wrapper {
      width: fit-content;
    }

    span {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 114%;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
    }
  }
}
</style>
