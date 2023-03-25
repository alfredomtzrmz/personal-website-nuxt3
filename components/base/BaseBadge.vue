<template>
  <span :class="['base-badge', sizeClass]"> <slot> Badge </slot></span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ItemSize } from '@/types/DisplayOptions';

const props = defineProps({
  size: {
    type: String as PropType<ItemSize>,
    default: 'md',
  },
});

const sizeClass = computed((): string => `base-badge--${props.size}`);
</script>
