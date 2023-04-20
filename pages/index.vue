<template>
  <div class="index-page">
    <div class="index-page-main-section">
      <h1 class="index-page-title">Developing highly polished websites.</h1>
      <p class="index-page-subtitle">
        Product developer obsessed with Vue, Nuxt and TailwindCSS ecosystem.
        Creating stunning digital products & helping to others developers to
        become FrontEnd experts.
      </p>
      <div class="flex space-x-4">
        <BaseLink to="/about"> About </BaseLink>
        <CopyEmailButton />
      </div>
    </div>
    <div class="index-page-news-section">
      <h2 class="text-sm font-medium text-storm-400 dark:text-white mb-4">
        What's new
      </h2>
      <div
        class="p-3 border rounded-md border-zinc-300 dark:border-storm-200 transition-colors duration-200 ease-in-out"
      >
        <div class="p-3">
          <h2 class="text-sm font-medium text-storm-400 dark:text-white">
            Stacks
          </h2>
          <p class="text-neutro-300 dark:text-neutro-400 text-sm">
            Software and resources I use regularly.
          </p>
          <div class="mt-4">
            <IconPending v-if="pending" />
            <div v-else>
              <StackItem
                v-for="stack in stacks"
                :key="stack.id"
                :item="stack"
              />
            </div>
            <BaseLink v-if="!pending" to="/stack" class="w-full mt-4">
              All Tools
            </BaseLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const client = useSupabaseClient();

const {
  data: stacks,
  pending,
  error,
} = useLazyAsyncData(
  'random_stacks',
  async () =>
    client.from('random_stacks').select(
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
    ),
  { transform: (result) => result.data }
);
</script>

<style lang="scss" scoped>
.index-page {
  @apply flex flex-col space-y-16;
  &-main-section {
    @apply flex flex-col space-y-6;
  }

  &-title {
    @apply text-4xl font-semibold text-storm-400 dark:text-zinc-200 xl:text-5xl;
  }

  &-subtitle {
    @apply font-medium text-storm-400 dark:text-zinc-200;
  }

  &-news-section {
    //@apply mt-16;
  }
}
</style>
