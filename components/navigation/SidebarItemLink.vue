<template>
  <nuxt-link
    :to="item.to"
    :class="[
      isCurrent
        ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
        : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
      'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
    ]"
    @click="sidebar.close()"
  >
    <Icon
      :name="item.icon"
      :class="[
        isCurrent
          ? 'dark:text-teal-400 text-teal-500'
          : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
        'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
      ]"
    />
    <span class="text-sm">
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
