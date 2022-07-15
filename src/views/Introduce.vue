<template>
  <div class="container">
    <div class="container-inner">
      <a href="/"><img src="@/assets/logo.svg" alt="" /></a>
      <h1>Привет, это Inkast</h1>
      <p>
        Cервис нового поколения приложений для знакомств, основанный
        на&nbsp;искусственном интеллекте
      </p>
      <div class="introduce__links">
        <a href="https://t.me/inkast_me">Телеграм-канал</a>
        <a href="https://vk.com/inkast_me">Группа Вконтакте</a>
        <a href="https://inkast.me/">Сайт</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  background: #1c1c1c;
  min-height: 100vh;
  max-width: 670px;

  margin: 0 auto;
  border-radius: 40px;
  padding-top: 172px;
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: 576px) {
    padding-top: 56px;
    border-radius: 20px;

    img {
      width: 32px !important;
      margin-bottom: 32px !important;
    }

    h1 {
      font-size: 24px;
      line-height: 29px;
    }
    p {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 32px;
    }

    .introduce__links a {
      font-size: 12px !important;
      line-height: 140%;
      padding: 11px 0.75em 11px;
      margin-bottom: 12px;
      border-radius: 8px;
    }
  }
}

.container-inner {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  margin: 0 auto;
  max-width: 420px;

  img {
    width: 54px;
    height: auto;
    margin-bottom: 44px;
  }
}

h1,
p,
a {
  color: #fff;
}

h1 {
  margin-bottom: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 51px;
  letter-spacing: -0.32px;
  color: #fff;
}

p {
  margin-bottom: 40px;
  margin-top: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;

  color: #fff;
}

.introduce__links {
  display: flex;
  flex-flow: nowrap column;

  a {
    // text-decoration: none;
    background: #cc5fff;
    margin-bottom: 16px;

    font-family: Stratos LC Web;
    border-radius: 12px;
    padding: 14px 0.75em 14px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.0707317px;

    color: #fff;
    cursor: pointer;
    transition: background-color 0.16s ease-in-out;
    text-decoration: none;
    text-align: center;
  }
}
</style>
