// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/colors.scss";',
        },
      },
    },
  },
  app: {
    //If you change the name property, you also have to rename the CSS classes accordingly.
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  postcss: {
    plugins: {
      // "postcss-nested": {},
      // "postcss-custom-media": {},
    },
  },
  // hooks: {
  //   "build:manifest": (manifest) => {
  //     // find the app entry, css list
  //     const css = Object.values(manifest).find(
  //       (options) => options.isEntry
  //     )?.css;
  //     if (css) {
  //       // start from the end of the array and go to the beginning
  //       for (let i = css.length - 1; i >= 0; i--) {
  //         // if it starts with 'entry', remove it from the list
  //         if (css[i].startsWith("entry")) css.splice(i, 1);
  //       }
  //     }
  //   },
  // },
});
