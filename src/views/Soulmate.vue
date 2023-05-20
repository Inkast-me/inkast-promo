<template>
  <section class="soulmate__container">
    <div class="soulmate__contents">
      <div class="soulmate__contents-wrapper">
        <div class="fortune-telling__bubble">Гадание</div>
        <h1>На соулмейта</h1>
      </div>
      <div class="soulmate__characteristics">
        <div class="soulmate__attribute">
          <span>Цвет глаз:</span>
          <div id="discoverEyeColor" class="hidden__btn">Узнать</div>
        </div>
        <div class="soulmate__attribute">
          <span>Цвет волос:</span>
          <div id="discoverHairColor" class="hidden__btn">Узнать</div>
        </div>
        <div class="soulmate__attribute">
          <span>Место проживания:</span>
          <div id="discoverRegion" class="hidden__btn">Узнать</div>
        </div>
        <div class="soulmate__attribute">
          <span>Любимая еда:</span>
          <div id="discoverFavoriteFood" class="hidden__btn">Узнать</div>
        </div>
        <div class="soulmate__attribute" id="soulmateInterests">
          <span>Интересы:</span>
          <div id="discoverInterests" class="hidden__btn">Узнать</div>
        </div>
        <div class="soulmate__attribute">
          <span>Тип соулмейта:</span>
          <div id="discoverSoulmateType" class="hidden__btn">Узнать</div>
        </div>
      </div>
      <div class="find-your-soulmate">
        <div class="find-your-soulmate__wrapper">
          <img src="@/assets/logo.svg" alt="inkast-logo" />
          <p>Найти своего соулмейта ты сможешь в <a href="/">Инкаст</a></p>
          <img src="@/assets/soulmate/heart-on-fire.png" alt="heart-on-fire" />
        </div>
      </div>
    </div>
    <div class="bg-blur"></div>
    <div class="soulmate__picture"></div>
  </section>
</template>

<script>
export default {
  setup() {
    async function getRandomData() {
      //let response = await fetch("./assets/soulmateCheck/soulmateData.json");
      let response = await fetch("https://inkast.me/assets/soulmateCheck/soulmateData.json");
      
      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }

      let getRandomElement = (array) =>
        array[Math.floor(Math.random() * array.length)];

      let randomEyeColor = getRandomElement(data.eyeColor);
      let randomHairColor = getRandomElement(data.hairColor);

      let randomCityRegion = getRandomElement(data.city_and_Region);
      let randomRegion = randomCityRegion.region;
      let randomCity = randomCityRegion.city;

      let randomFood = getRandomElement(data.favoriteFood);

      let getRandomInterests = () => {
        let interest1 = getRandomElement(data.interests);
        let interest2 = getRandomElement(data.interests);
        let interest3 = getRandomElement(data.interests);
        if (
          interest1 === interest2 ||
          interest1 === interest3 ||
          interest2 === interest3
        ) {
          return getRandomInterests();
        }
        return [interest1, interest2, interest3];
      };

      let [randomInterest01, randomInterest02, randomInterest03] =
        getRandomInterests();

      let randomSoulmateType = getRandomElement(data.soulmateType);

      return {
        eyeColor: randomEyeColor,
        hairColor: randomHairColor,
        region: randomRegion,
        city: randomCity,
        food: randomFood,
        interest01: randomInterest01,
        interest02: randomInterest02,
        interest03: randomInterest03,
        soulmateType: randomSoulmateType,
      };
    }

    // For previous realisation
    function getSoulmate(s, o, u, l, m, a, t, e) {
      let ids = [
        "discoverEyeColor",
        "discoverHairColor",
        "region",
        "favoriteFood",
        "interestFirst",
        "interestSecond",
        "interestThird",
        "soulmateType",
      ];
      let values = [s, o, u, l, m, a, t, e];

      for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
      }
    }

    function getSoulmateCharacteristic(a, b) {
      document.getElementById(b).textContent = a;
      document.getElementById(b).classList.add("showAnimation");
      document.getElementById(b).classList.add("newView");
    }

    function composeInterests(s, o, u, l) {
      let interestsElement = document.getElementById("discoverInterests");
      interestsElement.textContent = `${s}, ${o}, ${u}`;
      interestsElement.classList.add(l);
      interestsElement.classList.add("showAnimation");
      interestsElement.classList.add("newView");

      let interestsWrapper = document.getElementById("soulmateInterests");
      interestsWrapper.style = "align-items: baseline";
    }

    getRandomData().then((randomData) => {
      document
        .getElementById("discoverEyeColor")
        .addEventListener("click", () => {
          getSoulmateCharacteristic(randomData.eyeColor, "discoverEyeColor");
        });

      document
        .getElementById("discoverHairColor")
        .addEventListener("click", () => {
          getSoulmateCharacteristic(randomData.hairColor, "discoverHairColor");
        });

      document
        .getElementById("discoverRegion")
        .addEventListener("click", () => {
          getSoulmateCharacteristic(randomData.region, "discoverRegion");
        });

      document
        .getElementById("discoverFavoriteFood")
        .addEventListener("click", () => {
          getSoulmateCharacteristic(randomData.food, "discoverFavoriteFood");
        });

      document
        .getElementById("discoverInterests")
        .addEventListener("click", () => {
          composeInterests(
            randomData.interest01,
            randomData.interest02,
            randomData.interest03,
            "open__btn"
          );
        });

      document
        .getElementById("discoverSoulmateType")
        .addEventListener("click", () => {
          getSoulmateCharacteristic(
            randomData.soulmateType,
            "discoverSoulmateType"
          );
        });

      console.log("Цвет глаз:", randomData.eyeColor);
      console.log("Цвет волос:", randomData.hairColor);
      console.log("Регион:", randomData.region);
      console.log("Любимая еда:", randomData.food);
      console.log(
        "Интересы:",
        randomData.interest01,
        randomData.interest02,
        randomData.interest03
      );
      console.log("Вид соулмейта:", randomData.soulmateType);
    });
  },
};
</script>

