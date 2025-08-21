<script setup>
import { ref } from "vue";
import DarkModeToggle from "./DarkModeToggle.vue";
import { useLocale } from "~/stores/useLocale";

const locale = useLocale();
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleLanguage() {
  locale.toggle();
}

const translations = {
  en: {
    home: "home",
    quotes: "quotes",
    carrer: "carrer-overview",
    aboutMe: "about-me",
  },
  id: {
    home: "beranda",
    quotes: "quote",
    carrer: "ringkasan-karir",
    aboutMe: "tentang-saya",
  },
};
</script>

<template>
  <div
    class="fixed left-0 top-0 h-[360px] w-[50px] flex flex-col items-center justify-start px-2 z-60"
  >
    <!-- Garis vertikal -->
    <div class="w-[2px] bg-gray-400 h-[360px]"></div>

    <!-- Icon menu vertikal -->
    <div class="mt-4 flex flex-col space-y-3">
      <a
        href="https://www.mailto:nukyirhamna@gmail.com"
        class="hover:text-primary"
        title="Email"
      >
        <UIcon name="material-symbols:mail-rounded" class="size-6" />
      </a>

      <a href="wa.link/3sdqoq" class="hover:text-primary" title="WhatsApp">
        <UIcon name="ic:baseline-whatsapp" class="size-6" />
      </a>

      <a
        href="https://maps.app.goo.gl/t15dNJ1AsNzRP62a7"
        class="hover:text-primary"
        title="Location"
      >
        <UIcon name="material-symbols:location-on-outline" class="size-6" />
      </a>
    </div>
  </div>

  <div
    class="fixed bg-[#FBFBFB] dark:bg-bg w-full top-0 hidden md:flex justify-between items-center md:px-[80px] lg:px-[170px] pt-[32px] backdrop-blur-md z-50"
  >
    <!-- Logo saat mode dark -->
    <img
      src="/icons/logo.svg"
      alt="Logo"
      width="200"
      class="hidden dark:block"
    />

    <!-- Logo saat mode light -->
    <img
      src="/icons/logo-dark.svg"
      alt="Logo"
      width="200"
      class="block dark:hidden"
    />

    <!-- Menu -->
    <ul
      class="flex items-center space-x-6 font-medium text-md text-bg dark:text-white"
    >
      <li>
        <a href="#home" class="hover:text-primary"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].home }}</a
        >
      </li>
      <li>
        <a href="#quotes" class="hover:text-primary"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].quotes }}</a
        >
        <!-- <a href="/project" class="hover:text-primary"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].project }}</a
        > -->
      </li>
      <li>
        <a href="#career-overview" class="hover:text-primary"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].carrer }}</a
        >
      </li>
      <li>
        <a href="#about-me" class="hover:text-primary"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].aboutMe }}</a
        >
      </li>

      <li>
        <button
          @click="toggleLanguage"
          class="py-1 rounded flex items-center space-x-2 cursor-pointer"
        >
          <span>{{ locale.isEnglish ? "EN" : "ID" }}</span>
          <UIcon
            v-if="locale.isIndonesia"
            name="twemoji:flag-indonesia"
            class="size-5"
          />
          <UIcon
            v-else
            name="twemoji:flag-for-flag-united-states"
            class="size-5"
          />
        </button>
      </li>

      <li>
        <DarkModeToggle />
      </li>
    </ul>
  </div>

  <!-- Hamburger Button (Responsif) -->
  <div
    class="fixed z-50 bg-[#FBFBFB] dark:bg-bg flex flex-row space-x-44 ms-10 md:hidden w-full"
  >
    <!-- Logo saat mode dark -->
    <img
      src="/icons/logo.svg"
      alt="Logo"
      width="200"
      class="hidden dark:block"
    />

    <!-- Logo saat mode light -->
    <img
      src="/icons/logo-dark.svg"
      alt="Logo"
      width="200"
      class="block dark:hidden"
    />

    <button @click="toggleMenu" class="focus:outline-none">
      <!-- Icon Hamburger -->
      <UIcon
        name="charm:menu-hamburger"
        class="size-7 mt-2 text-bg dark:text-white"
      />
    </button>
  </div>

  <!-- Canvas slide dari kiri -->
  <div
    class="fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 transform transition-transform duration-300 z-60 block md:hidden"
    :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
  >
    <!-- Bagian atas: logo dan close -->
    <div
      class="flex items-center justify-between px-4 py-4 border-b border-gray-300 dark:border-gray-700"
    >
      <!-- Logo saat mode dark -->
      <img
        src="/icons/logo.svg"
        alt="Logo"
        class="h-10 w-40 hidden dark:block"
      />

      <!-- Logo saat mode light -->
      <img
        src="/icons/logo-dark.svg"
        alt="Logo"
        class="h-10 w-40 block dark:hidden"
      />

      <button @click="toggleMenu" class="p-2 focus:outline-none">
        <!-- Icon X (close) -->
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- Menu -->
    <ul class="flex flex-col p-4 space-y-4 text-lg">
      <li>
        <a href="#home" class="hover:text-primary" @click="toggleMenu"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].home }}</a
        >
      </li>
      <li>
        <a href="#quotes" class="hover:text-primary" @click="toggleMenu"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].quotes }}</a
        >
      </li>
      <li>
        <a
          href="#career-overview"
          class="hover:text-primary"
          @click="toggleMenu"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].carrer }}</a
        >
      </li>
      <li>
        <a href="#about-me" class="hover:text-primary" @click="toggleMenu"
          ><span class="text-primary font-bold">#</span
          >{{ translations[locale.language].aboutMe }}</a
        >
      </li>

      <li>
        <button
          @click="toggleLanguage"
          class="py-1 rounded flex items-center space-x-2 cursor-pointer"
        >
          <span>{{ locale.isEnglish ? "EN" : "ID" }}</span>
          <UIcon
            v-if="locale.isIndonesia"
            name="twemoji:flag-indonesia"
            class="size-5"
          />
          <UIcon
            v-else
            name="twemoji:flag-for-flag-united-states"
            class="size-5"
          />
        </button>
      </li>

      <li>
        <DarkModeToggle />
      </li>
    </ul>
  </div>
</template>
