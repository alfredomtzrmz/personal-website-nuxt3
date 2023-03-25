<template>
  <div class="navbar">
    <nuxt-link to="/about" class="flex items-center space-x-3">
      <MainAvatar placeholder />
      <div class="flex flex-col text-sm">
        <h2 class="text-storm-400 dark:text-white">Alfredo Martínez</h2>
        <p class="text-neutro-300 dark:text-neutro-500">FrontEnd Engineer</p>
      </div>
    </nuxt-link>
    <button type="button" class="navbar-menu-button" @click="sidebar.open()">
      <span class="sr-only">Open sidebar</span>
      <Icon
        name="heroicons:bars-3-20-solid"
        class="h-6 w-6 text-neutro-300 dark:text-neutro-400"
      />
    </button>
  </div>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar';
import MainAvatar from '~/components/navigation/MainAvatar.vue';

const sidebar = useSidebarStore();
</script>

<style lang="scss" scoped>
.navbar {
  @apply sticky top-0 z-10 flex items-center justify-between border-b border-zinc-300 bg-zinc-50 p-5 dark:border-storm-200 dark:bg-storm-400 xl:hidden;

  &-menu-button {
    @apply inline-flex h-9 w-9 items-center justify-center rounded-md border focus:outline-none focus:ring-0 dark:border-storm-200 border-zinc-300;
  }
}
</style>
