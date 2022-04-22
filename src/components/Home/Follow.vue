<template>
  <section class="home__follow" id="follow">
    <h2 v-html="t('Home.follow.title')"></h2>
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
    <div class="follow__form-wrapper">
      <span v-html="t('Home.follow.additional')"></span>
      <span
        class="follow__input"
        :class="{ error: nameError }"
        :data-error="t('Home.follow.inputs.nameError')"
      >
        <input
          type="text"
          name="name"
          :placeholder="t('Home.follow.inputs.name')"
          v-model="name"
          @click="nameError = false"
        />
      </span>
      <span
        class="follow__input"
        :class="{ error: emailError }"
        :data-error="t('Home.follow.inputs.emailError')"
      >
        <input
          type="email"
          name="email"
          :placeholder="t('Home.follow.inputs.email')"
          v-model="email"
          @click="emailError = false"
        />
      </span>

      <span
        class="follow__input checkbox"
        :class="{ error: confError }"
        :data-error="t('Home.follow.inputs.confError')"
      >
        <Checkbox
          v-model="confAgree"
          :label="t('Home.follow.inputs.confPolicy')"
        ></Checkbox>
      </span>
    </div>
    <Button
      class="follow__join"
      v-html="t('Home.follow.join')"
      @click="sendForm"
    ></Button>

    <transition name="modal">
      <FollowPopup v-if="successModal" @close="successModal = false" />
    </transition>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Button from "@/components/Button.vue";
import Checkbox from "@/components/Checkbox.vue";
import FollowPopup from "@/components/Home/FollowPopup.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Button,
    FollowPopup,
    Checkbox,
  },
  setup() {
    const { t } = useI18n();

    const name = ref("");
    const nameError = ref(false);

    const email = ref("");
    const emailError = ref(false);

    const confAgree = ref(false);
    const confError = ref(false);

    const successModal = ref(false);

    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const sendForm = () => {
      if (name.value && emailRegExp.test(email.value) && confAgree.value)
        fetch(
          `https://docs.google.com/forms/u/1/d/e/1FAIpQLScaPQfvMJqkB4p12RR1onHLBRwGrbll_lNTu9wV5xwbwMtMbQ/formResponse?entry.539076579=${name.value}&entry.914223913=${email.value}`,
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/x-www-form-urlencoded",
              Cookie:
                "COMPASS=spreadsheet_forms=CjIACWuJVzU1sJTacddRq5SM9CACMitz9xWXKATRQLw1Wzrj49RmKV-ZxRrysSmwvfUj9BCsivWSBho0AAlriVfOOunhsummzTJ4ZTlpHLo-BsYZrFQla7OUPyJAyrp81aRFCztjMJwGFYMdZlQMUQ==; S=spreadsheet_forms=ZF33kMAs1WLtT2JiH7UsUdRzjKZAa2aAsx25xGXlgZ4; NID=511=feD-h3mgZn61fZR_HbYGlE-YZ-aEMqXt5vhZQ6WIXcwBsB1evHnUvzjZC_B3XUwtJdfoke5hxqjJd71n_yJNGo4iZDAZ-kOg9jp_BwULNyz3Sphqljtc3bIB7W3nP4LqrOGC0sPr3J3mJfEdmoxI7Mcscs0LWNUwS_2LHt3cOa4",
            },
            mode: "no-cors",
          }
        ).then(() => {
          successModal.value = true;
        });
      else {
        if (!name.value) nameError.value = true;
        if (!confAgree.value) confError.value = true;
        if (!emailRegExp.test(email.value)) emailError.value = true;
      }
    };

    return {
      t,
      name,
      email,
      sendForm,
      nameError,
      emailError,
      successModal,
      confAgree,
      confError,
    };
  },
});
</script>

<style lang="scss" scoped>
.home__follow {
  background: #d172fd url("../../assets/cards/follow.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "title" "inputs" "join" "socials";
  gap: 40px;
  justify-content: space-between;
  min-height: auto !important;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title title"
      "inputs inputs"
      "join socials";
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title inputs"
      "socials join";
  }

  h2 {
    grid-area: title;
    margin: 0;
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    line-height: 95%;
    letter-spacing: -0.025em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;

    @media (min-width: 768px) {
      font-size: 90px;
    }

    @media (min-width: 1200px) {
      font-size: 120px;
    }
  }

  .follow__social-wrapper {
    grid-area: socials;
    justify-self: center;
    display: flex;
    gap: 32px;

    @media (min-width: 768px) {
      justify-self: flex-end;
    }

    @media (min-width: 992px) {
      justify-self: flex-start;
    }

    a {
      transition: transform 0.2s ease-in-out;

      svg {
        height: 52px;
        width: 52px;

        @media (min-width: 768px) {
          height: 76px;
          width: 76px;
        }
      }
    }
    a:hover {
      transform: scale(0.95);
    }
  }

  .follow__form-wrapper {
    grid-area: inputs;
    display: flex;
    flex-flow: nowrap column;

    @media (min-width: 992px) {
      margin-top: 32px;
    }

    .follow__input {
      margin-bottom: 24px;

      &.error {
        margin-bottom: 48px;
        position: relative;

        > * {
          padding-left: 58px;
        }

        &::after {
          content: attr(data-error);
          left: 24px;
          font-weight: 400;
          font-size: 13px;
          line-height: 140%;
          letter-spacing: -0.06px;
          color: #ffffff;
          position: absolute;
          bottom: -30px;

          @media (min-width: 768px) {
            font-size: 17px;
          }
        }

        &::before {
          content: "";
          height: 24px;
          width: 24px;
          background-image: url("../../assets/error.svg");
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
        }

        &.checkbox {
          > * {
            padding-left: 32px;
          }

          &::before {
            left: 0;
          }
        }
      }

      input {
        font-family: "Inter", sans-serif;
        padding: 12px;
        border-radius: 12px;
        border: none;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 140%;
        letter-spacing: -0.06px;
        text-transform: capitalize;
        color: #292929;
        width: 100%;

        @media (min-width: 768px) {
          padding: 24px;
          font-size: 20px;
        }
      }
    }

    input:last-child {
      text-transform: none;
    }

    span {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 114%;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #ffffff;
      max-width: 560px;

      @media (min-width: 768px) {
        font-size: 28px;
      }
    }
  }
  .follow__join {
    grid-area: join;

    &.disabled {
      pointer-events: none;
      opacity: 0.8;
    }

    @media (min-width: 768px) {
      justify-self: flex-start;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
