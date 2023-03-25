<template>
  <button
    v-if="$colorMode.preference === 'dark'"
    @click.stop="$colorMode.preference = 'light'"
  >
    <Icon
      name="ph:moon-duotone"
      class="h-6 w-6 dark:text-teal-500 text-teal-400"
    />
  </button>
  <button
    v-if="$colorMode.preference === 'light'"
    @click.stop="$colorMode.preference = 'dark'"
  >
    <Icon
      name="ph:sun-duotone"
      class="h-6 w-6 dark:text-teal-500 text-teal-400"
    />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();

const favicon = computed((): string =>
  colorMode.value === 'dark' ? '/favicon-dark.png' : '/favicon-light.png'
);

useFavicon(favicon);
</script>
