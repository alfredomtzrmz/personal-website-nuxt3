<template>
  <div class="flex h-full flex-col">
    <!--    Center div-->
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div
          class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
        ></div>
      </div>
    </div>
    <!--    Header and main content-->
    <div class="relative">
      <TheHeader />
      <main>Hello</main>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
