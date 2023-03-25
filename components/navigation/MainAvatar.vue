<template>
  <nuxt-img
    :src="avatarName"
    format="png"
    alt="alfredo-avatar"
    class="h-10 w-10 rounded-full"
    loading="lazy"
    :placeholder="props.placeholder"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode();

const props = defineProps({
  placeholder: {
    type: Boolean,
    default: false,
  },
});

const avatarName = computed((): string =>
  colorMode.value === 'dark' ? '/images/me-dark.png' : '/images/me-light.png'
);
</script>
