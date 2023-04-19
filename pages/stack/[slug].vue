<template>
  <div class="stack-details">
    <button
      type="button"
      class="flex items-center gap-2 w-20 pb-6"
      @click="goBack"
    >
      <Icon
        name="material-symbols:arrow-back-rounded"
        class="w-5 h-5 text-neutro-700 dark:text-neutro-50"
      />
      <span
        class="text-sm font-medium text-neutro-700 dark:text-neutro-50 transition-colors duration-200 ease-in-out"
      >
        Stack
      </span>
    </button>
    <IconPending v-if="showPending" />
    <template v-else>
      <div class="stack-details-header">
        <NuxtImg
          provider="imagekit"
          :src="stack.icon_src"
          class="stack-details-header-icon"
          loading="lazy"
          placeholder
          :alt="stack.name"
        />
        <div class="stack-details-header-text">
          <div class="stack-details-header-text-name">
            {{ stack.name }}
          </div>
          <BaseBadge size="lg" rounded="full" :color="stack.tags.color">
            {{ stack.tags.name }}
          </BaseBadge>
        </div>
      </div>
      <div class="stack-details-content">
        <StackScreenshot
          :src="stack.screenshot_src"
          :alt="stack.name"
          @on-load="onLoad"
        />
        <template v-if="showDescription">
          <p class="stack-details-content-description">
            {{ stack.description }}
          </p>
          <BaseLink :to="stack.url" target="_blank">
            Check out {{ stack.name }}
          </BaseLink>
        </template>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { Stack } from '@/types/Stack.types';

const route = useRoute();
const router = useRouter();
const client = useSupabaseClient();
const showDescription = ref(false);

const slug = computed(() => route.params.slug);
const { data: prevStack } = useNuxtData<Stack>(`stack-${slug.value}`);

const {
  data: stack,
  pending,
  error,
} = useLazyAsyncData(
  `stack-${slug.value}`,
  async () =>
    client
      .from('stacks')
      .select(
        `
    id,
    name,
    icon_src,
    url,
    screenshot_src,
    description,
    slug,
     tags(
     name,
     color
     )`
      )
      .eq('slug', slug.value)
      .single(),
  { transform: (result) => result.data }
);

const showPending = computed(() => {
  return pending && !prevStack.value;
});

function goBack() {
  router.back();
}

function onLoad() {
  showDescription.value = true;
}
</script>

<style lang="scss" scoped>
.stack-details {
  @apply flex flex-col gap-6;

  &-header {
    @apply flex items-center space-x-4;

    &-icon {
      @apply w-20 h-20 xl:w-24 xl:h-24 inline-block rounded-md;
    }

    &-text {
      @apply space-y-2;

      &-name {
        @apply xl:text-5xl text-4xl font-semibold dark:text-zinc-200 text-storm-400 transition-colors duration-200 ease-in-out;
      }
    }
  }

  &-content {
    @apply flex flex-col space-y-6;

    &-description {
      @apply text-sm text-neutro-300 dark:text-neutro-400 transition-colors duration-200 ease-in-out;
    }
  }
}
</style>
