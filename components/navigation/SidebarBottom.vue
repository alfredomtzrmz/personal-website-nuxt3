<template>
  <div
    class="flex justify-between items-center border-t bg-gray-50 p-4 dark:border-gray-800 dark:bg-[#161616]"
  >
    <Icon name="flag:mx-1x1" class="h-6 w-6 rounded-full" />
    <client-only>
      <ToggleColorMode />
    </client-only>
    <Icon
      name="heroicons:cog-6-tooth"
      class="w-6 h-6 dark:text-white/40 text-gray-700"
    />
  </div>
</template>
