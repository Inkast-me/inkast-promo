module.exports = {
  pluginOptions: {
    i18n: {
      locale: "ru-RU",
      fallbackLocale: "en-US",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  pwa: {
    manifestOptions: {
      name: "Inkast",
      short_name: "Inkast",
      start_url: ".",
      display: "standalone",
      theme_color: "#C06CE8",
    },

    themeColor: "#C06CE8",
    msTileColor: "#C06CE8",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
