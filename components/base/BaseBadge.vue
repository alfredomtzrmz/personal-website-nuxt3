<template>
  <span :class="['base-badge', sizeClass, colorClass, roundedClass]">
    <slot> Badge </slot>
  </span>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ItemColor, ItemRounded, ItemSize } from '@/types/DisplayOptions';

const props = defineProps({
  size: {
    type: String as PropType<ItemSize>,
    default: 'md',
  },
  color: {
    type: [String] as PropType<ItemColor | string>,
    default: 'primary',
  },
  rounded: {
    type: String as PropType<ItemRounded>,
    default: 'md',
  },
});

const sizeClass = computed((): string => `base-badge--${props.size}`);

const colorClass = computed((): string => `base-badge--${props.color}`);

const roundedClass = computed(
  (): string => `base-badge--rounded-${props.rounded}`
);
</script>
