<template>
  <button
    v-if="$colorMode.preference === 'system'"
    @click.stop="$colorMode.preference = 'dark'"
  >
    <Icon
      name="ph:desktop-duotone"
      class="h-6 w-6 text-neutro-200 dark:text-neutro-100"
    />
  </button>
  <button
    v-if="$colorMode.preference === 'dark'"
    @click.stop="$colorMode.preference = 'light'"
  >
    <Icon
      name="ph:moon-duotone"
      class="h-6 w-6 dark:text-teal-500 text-teal-400"
    />
  </button>
  <button
    v-if="$colorMode.preference === 'light'"
    @click.stop="$colorMode.preference = 'system'"
  >
    <Icon
      name="ph:sun-duotone"
      class="h-6 w-6 dark:text-teal-500 text-teal-400"
    />
  </button>
</template>
