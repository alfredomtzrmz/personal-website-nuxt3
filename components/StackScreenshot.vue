<template>
  <NuxtImg
    :src="source"
    :alt="altSource"
    class="inline-block rounded-md"
    :placeholder="[672, 484.95, -100]"
  />
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const colorMode = useColorMode();

const props = defineProps({
  items: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  alt: {
    type: String,
    default: '',
  },
});

const source = computed((): string =>
  colorMode.preference === 'dark' ? props.items[0] : props.items[1]
);

const altSource = computed((): string =>
  colorMode.preference === 'dark' ? `${props.alt}-dark` : `${props.alt}-light`
);
</script>

<style scoped></style>
