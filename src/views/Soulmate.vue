<template>
  <section class="soulmate__container">
    <h1>Предсказатель соулмейта</h1>
    <button id="getSoulmate">Найти соулмейта</button>
    <div class="soulmate__attribute">
      <span>Цвет глаз:</span>
      <p id="eyeColor"></p>
    </div>
    <p id="hairColor"></p>
    <p id="region"></p>
    <p id="favoriteFood"></p>
    <div id="interests">
      <p id="interestFirst"></p>
      <p id="interestSecond"></p>
      <p id="interestThird"></p>
    </div>
    <p id="soulmateType"></p>
  </section>
</template>

<script>
export default {
  setup() {
    async function getRandomData() {
      let response = await fetch("./assets/soulmateCheck/soulmateData.json");
      let data = await response.json();

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

    function getSoulmate(s, o, u, l, m, a, t, e) {
      let ids = [
        "eyeColor",
        "hairColor",
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

    getRandomData().then((randomData) => {
      document
        .getElementById("getSoulmate")
        .addEventListener("click", function () {
          getSoulmate(
            randomData.eyeColor,
            randomData.hairColor,
            randomData.region,
            randomData.food,
            randomData.interest01,
            randomData.interest02,
            randomData.interest03,
            randomData.soulmateType
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
html {
  background: #fff;
}
.soulmate__container {
  background: #fff;
  height: 100vh;

  .soulmate__attribute {
    display: flex;
    flex-flow: nowrap row;
    align-items: center;
  }
}
</style>
