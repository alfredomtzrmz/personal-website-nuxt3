<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full flex-col">
      <!--    Center div-->
      <div class="fixed inset-0 flex justify-center">
        <div class="flex w-full max-w-7xl lg:px-16 sm:px-8">
          <div
            class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          />
        </div>
      </div>
      <!--    Header and main content-->
      <div class="relative">
        <header class="relative z-50 flex flex-col h-[180px]">
          <Navbar />
        </header>
        <div class="top-0 -mb-3 pt-3 lg:px-16 sm:px-8">
          <div class="mx-auto max-w-7xl">
            <nuxt-img
              src="/images/avatar.jpg"
              format="png"
              alt="alfredo-avatar"
              class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
              loading="lazy"
              placeholder
            />
          </div>
        </div>
        <main class="flex w-full max-w-7xl lg:px-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
