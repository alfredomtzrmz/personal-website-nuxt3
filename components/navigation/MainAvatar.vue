<template>
  <nuxt-img
    :src="avatarName"
    format="png"
    alt="alfredo-avatar"
    class="h-10 w-10 rounded-full"
    loading="lazy"
  />
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const colorMode = useColorMode();

const avatarName = computed((): string =>
  colorMode.value === 'dark' ? '/images/avatar.png' : '/images/avatar.png'
);
</script>
