<script></script>

<template>
  <section>
    <div class="bg-secondary w-full h-[1px]"></div>
    <div
      class="flex flex-col md:flex-row justify-between px-[20px] md:px-[170px] py-[32px] gap-5"
    >
      <div class="flex flex-col gap-3">
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

        <p class="text-bg dark:text-secondary text-sm">
          © Copyright {{ new Date().getFullYear() }}. Made with ♡ By Nuky
          Irhamna
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-xl">Media</p>

        <div class="flex flex-row gap-3">
          <a href="https://www.mailto:nukyirhamna@gmail.com"
            ><UIcon
              name="material-symbols:mail-outline-sharp"
              class="size-6 hover:text-primary"
          /></a>

          <a href="https://wa.link/3sdqoq"
            ><UIcon
              name="ic:baseline-whatsapp"
              class="size-6 hover:text-primary"
          /></a>

          <a href="https://maps.app.goo.gl/t15dNJ1AsNzRP62a7"
            ><UIcon
              name="material-symbols:location-on-outline"
              class="size-6 hover:text-primary"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>
