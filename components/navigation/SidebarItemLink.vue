<template>
  <nuxt-link
    :to="item.to"
    :class="[
      'sidebar-item group',
      {
        'sidebar-item-current': isCurrent,
      },
    ]"
    @click="sidebar.close()"
  >
    <Icon
      :name="item.icon"
      :class="[
        'sidebar-item-icon',
        {
          'sidebar-item-current-icon': isCurrent,
        },
      ]"
    />
    <span
      :class="[
        'sidebar-item-text',
        {
          'sidebar-item-current-text': isCurrent,
        },
      ]"
    >
      {{ item.name }}
    </span>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { SidebarItem } from '@/types/navigation/Sidebar.types';
import { useSidebarStore } from '@/store/sidebar';

const props = defineProps<{
  item: SidebarItem;
}>();

const sidebar = useSidebarStore();
const route = useRoute();

const routePath = computed(() => route.path);
const routeName = computed(() => route.name);

const isCurrent = computed(() =>
  routeName.value === 'index' && props.item.to === '/'
    ? true
    : routePath.value.startsWith(String(props.item.to)) && props.item.to !== '/'
);
</script>

<style lang="scss">
.sidebar-item {
  @apply flex cursor-pointer items-center rounded-md border border-transparent px-3
  transition-all duration-150 ease-in py-2 space-x-[.625rem];

  &-icon {
    @apply h-5 w-5 flex-shrink-0 text-neutro-200 dark:text-neutro-100 transition-all duration-150
    ease-in group-hover:text-storm-400 dark:group-hover:text-white;
  }

  &-text {
    @apply text-sm text-neutro-200 dark:text-neutro-100 transition-all duration-150 ease-in
    group-hover:text-storm-400 dark:group-hover:text-white;
  }

  &-current {
    @apply border-zinc-300 bg-white dark:border-storm-50 dark:bg-storm-100;

    &-icon {
      @apply text-storm-400 dark:text-white;
    }

    &-text {
      @apply text-storm-400 dark:text-white;
    }
  }
}
</style>
