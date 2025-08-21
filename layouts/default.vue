<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="flex bg-[#FBFBFB] dark:bg-bg text-bg dark:text-white">
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>

    <div class="flex-1 flex flex-col">
      <Navbar />

      <main class="flex-1 px-[50px] md:px-[80px] lg:px-[170px] pt-20 md:pt-26">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>
