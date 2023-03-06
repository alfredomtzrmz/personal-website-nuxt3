<template>
  <div>
    <Sidebar />
    <div class="flex flex-1 flex-col lg:pl-64">
      <Navbar />
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  display: block;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400/50 dark:bg-gray-700/50;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500/40 dark:bg-gray-700/60 cursor-pointer;
}
</style>
