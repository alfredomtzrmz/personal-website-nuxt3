<template>
  <NuxtImg
    :src="avatarName"
    format="png"
    alt="alfredo-avatar"
    class="h-10 w-10 rounded-full"
    :placeholder="props.placeholder"
  />
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const props = defineProps({
  placeholder: {
    type: Boolean,
    default: false,
  },
});

const avatarName = computed((): string =>
  colorMode.preference === 'dark'
    ? '/avatar/me-dark.png'
    : '/avatar/me-light.png'
);
</script>
