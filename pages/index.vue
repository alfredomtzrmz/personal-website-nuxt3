<template>
  <div class="flex flex-col space-y-6">
    <h1
      class="text-4xl font-semibold text-storm-400 dark:text-zinc-200 xl:text-5xl"
    >
      Developing highly polished websites.
    </h1>
    <p class="font-medium text-storm-400 dark:text-zinc-200">
      Product developer obsessed with Vue, Nuxt and TailwindCSS ecosystem.
      Creating stunning digital products & helping to others developers to
      become FrontEnd experts.
    </p>
    <div class="flex space-x-4">
      <BaseLink to="/about"> About </BaseLink>
      <CopyEmailButton />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});
</script>
