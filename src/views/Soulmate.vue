<template>
  <section class="soulmate__container">
    <div class="soulmate_contents">
      <div class="soulmate_contents-wrapper">
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
          <p>
            Найти своего соулмейта ты<br class="hiddenBr" />сможешь в<a
              href="/"
            >
              Инкаст</a
            ><img
              src="@/assets/soulmate/heart-on-fire.png"
              alt="heart-on-fire"
            />
          </p>
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
    function addSEO() {
      let content = [
        [
          "Онлайн-гадание на соулмейта",
          "Онлайн-гадание на соулмейта - это сервис, который предсказывает внешность и увлечения человека, который предназначен вам судьбой.",
          "соулмейт, кто твой соулмейт, соулмейт даты, соулмейт ау, про соулмейтов, соулмейт +по дате рождения, твой соулмейт тесты, соулмейт питер, соулмейт гача, луны соулмейтов, мир соулмейт, тест +на соулмейта, гача лайф соулмейта, цвета соулмейтов, как найти соулмейта, день соулмейтов, слэш соулмейты, артон соулмейты, соулмейт +и т +и, описание соулмейта, соулмейты +в реальной, как узнать +кто твой соулмейт, тони соулмейт, вигуки соулмейт, драрри соулмейты, соулмейты онлайн, что значит соулмейт, гарри +и соулмейты, тони питер соулмейты, гача лайф цвета соулмейта, соулмейт гарри поттер, соулмейт +это простыми, питер паркер соулмейт, драмиона соулмейты, рассчитать соулмейта, фф питер соулмейты, соулмейт фото, гермиона соулмейты, минсоны соулмейты, соулмейт романтика, луны соулмейтов +по дате, фф ау соулмейт, кто твой соулмейт +из стрей кидс, фанфики питер паркер соулмейты, юнмины соулмейты, соулмейт отзывы, тони старк питер паркер соулмейты, асклепия соулмейт фото, твой соулмейт +из stray kids, ориджиналы соулмейты, кто твой соулмейт +из stray, манхва соулмейт, песня соулмейт, соулмейт +это +в молодежном сленге, фф хенликсы соулмейты, мстители соулмейт, соулмейты книги, фанфики тони +и питер соулмейты, соулмейт перевод, фф старкер соулмейт, луны соулмейтов +по дате рождения, снарри соулмейты, соулмейт +на английском, разлучили +с соулмейтом, соулмейт омегаверс, нил +и эндрю соулмейты, соулмейт сколько дней, соулмейты генератор, как понять соулмейты, соулмейт вероника, рука соулмейта, соулмейт друг, соулмейт игра, соулмейт токийские мстители, фф минсоны соулмейты, гарри драко соулмейты, соулмейт гарри поттер фанфик, соулмейт клуб, кто твой соулмейт +из скз, роза соулмейт, такемичи соулмейты, через сколько рождаются соулмейты, юнмины фф соулмейты, поиск соулмейта, соулмейт создать, соулмейт чонгука, соулмейт +все серии, дни рождения соулмейтов, другой соулмейт, соулмейт 13 карт, соулмейт синоним, гермиона +и драко соулмейт, соулмейты гет, ти +и ти соулмейт, фф тони +и питер соулмейты, соулмейт кафе, фф бтс соулмейты, фф питер паркер соулмейт, через сколько дней родился соулмейт, через сколько дней рождаются соулмейты, соулмейт спб, соулмейты сборник, соулмейт ютуб, соулмейты итзи, наруто соулмейты, скачать соулмейта, фф нил соулмейты, димиль соулмейты, соулмейт тм, фанфик бтс соулмейты, вансяни соулмейты, виды соулмейтов, нелюбимый соулмейт, соулмейт сайт, соулмейт энхайпен, соулмейты видео, фанфики соулмейты читать, фф драмиона соулмейты, 3 соулмейта, истории соулмейтов, соулмейты существуют, uquiz твой соулмейт, ная соулмейт, парни соулмейты, соулмейт новосибирск, встретил соулмейта, любовь соулмейтов, соукоку соулмейты, соулмейт +по дате рождения, узнать соулмейта +по дате, имя соулмейта тест, когда родились соулмейты, когда рождаются соулмейты, соулмейт аниме, соулмейт люцифер, фф эндрю +и нил соулмейты, вселенная соулмейты, день соулмейтов дата, соулмейт ставрополь, 139 дней соулмейт +по дате, генератор соулмейт ау, день рождения соулмейта +по дате рождения, как узнать +своего соулмейта, соулмейт 18, соулмейт +по дате рождения 139 дней, соулмейт хорошая, соулмейты знаки, фф соулмейт слэш, рассчитать соулмейта 139 дней, соулмейт секс, соулмейт юри, фанфик соулмейт ориджинал, соулмейт вики, соулмейт девушка, соулмейты калькулятор, твой соулмейт бтс, тест +на соулмейта +для двоих, ваточник соулмейт фото, идеи +для соулмейт ау, кто +такие соулмейты +в корее, кто твой соулмейт +из тхт, люцифер вики соулмейты, нелюбимым соулмейт фф, родственные души соулмейтов, соулмейты сюжет, кто твой соулмейт +из итзи, тест +кто +из стрей кидс твой соулмейт, тест +кто твой соулмейт +из стрей, фанфики артон соулмейты, фф гермиона соулмейт, что означает соулмейт, глаза соулмейта, котокафе соулмейт спб, кто твой соулмейт +из клуба романтики, связь соулмейтов, северус гарри соулмейт, ваточник соулмейт описание, вигу соулмейты, вигуки фанфики соулмейт, соулмейт бот, соулмейт знаки зодиака, тест соулмейт +в реальной жизни, тест соулмейт +из stray kids, дорама +мой соулмейт смотреть онлайн, соулмейт профессора хаоса, соулмейт рф, фф вансяни соулмейты, фф соулмейты такемичи, шерлок соулмейт, ищу соулмейта, как узнать соулмейта +в жизни, рассчитать 139 дней соулмейт +по дате, рассчитать день рождения соулмейта, рассчитать соулмейта +по дате рождения 139, соулмейт +по дате рождения рассчитать 139 дней, существуют ли соулмейты, фф мстители соулмейт, билл диппер соулмейт, кто +такой соулмейт +в жизни человека, ложь соулмейта, найди соулмейта тест, соулмейты гп, фазы луны соулмейты, фф мини соулмейтов, соулмейт бтс тест, соулмейт роза фото, фанфик эндрю +и нил соулмейты, фф бонтен +и т +и соулмейт, фф тм соулмейты, артон соулмейты ау, гарри поттер соулмейты фф, где +мой соулмейт, дазай +и чуя соулмейты, дорама +мой соулмейт +ты смотреть бесплатно, магическая битва соулмейты, реален ли соулмейты, фф старк +и питер соулмейты, есть ли соулмейт, комикс соулмейт, моя вселенная +мой соулмейт лакорн, соулмейт +из enhypen, соулмейты баки соулмейты питер, соулмейты жанр, твой соулмейт +из enhypen, фф снарри соулмейты, боль соулмейта, драрри фанфики соулмейты, найти соулмейта тг, соулмейт компания, соулмейт фф 13 карт, стайлз дерек соулмейты, стайлз соулмейт фанфики, тест +кто твой соулмейт +из stray kids, узнать +своего соулмейта +по дате рождения, управлять соулмейт, фф лань чжань +и вэй ин соулмейты, фф соулмейт омегаверс, фф соулмейты 13, фф +том +и гарри соулмейты, чонгук +и тэхен соулмейты, ау где соулмейты, кто твой соулмейт +из энхайпен, сайты +для поиска соулмейтов, соулмейт написать, соулмейт скз тест, соулмейты геншин, соулмейты тик ток, старкер соулмейт фанфик, тест ваш соулмейт, тест +на соулмейта +из стрей кидс, фф соулмейты +все ради игры, школа соулмейтов, бтс +кто твой соулмейт тест",
          "Онлайн-гадание на соулмейта",
          "Онлайн-гадание на соулмейта - это сервис, который предсказывает внешность и увлечения человека, который предназначен вам судьбой.",
        ],
        [
          'meta[name="title"]',
          'meta[name="description"]',
          'meta[name="keywords"]',
          'meta[property="og:title"]',
          'meta[property="og:description"]',
        ],
      ];

      document.title = content[(0, 0)];

      for (let i = 0; i < content[0].length; i++) {
        let meta = document.querySelector(content[1][i]);
        meta.setAttribute("content", content[0][i]);
      }
    }
    addSEO();

    async function getRandomData() {
      //let response = await fetch("./assets/soulmateCheck/soulmateData.json");
      let response = await fetch(
        "https://inkast.me/assets/soulmateCheck/soulmateData.json"
      );
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

      /*

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

      */
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

  .soulmate_contents {
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

      @media (max-width: 576px) {
        padding: 16px 16px 0 16px;
        margin-bottom: 0;
        gap: 8px;
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
        }

        p,
        a {
          margin: 0;
          font-style: normal;
          font-weight: 400;
          font-size: 20.002px;
          line-height: 140%;
          letter-spacing: -0.06px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hiddenBr {
          display: none;
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

        @media (max-width: 576px) {
          p,
          a {
            display: inline;
            font-size: 14px;
          }

          img:first-child {
            margin-right: 16px;
          }

          img:last-child {
            display: none;
          }

          .hiddenBr {
            display: block;
          }
        }
      }

      @media (max-width: 768px) {
        padding-bottom: 0;
      }

      @media (max-width: 576px) {
        padding: 0 16px;
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

      .soulmate_contents-wrapper {
        padding: 0 24px;
        display: flex;
        flex-flow: nowrap column;
        background: url("../../src/assets/soulmate/soulmate__couple-bg-mobile.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
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

    @media (max-width: 576px) {
      .soulmate_contents-wrapper {
        padding: 0 16px 24px 16px;

        h1 {
          font-size: 44px;
          margin-top: 8px;
          margin-bottom: 0;
        }
      }

      .fortune-telling__bubble {
        padding: 4px 16px;
        border: 1px solid #fff !important;
        font-size: 14px;
      }
    }
  }

  /*
  .soulmate_contents::-webkit-scrollbar {
    width: 8px;
    height: 4px;
  }

  .soulmate_contents::-webkit-scrollbar-track {
    background: transparent;
  }

  .soulmate_contents::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 255, 0.15);
    border-radius: 100px;
  }

  .soulmate_contents::-webkit-scrollbar-thumb:hover {
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

    @media (max-width: 576px) {
      animation: showHiddenCharacteristicsMobile 0.2s ease-in-out;
    }

    .newView {
      background-color: #fff;
      border: 2.002px solid #dceaf9;
    }

    @keyframes showHiddenCharacteristics {
      20% {
        background-color: #ffffff;
        border: 2px solid #9c97fe;
        box-shadow: 0px 2px 8px rgba(122, 174, 254, 0.25);
      }
      100% {
        background-color: #fff;
        border: 2px solid #dceaf9;
      }
    }

    @keyframes showHiddenCharacteristicsMobile {
      20% {
        background-color: #ffffff;
        border: 1px solid #9c97fe;
        box-shadow: 0px 1px 8px rgba(122, 174, 254, 0.25);
      }
      100% {
        background-color: #fff;
        border: 1px solid #dceaf9;
      }
    }

    @media (max-width: 576px) {
      span,
      p {
        font-size: 16px;
        margin-right: 24px;
      }

      .hidden__btn {
        min-width: inherit;
        font-size: 14px;
        padding: 9px 16px 11px;
        border: 1px solid #dceaf9;
      }

      .open__btn {
        max-width: none;
      }

      .newView {
        text-align: end;
      }
    }
  }

  @media (max-width: 768px) {
    // height: 100%;
    padding: 24px;
  }

  @media (max-width: 576px) {
    padding: 12px;
  }
}
</style>
