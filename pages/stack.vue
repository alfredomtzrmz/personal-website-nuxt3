<template>
  <div class="flex space-y-6 flex-col">
    <h1
      class="text-4xl font-semibold text-storm-400 dark:text-zinc-200 xl:text-5xl"
    >
      Stack
    </h1>
    <p class="font-medium text-storm-400 dark:text-zinc-200">
      Tools I use & love that you should check out.
    </p>
    <div>
      <div v-if="pending" class="flex justify-center">
        <Icon
          name="svg-spinners:pulse-ring"
          class="w-10 h-10 text-neutro-200 dark:text-neutro-100"
        />
      </div>
      <div v-else class="grid md:grid-cols-2 gap-1 mt-12">
        <Stack v-for="stack in stacks" :key="stack.id" :item="stack" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();

const {
  data: stacks,
  pending,
  error,
} = useLazyAsyncData(
  'stacks',
  async () => client.from('stacks').select('*').order('created_at'),
  { transform: (result) => result.data }
);
</script>

<style scoped></style>
