<script setup>
import { useLocale } from "~/stores/useLocale";

const locale = useLocale();

const translations = {
  en: {
    title: "stacks",
    desc: "List of my stacks",
  },
  id: {
    title: "keahlian",
    desc: "Berikut ini adalah dafrar keahlian yang saya kuasai",
  },
};

const stacks = [
  {
    stackName: "Frontend",
    items: [
      {
        title: "JavaScript",
        link: "https://www.javascript.com/",
        icon: "material-icon-theme:javascript",
      },
      {
        title: "Dart",
        link: "https://dart.dev/",
        icon: "vscode-icons:file-type-dartlang",
      },
      {
        title: "Nuxt JS",
        link: "https://nuxt.com/",
        icon: "logos:nuxt-icon",
      },
      {
        title: "Vue JS",
        link: "https://vuejs.org/",
        icon: "vscode-icons:file-type-vue",
      },
      {
        title: "Flutter",
        link: "https://flutter.dev/",
        icon: "vscode-icons:file-type-flutter",
      },
      {
        title: "Twilwind CSS",
        link: "https://tailwindcss.com/",
        icon: "devicon:tailwindcss",
      },
      {
        title: "Bootstrap CSS",
        link: "https://getbootstrap.com/",
        icon: "devicon:bootstrap",
      },
      {
        title: "jQuery",
        link: "https://jquery.com/",
        icon: "devicon:jquery",
      },
    ],
  },
  {
    stackName: "Backend",
    items: [
      {
        title: "PHP",
        link: "https://www.php.net/",
        icon: "vscode-icons:file-type-php2",
      },
      {
        title: "Laravel",
        link: "https://laravel.com/",
        icon: "material-icon-theme:laravel",
      },
      {
        title: "Codeigniter",
        link: "https://www.codeigniter.com/",
        icon: "logos:codeigniter-icon",
      },
      {
        title: "Lumen PHP",
        link: "https://lumen.laravel.com/",
        icon: "devicon:lumen",
      },
      {
        title: "MySql",
        link: "https://www.mysql.com/",
        icon: "logos:mysql",
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/",
        icon: "skill-icons:mongodb",
      },
      {
        title: "RESTful API",
        link: "https://restfulapi.net/",
        icon: "logos:fastapi-icon",
      },
    ],
  },
  {
    stackName: "Cloud & Hosting",
    items: [
      {
        title: "CloudFlare",
        link: "https://www.cloudflare.com/",
        icon: "skill-icons:cloudflare-light",
      },
      {
        title: "Vercel",
        link: "https://vercel.com/",
        icon: "skill-icons:vercel-light",
      },
      {
        title: "Hostinger",
        link: "https://www.hostinger.com",
        icon: "simple-icons:hostinger",
      },
      {
        title: "DigitalOcean",
        link: "https://www.digitalocean.com/",
        icon: "devicon:digitalocean",
      },
      {
        title: "Firebase",
        link: "https://firebase.google.com/",
        icon: "vscode-icons:file-type-firebase",
      },
      {
        title: "Amazon Web Services (AWS)",
        link: "https://aws.amazon.com/",
        icon: "skill-icons:aws-light",
      },
    ],
  },
  {
    stackName: "Tools & Others",
    items: [
      {
        title: "GitHub",
        link: "https://github.com/",
        icon: "mdi:github",
      },
      {
        title: "CMS WordPress",
        link: "https://wordpress.org/",
        icon: "skill-icons:wordpress",
      },
      {
        title: "Google Search Console",
        link: "https://search.google.com/search-console/about",
        icon: "logos:google-search-console",
      },
      {
        title: "Google Analytics",
        link: "https://developers.google.com/analytics",
        icon: "logos:google-analytics",
      },
      {
        title: "Google Tag Manager",
        link: "https://tagmanager.google.com/",
        icon: "logos:google-tag-manager",
      },
      {
        title: "Google AdSense",
        link: "https://adsense.google.com/adsense/",
        icon: "logos:google-adsense",
      },
      {
        title: "Postman",
        link: "https://www.postman.com/",
        icon: "devicon:postman",
      },
      {
        title: "Photoshop",
        link: "https://www.adobe.com/id_id/products/photoshop.html",
        icon: "devicon:photoshop",
      },
      {
        title: "Figma",
        link: "https://www.figma.com/",
        icon: "devicon:figma",
      },
      {
        title: "Canva",
        link: "https://www.canva.com/id_id/",
        icon: "devicon:canva",
      },
      {
        title: "Notion",
        link: "https://www.notion.com/",
        icon: "skill-icons:notion-dark",
      },
      {
        title: "Jira",
        link: "https://www.atlassian.com/software/jira",
        icon: "devicon:jira",
      },
      {
        title: "Capcut",
        link: "https://www.capcut.com/id-id",
        icon: "hugeicons:capcut-rectangle",
      },
      {
        title: "Wondershare Filmora",
        link: "https://filmora.wondershare.com/",
        icon: "simple-icons:wondersharefilmora",
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
          >{{ translations[locale.language].title }}
        </p>
        <p>{{ translations[locale.language].desc }}</p>
      </div>
    </section>

    <section v-for="stackSet in stacks" :key="stackSet.stackName" class="mb-16">
      <p class="text-lg md:text-3xl mb-6">
        <span class="text-primary">#</span>{{ stackSet.stackName }}
      </p>

      <div class="w-full">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="stack in stackSet.items" :key="stack.title">
            <UTooltip :delay-duration="0" :text="stack.title">
              <a
                :href="stack.link"
                target="_blank"
                class="border-2 border-secondary bg-transparent hover:bg-[#232323] py-6 rounded-lg flex justify-center"
              >
                <UIcon :name="stack.icon" class="size-15 md:size-30" />
              </a>
            </UTooltip>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
