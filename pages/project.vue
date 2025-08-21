<script setup>
import { useLocale } from "~/stores/useLocale";

const locale = useLocale();

const translations = {
  en: [
    // Section 1
    {
      section: 1,
      title: "projects",
      desc: "List of my projects",
    },
  ],
  id: [
    // Section 1
    {
      section: 1,
      title: "proyek",
      desc: "Berikut ini adalah dafrar proyek saya",
    },
  ],
};

const projects = [
  {
    year: 2025,
    items: [
      {
        title: "Olahbola Official Web",
        description:
          "Wordpress, Elementor Pro, Essential Addons, Foodu Pro, Site Kit (Google Search Console, Google Analytic, Google Adsense), WooComerce, Yoast SEO, CPT UI, Securi Security",
        image: "/images/mockup-olahbola.png",
        link: "https://olahbola.com/",
      },
      {
        title: "IGVault Indonesia",
        description:
          "Vue 3, Daisy UI, Tailwind CSS v4, Swiper.js, AOS, NodeJS, Twilio, Xendit Payment, IOH Payment, XL Payment, NineLives, Vercel, AWS, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-igvault.png",
        link: "https://www.igvault.id/",
      },
      {
        title: "IGVault Indonesia CMS",
        description:
          "Nuxt 3, Nuxt UI, Daisy UI, Tailwind CSS v4, Nuxt Charts, Sheets JS, Data AOS, NodeJS, NineLives, IGV Game Room, Vercel, AWS, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-igvault-cms.png",
        link: "https://www.igvault.id/",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title: "Kitagaruda Official Web",
        description:
          "Vue 3, Daisy UI,Tailwind CSS v4, Swiper.js, Banner JS Tag, Laravel 11, RESTful API, DigitalOcean, MongoDB, VPS Server, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-kitagaruda.png",
        link: "https://kitagaruda.id/",
      },
      {
        title: "ASX Sportshero Official",
        description:
          "Wordpress, Elementor Pro, Essential Addons, EmbedPress, Site Kit (Google Search Console, Google Analytic, Google Adsense), WooComerce, Yoast SEO, CPT UI, Securi Security",
        image: "/images/mockup-asx-sportshero.png",
        link: "https://asx.sportshero.live/",
      },
      {
        title: "Trivela Mobile Apps",
        description:
          "Dart, Flutter, Laravel 11, RestFull API, MongoDB, QuickType, Google Play Console",
        image: "/images/mobile-mockup-trivela.png",
        link: "https://play.google.com/",
      },
      {
        title: "AbzTrak Mobile Apps",
        description:
          "Dart, Flutter, Laravel 11, RestFull API, MySql, QuickType, Face API JS, Geolocation, Google Play Console",
        image: "/images/mobile-mockup-abztrak.png",
        link: "https://play.google.com/",
      },
      {
        title: "AbzTrak Official Web",
        description:
          "Laravel Blade, Bootstrap v5, Chart.js, Laravel 11, Geolocation, Laravel Excel, Datatables, Corn Jobs, Laravel Emails, Face API JS, RESTful API, MySql, VPS Server, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-abztrak-web.png",
        link: "https://absensi.msshrpay.com/login/admin",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "MSShrpay Official Web",
        description:
          "Laravel Blade, Bootstrap v5, Chart.js, Laravel 11, RESTful API, MySql, VPS Server, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-msshrpay.png",
        link: "https://msshrpay.com",
      },
      {
        title: "MSShrpay Admin CMS Web",
        description:
          "Laravel Blade, Bootstrap v5, Chart.js, Laravel 11, RESTful API, MySql, VPS Server, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-msshrpay-admin-cms.png",
        link: "https://msshrpay.com/login",
      },
      {
        title: "HBIM DKI Jakarta Web",
        description:
          "Laravel Blade, Bootstrap v5, Chart.js, Laravel 11, RESTful API, MySql, VPS Server, Google Analytic, Google Tag Manager, Google Search Console, Adobe Fusion Pro",
        image: "/images/mockup-hbim.png",
        link: "https://hbimjakarta.com/",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "Flostore Official Web",
        description:
          "Vue JS v2, Bootstrap v5, Data AOS, Chart.js, Laravel 10, RESTful API, MySql",
        image: "/images/mockup-flostore.png",
        link: "https://ahlunnazar10.github.io/flobamora/index.html",
      },
      {
        title: "AhA Admin CMS Web",
        description:
          "Laravel Blade, Bootstrap v5, Chart.js, Laravel 10, RESTful API, MySql, ",
        image: "/images/mockup-aha.png",
        link: "https://ahlunnazar10.github.io/flobamora/index.html",
      },
      {
        title: "Village Information System",
        description:
          "Laravel Blade, Vue JS v2, Bootstrap v5, Chart.js, Laravel 9, RESTful API, MySql, VPS Server, Google Analytic, Google Tag Manager, Google Search Console",
        image: "/images/mockup-sid.png",
        link: "https://ahlunnazar10.github.io/SID-mockup/",
      },
    ],
  },
];
</script>

<template>
  <NuxtLayout name="default">
    <section class="mb-10 md:mb-26">
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="text-lg md:text-3xl font-semibold">
          <span class="text-primary">/</span
          >{{
            translations[locale.language].find((s) => s.section === 1).title
          }}
        </p>
        <p>
          {{ translations[locale.language].find((s) => s.section === 1).desc }}
        </p>
      </div>
    </section>

    <section
      v-for="projectSet in projects"
      :key="projectSet.year"
      class="mb-16"
    >
      <p class="text-lg md:text-3xl mb-6">
        <span class="text-primary">#</span>{{ projectSet.year }}-projects
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projectSet.items"
          :key="project.title"
          class="border-2 border-secondary"
        >
          <img :src="project.image" :alt="project.title" />

          <div class="p-4">
            <h1 class="text-lg md:text-2xl mb-2">{{ project.title }}</h1>
            <p class="text-xs">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="btn btn-sm btn-outline btn-primary mt-6"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
