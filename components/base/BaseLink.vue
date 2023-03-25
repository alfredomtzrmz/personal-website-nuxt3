<template>
  <nuxt-link :class="['base-button', variantClass]" :to="to" v-bind="$attrs">
    <slot> Link </slot>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ButtonSize, ButtonVariant } from '@/types/DisplayOptions';
import { RouteLocationRaw } from 'vue-router';

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: null,
  },
});

const variantClass = computed((): string => `base-button--${props.variant}`);
</script>
