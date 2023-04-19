<template>
  <BaseButton
    variant="secondary"
    class="flex items-center space-x-2"
    @on-click="copy"
  >
    <Icon
      v-if="!copied"
      name="ion:copy-outline"
      class="w-4 h-4 text-neutro-300"
    />
    <Icon v-else name="ic:twotone-check" class="w-4 h-4 text-neutro-300" />
    <span> E-Mail </span>
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const source = ref('hello@alfredom.dev');

const { copy, copied } = useClipboard({
  source,
  legacy: true,
  copiedDuring: 500,
});
</script>