<style lang="scss" scoped>
.soulmate__container {
  background: #d172fd;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-end;
  height: 100vh;
  padding: 1.667vw 0 1.667vw 1.667vw;

  .soulmate__contents {
    z-index: 10;
    position: relative;
    overflow-y: scroll;
    display: flex;
    flex-flow: nowrap column;
    border-radius: 15.998px;
    padding: 29.995px 27px 0 27px;
    width: 679.003px;
    height: 100%;
    background-color: #fff;

    .fortune-telling__bubble {
      width: fit-content;
      padding: 8.006px 24.005px;
      border: 2.002px solid #d172fd;
      border-radius: 99.994px;
      color: #d172fd;
      font-style: normal;
      font-weight: 400;
      font-size: 20.002px;
      line-height: 140%;
      letter-spacing: -0.06px;
      text-transform: capitalize;
    }

    .soulmate__characteristics {
      display: flex;
      flex-flow: nowrap column;
      // padding-top: 1.667vw;
      gap: 15.998px;
      margin-bottom: 40.003px;

      @media (max-width: 768px) {
        padding: 27px 27px;
      }
    }

    h1 {
      margin-top: 15.998px;
      margin-bottom: 29.002px;
      font-family: "Stratos LC Web";
      font-style: normal;
      font-weight: 400;
      font-size: 87.998px;
      line-height: 95%;
      letter-spacing: -0.025em;
      font-feature-settings: "pnum" on, "lnum" on;
    }

    h1::after {
      padding-top: 29.002px;
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ececec;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .find-your-soulmate {
      position: sticky;
      width: 100%;
      bottom: 0;
      padding-bottom: 32px;
      margin-top: auto;
      background: #fff;

      .find-your-soulmate__wrapper {
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
        padding: 33.998px 0 0 0;

        img:first-child {
          height: 36px;
          margin-right: 1.111vw;
        }
        img:last-child {
          height: 27.994px;
          margin-left: 8.006px;
        }

        p,
        a {
          margin: 0;
          font-style: normal;
          font-weight: 400;
          font-size: 20.002px;
          line-height: 140%;
          letter-spacing: -0.06px;
        }

        a {
          text-decoration: none;
          color: #d172fd;
        }

        @media (max-width: 768px) {
          justify-content: center;
          padding-top: 16px;
          padding-bottom: 24px;
        }
      }

      @media (max-width: 768px) {
        padding-bottom: 0;
      }
    }

    .find-your-soulmate::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ececec;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      // height: auto;

      .soulmate__contents-wrapper {
        padding: 0 24px;
        display: flex;
        flex-flow: nowrap column;
        background: url("../../src/assets/soulmate/soulmate__couple-bg-mobile.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 30vh;

        h1 {
          color: #fff;
        }

        .fortune-telling__bubble {
          margin-top: auto;
          color: #fff;
          border: 2px solid #fff;
        }

        .bg-blur::after {
          display: none;
        }
      }
    }
  }

  /*
  .soulmate__contents::-webkit-scrollbar {
    width: 8px;
    height: 4px;
  }

  .soulmate__contents::-webkit-scrollbar-track {
    background: transparent;
  }

  .soulmate__contents::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 255, 0.15);
    border-radius: 100px;
  }

  .soulmate__contents::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 255, 0.4);
  }

*/

  .soulmate__picture {
    flex: 1 1 auto;
    height: 100%;
    background: url("../../src/assets/soulmate/soulmate__couple-bg-none.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .bg-blur {
    width: 50%;
    position: absolute;
    right: 0;
    top: 30%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .bg-blur::after {
    content: "";
    position: absolute;
    width: 580.997px;
    height: 584.006px;
    background-color: #04fdff;
    top: 35%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    filter: blur(128px);
    z-index: 0;
  }

  .soulmate__attribute {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;

    span,
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 26.006px;
      line-height: 140%;
      letter-spacing: -0.06px;

      // @media (max-width:768px) {
      //   font-size: 26px;
      // }
    }

    .hidden__btn {
      cursor: pointer;
      display: flex;
      flex-flow: nowrap row;
      justify-content: center;
      align-content: center;
      background: #dceaf9;
      border-radius: 11.995px;
      font-style: normal;
      padding: 9px 11.995px 11.002px;
      font-weight: 400;
      font-size: 24.005px;
      line-height: 140%;
      letter-spacing: -0.06px;
      min-width: 193.003px;
    }

    .open__btn {
      max-width: 344.995px;
      justify-content: flex-end;
      text-align: end;
    }

    .showAnimation {
      animation: showHiddenCharacteristics 1s ease-in-out;
    }

    .newView {
      background-color: #fff;
      border: 2.002px solid #dceaf9;
    }

    @keyframes showHiddenCharacteristics {
      20% {
        background-color: #ffffff;
        border: 2.002px solid #9c97fe;
        box-shadow: 0px 2.002px 8px rgba(122, 174, 254, 0.25);
      }
      100% {
        background-color: #fff;
        border: 2.002px solid #dceaf9;
      }
    }
  }

  @media (max-width: 768px) {
    // height: 100%;
    padding: 24px;
  }
}
</style>
