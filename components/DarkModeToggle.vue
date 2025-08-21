<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(true);

onMounted(() => {
  // Set default ke dark mode
  document.documentElement.classList.add("dark");
  // Optional: deteksi sistem
  // if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  //   isDark.value = false;
  //   document.documentElement.classList.remove('dark');
  // }
});

function toggleDark() {
  if (isDark.value) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  isDark.value = !isDark.value;
}
</script>

<template>
  <button
    @click="toggleDark"
    class="rounded-full text-sm transition cursor-pointer"
  >
    <UTooltip :delay-duration="0" :text="isDark ? 'light mode' : 'dark mode'">
      <UIcon
        :name="
          isDark
            ? 'material-symbols:light-mode-outline'
            : 'material-symbols:dark-mode-outline'
        "
        class="size-5 mt-1.5"
      />
    </UTooltip>
  </button>
</template>
