<template>
  <div class="sidebar-bottom" @click.stop="() => null">
    <Icon name="flag:es-1x1" class="h-6 w-6 rounded-full" />
    <client-only>
      <ToggleColorMode />
    </client-only>
    <Icon
      name="heroicons:cog-6-tooth"
      class="h-6 w-6 text-neutro-200 dark:text-neutro-100"
    />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-bottom {
  @apply flex items-center justify-between border-t border-zinc-300 bg-zinc-100 p-4 transition-colors duration-200 ease-in-out dark:border-storm-200 dark:bg-storm-300;
}
</style>
