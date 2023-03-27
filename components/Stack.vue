<template>
  <nuxt-link to="#" class="stack">
    <img
      :src="props.item.image_src"
      class="stack-logo"
      :alt="props.item.name"
    />

    <div class="flex flex-col">
      <span class="text-sm font-medium text-storm-400 dark:text-white">
        {{ props.item.name }}
      </span>
      <p class="text-sm text-neutro-300">
        {{ props.item.category }}
      </p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { StackItem } from '~/types/StackItem.types';

const props = defineProps({
  item: {
    type: Object as PropType<StackItem>,
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
