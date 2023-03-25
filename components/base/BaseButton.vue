<template>
  <button
    :class="['base-button', variantClass]"
    v-bind="$attrs"
    @click="handleClick()"
  >
    <slot> Button </slot>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ItemSize, ButtonVariant } from '@/types/DisplayOptions';

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ItemSize>,
    default: 'md',
  },
});

const emit = defineEmits(['onClick']);

function handleClick() {
  emit('onClick');
}

const variantClass = computed((): string => `base-button--${props.variant}`);
</script>
