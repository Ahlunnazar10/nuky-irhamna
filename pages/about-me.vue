<script setup>
import { useLocale } from "~/stores/useLocale";

const locale = useLocale();

const translations = {
  en: [
    // Section 1
    {
      section: 1,
      title: "about-me",
      desc: "Who am i?",
    },
    // Section 2
    {
      section: 2,
      p1: "I am a passionate Fullstack Developer with over 4 years of experience creating innovative and reliable digital solutions.",
      p2: "Skilled in both frontend and backend development, I leverage technologies like Vue.js, Laravel, Flutter, and cloud platforms such as AWS and DigitalOcean to build seamless web and mobile applications. I excel at transforming complex ideas into user-friendly, high-performance systems that deliver real value.",
      p3: "I believe the best projects stem from strong collaboration and clear communication, and I’m eager to partner with individuals or organizations seeking a dedicated developer to bring their ideas to life—whether it’s custom software, digital transformation, or strategic tech solutions.",
    },
    // Section 3
    {
      section: 3,
      title: "all-media",
    },
    // Section 4
    {
      section: 4,
      title: "my-fun-facts",
      p1: "Former amateur footballer",
      p2: "Karate black belt",
      p3: "Has a karate coaching license",
      p4: "Football Enthusiast",
      p5: "Enjoys Sports",
      p6: "eFootball Pro Player",
      p7: "Hardware Expertise",
      p8: "Internet Networking Skills",
      p9: "MLBB Pro Player",
      p10: "Like the Beach",
      p11: "Like touring",
      p12: "Guitarist",
      p13: "Drummer",
      p14: "Vocalist",
    },
  ],
  id: [
    // Section 1
    {
      section: 1,
      title: "tentang-saya",
      desc: "Siapa saya?",
    },
    // Section 2
    {
      section: 2,
      p1: "Saya adalah seorang Fullstack Developer yang bersemangat dengan lebih dari 4 tahun pengalaman dalam menciptakan solusi digital inovatif dan andal.",
      p2: "Menguasai pengembangan frontend dan backend, saya memanfaatkan teknologi seperti Vue.js, Laravel, Flutter, serta platform cloud seperti AWS dan DigitalOcean untuk membangun aplikasi web dan mobile yang mulus. Saya ahli dalam mengubah ide-ide kompleks menjadi sistem yang ramah pengguna dan berperforma tinggi yang memberikan nilai nyata.",
      p3: "Saya percaya bahwa proyek terbaik berasal dari kolaborasi yang kuat dan komunikasi yang jelas, dan saya siap berkolaborasi dengan individu atau organisasi yang mencari pengembang yang berkomitmen untuk mewujudkan ide-ide mereka—baik itu perangkat lunak kustom, transformasi digital, atau solusi teknologi strategis.",
    },
    // Section 3
    {
      section: 3,
      title: "semua-media",
    },
    // Section 4
    {
      section: 4,
      title: "fakta-tentang-saya",
      p1: "Mantan pemain sepak bola amatir",
      p2: "Sabuk hitam karate",
      p3: "Memiliki lisensi pelatih karate",
      p4: "Antusias Sepak Bola",
      p5: "Menyukai Olahraga",
      p6: "Pemain Pro eFootball",
      p7: "Ahli Perangkat Keras",
      p8: "Kemampuan Jaringan Internet",
      p9: "Pemain Pro MLBB",
      p10: "Suka Pantai",
      p11: "Suka touring",
      p12: "Gitaris",
      p13: "Drummer",
      p14: "Vokalis",
    },
  ],
};
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

    <section class="mb-32">
      <div class="flex flex-col md:flex-row grid-rows-2">
        <div class="w-[20rem] md:w-full flex flex-col gap-8">
          <p>
            {{ translations[locale.language].find((s) => s.section === 2).p1 }}
          </p>
          <p>
            {{ translations[locale.language].find((s) => s.section === 2).p2 }}
          </p>
          <p>
            {{ translations[locale.language].find((s) => s.section === 2).p3 }}
          </p>
        </div>

        <div class="w-full flex md:justify-end md:mt-[-80px]">
          <img
            width="339"
            height="508"
            src="/images/about-img.png"
            alt="Home About"
          />
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-26">
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="text-lg md:text-3xl font-semibold mb-6">
          <span class="text-primary">#</span
          >{{
            translations[locale.language].find((s) => s.section === 3).title
          }}
        </p>

        <div class="grid grid-cols-3 md:grid-cols-12 gap-4">
          <a href="https://github.com/Ahlunnazar10" target="_blank"
            ><UIcon name="akar-icons:github-fill" class="size-20"
          /></a>

          <a
            href="https://mailto:ahlun.nzr22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            ><UIcon
              name="material-symbols:alternate-email-rounded"
              class="size-20"
          /></a>

          <a
            href="https://www.linkedin.com/in/ahlun-nazar-bin-kasmin-6261b0205/"
            target="_blank"
            rel="noopener noreferrer"
            ><UIcon name="entypo-social:linkedin-with-circle" class="size-20"
          /></a>

          <a
            href="https://wa.link/e69cy5"
            target="_blank"
            rel="noopener noreferrer"
            ><UIcon name="garden:whatsapp-fill-16" class="size-20"
          /></a>

          <a href="http://t.me/Ahlunnazar22" target="_blank"
            ><UIcon name="jam:telegram" class="size-20"
          /></a>

          <a
            href="https://www.instagram.com/ahlun.nazar22?igsh=OHRuaDM3M2MxZXcw"
            target="_blank"
            rel="noopener noreferrer"
            ><UIcon name="lineicons:instagram-fill" class="size-20"
          /></a>

          <a
            href="https://www.facebook.com/profile.php?id=100008310343743"
            target="_blank"
            ><UIcon name="akar-icons:facebook-fill" class="size-20"
          /></a>

          <a
            href="https://discord.com/channels/spyware22"
            target="_blank"
            rel="noopener noreferrer"
            ><UIcon name="bi:discord" class="size-20"
          /></a>
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-26">
      <div class="flex flex-col gap-2 md:gap-3">
        <p class="text-lg md:text-3xl font-semibold mb-6">
          <span class="text-primary">#</span
          >{{
            translations[locale.language].find((s) => s.section === 4).title
          }}
        </p>

        <div class="flex flex-col md:flex-row grid-rows-2 gap-20">
          <div class="flex flex-col gap-3 w-full">
            <div class="w-[20rem] md:w-full flex flex-row gap-3">
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p1
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p2
                }}
              </div>
            </div>

            <div class="w-[20rem] md:w-full flex flex-row gap-3">
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p3
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p4
                }}
              </div>
            </div>

            <div class="w-[20rem] md:w-full flex flex-row gap-3">
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p5
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p6
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p7
                }}
              </div>
            </div>

            <div class="w-[20rem] md:w-full flex flex-row gap-3">
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p8
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p9
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p10
                }}
              </div>
            </div>

            <div class="w-[20rem] md:w-full flex flex-row gap-3">
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p11
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p12
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p13
                }}
              </div>
              <div class="w-fit h-fit border border-white p-2">
                {{
                  translations[locale.language].find((s) => s.section === 4).p14
                }}
              </div>
            </div>
          </div>

          <div class="w-full flex md:justify-end md:mt-[-80px]">
            <img
              width="339"
              height="508"
              src="/icons/fun-fact.svg"
              alt="Home About"
            />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
