<template>
  <div
    class="flex justify-between items-center border-t p-4 border-zinc-300 dark:border-storm-200 dark:bg-storm-300 bg-zinc-100"
  >
    <Icon name="flag:mx-1x1" class="h-6 w-6 rounded-full" />
    <client-only>
      <ToggleColorMode />
    </client-only>
    <Icon
      name="heroicons:cog-6-tooth"
      class="w-6 h-6 text-neutro-200 dark:text-neutro-100"
    />
  </div>
</template>
