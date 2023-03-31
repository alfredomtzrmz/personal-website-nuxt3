<template>
  <nuxt-link :to="`/stack/${props.item.slug}`" class="stack">
    <NuxtImg
      provider="imagekit"
      :src="props.item.icon_src"
      :alt="props.item.name"
      class="stack-logo"
      placeholder
    />
    <div class="flex flex-col">
      <span class="text-sm font-medium text-storm-400 dark:text-white">
        {{ props.item.name }}
      </span>
      <p class="text-sm text-neutro-300">
        {{ props.item.categories.name }}
      </p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Stack } from '@/types/Stack.types';

const props = defineProps({
  item: {
    type: Object as PropType<Stack>,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.stack {
  @apply flex gap-4 rounded-md p-3 transition-colors duration-200 ease-in-out hover:bg-zinc-100 dark:hover:bg-storm-300;

  &-logo {
    //border border-zinc-300 transition-colors duration-200 ease-in-out dark:border-storm-200
    @apply h-10 w-10 rounded-md;
  }
}
</style>
