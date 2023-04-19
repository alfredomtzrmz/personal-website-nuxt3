<template>
  <NuxtImg
    :src="props.src"
    :alt="props.alt"
    class="stack-screenshot"
    :placeholder="[672, 484.95, -100]"
    @load="handleOnLoad"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['onLoad']);

function handleOnLoad() {
  emit('onLoad');
}
</script>

<style lang="scss" scoped>
.stack-screenshot {
  @apply inline-block rounded-md;
}
</style>
