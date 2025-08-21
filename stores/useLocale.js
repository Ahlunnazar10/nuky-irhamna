// stores/useLocale.js
import { defineStore } from "pinia";

export const useLocale = defineStore("locale", {
  state: () => ({
    language: "en", // default bahasa
  }),
  actions: {
    toggle() {
      this.language = this.language === "en" ? "id" : "en";
    },
  },
  getters: {
    isEnglish: (state) => state.language === "en",
    isIndonesia: (state) => state.language === "id",
  },
});
