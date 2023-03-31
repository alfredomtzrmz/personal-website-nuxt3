<template>
  <div class="flex space-y-6 flex-col">
    <h1
      class="text-4xl font-semibold text-storm-400 dark:text-zinc-200 xl:text-5xl"
    >
      Stack
    </h1>
    <p class="font-medium text-storm-400 dark:text-zinc-200">
      Tools, Libraries, Apps, and Frameworks I use & love that you should check
      out.
    </p>
    <div>
      <IconPending v-if="showPending" />
      <div v-else class="grid md:grid-cols-2 gap-1 mt-12">
        <StackItem v-for="stack in stacks" :key="stack.id" :item="stack" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPending from '~/components/shared/IconPending.vue';
import { Stack } from '@/types/Stack.types';

const client = useSupabaseClient();

const { data: prevStacks } = useNuxtData<Stack[]>('stacks');

const {
  data: stacks,
  pending,
  error,
} = useLazyAsyncData(
  'stacks',
  async () =>
    client
      .from('stacks')
      .select(
        `
    id,
    name,
    icon_src,
    slug,
    categories(
      id,
      name),
      tags(
        id,
        name
      )`
      )
      .order('name'),
  { transform: (result) => result.data }
);

const showPending = computed(() => {
  return pending && !prevStacks.value;
});
</script>

<style scoped></style>
