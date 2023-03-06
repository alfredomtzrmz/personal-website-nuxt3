<template>
  <div class="navbar">
    <nuxt-link to="/about" class="flex items-center space-x-3">
      <nuxt-img
        src="/images/avatar.jpg"
        format="png"
        alt="alfredo-avatar"
        class="h-10 w-10 rounded-full"
        loading="lazy"
        placeholder
      />
      <div class="flex flex-col text-sm">
        <h2 class="font-medium text-black dark:text-white">Alfredo Martínez</h2>
        <p class="text-gray-700 dark:text-white/40">FrontEnd Engineer</p>
      </div>
    </nuxt-link>
    <button
      type="button"
      class="inline-flex h-9 w-9 items-center justify-center rounded-md border focus:outline-none focus:ring-0 dark:border-gray-800"
      @click="sidebar.open()"
    >
      <span class="sr-only">Open sidebar</span>
      <Bars3Icon class="h-6 w-6 text-gray-700 dark:text-white/40" />
    </button>
  </div>
</template>
<script setup>
import { useSidebarStore } from '~/store/sidebar'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const sidebar = useSidebarStore()
</script>

<style lang="scss" scoped>
.navbar {
  @apply sticky top-0 z-10 flex items-center justify-between border-b bg-gray-50 p-5 dark:border-gray-800 dark:bg-black lg:hidden;
}
</style>
