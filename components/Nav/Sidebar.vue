<template>
  <TransitionRoot as="template" :show="sidebar.show">
    <div class="relative z-40 lg:hidden sidebarWrapper">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-150"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 dark:bg-gray-900/95 bg-gray-50/95 backdrop-blur-sm"
        />
      </TransitionChild>
      <div class="fixed inset-0 z-40 flex" @click="sidebar.close()">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-150 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-150 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative flex w-[16rem] flex-col">
            <aside
              class="flex min-h-0 flex-1 flex-col border-r bg-gray-50 overflow-y-auto px-6 transition duration-200 ease-in-out border-gray-150 dark:border-gray-800 dark:bg-gray-900"
            >
              <div class="flex flex-1 flex-col pt-5">
                <nuxt-link
                  to="/about"
                  class="flex flex-shrink-0 items-center space-x-3 focus:outline-none focus:ring-0"
                >
                  <nuxt-img
                    src="/images/avatar.jpg"
                    format="png"
                    alt="alfredo-avatar"
                    class="h-10 w-10 rounded-full"
                    loading="lazy"
                    placeholder
                  />
                  <div class="flex flex-col text-sm">
                    <h2 class="font-medium text-black dark:text-white">
                      Alfredo Martínez
                    </h2>
                    <p class="text-gray-700 dark:text-white/40">
                      FrontEnd Engineer
                    </p>
                  </div>
                </nuxt-link>
                <nav class="mt-10 flex-1 flex-col space-y-8">
                  <div class="space-y-0.5 flex flex-col">
                    <SidebarItem
                      v-for="item in navigationMain"
                      :key="item.name"
                      :item="item"
                    />
                  </div>
                  <div class="space-y-3 flex flex-col">
                    <h4
                      class="text-xs text-gray-700 dark:text-white/40 font-medium"
                    >
                      Me
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <SidebarItem
                        v-for="item in navigationMe"
                        :key="item.name"
                        :item="item"
                      />
                    </div>
                  </div>
                  <div class="space-y-3 flex flex-col">
                    <h4
                      class="text-xs text-gray-700 dark:text-white/40 font-medium"
                    >
                      Social
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <SidebarItem
                        v-for="item in navigationSocial"
                        :key="item.name"
                        :item="item"
                      />
                    </div>
                  </div>
                </nav>
              </div>
              <!--bottom buttons-->
            </aside>
          </div>
        </TransitionChild>
      </div>
    </div>
  </TransitionRoot>
  <!-- Static sidebar for desktop -->
  <aside class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
    <div
      class="flex min-h-0 flex-1 overflow-y-auto flex-col border-r bg-gray-50 px-6 transition duration-200 ease-in-out border-gray-150 dark:border-gray-800 dark:bg-gray-900"
    >
      <div class="flex flex-1 flex-col pt-10 pb-4">
        <nuxt-link
          to="/about"
          class="flex flex-shrink-0 items-center space-x-3"
        >
          <nuxt-img
            src="/images/avatar.jpg"
            format="png"
            alt="alfredo-avatar"
            class="h-10 w-10 rounded-full"
            loading="lazy"
            placeholder
          />
          <div class="flex flex-col text-sm">
            <h2 class="font-medium text-black dark:text-white">
              Alfredo Martínez
            </h2>
            <p class="text-gray-700 dark:text-white/40">FrontEnd Engineer</p>
          </div>
        </nuxt-link>
        <nav class="mt-10 flex-1 flex-col space-y-8">
          <div class="space-y-0.5 flex flex-col">
            <SidebarItem
              v-for="item in navigationMain"
              :key="item.name"
              :item="item"
            />
          </div>
          <div class="space-y-3 flex flex-col">
            <h4 class="text-xs text-gray-700 dark:text-white/40 font-medium">
              Me
            </h4>
            <div class="flex flex-col space-y-0.5">
              <SidebarItem
                v-for="item in navigationMe"
                :key="item.name"
                :item="item"
              />
            </div>
          </div>
          <div class="space-y-3 flex flex-col">
            <h4 class="text-xs text-gray-700 dark:text-white/40 font-medium">
              Social
            </h4>
            <div class="flex flex-col space-y-0.5">
              <SidebarItem
                v-for="item in navigationSocial"
                :key="item.name"
                :item="item"
              />
            </div>
          </div>
        </nav>
      </div>
      <!--bottom buttons-->
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';
import { TransitionChild, TransitionRoot } from '@headlessui/vue';
import type { SidebarItem } from '@/types/navigation/Sidebar.types';

const sidebar = useSidebarStore();

const navigationMain = [
  { name: 'Explore', to: '/', icon: 'heroicons:home' },
  {
    name: 'Projects',
    to: '/projects',
    icon: 'heroicons:briefcase',
  },
  { name: 'Writing', to: '/writing', icon: 'heroicons:newspaper' },
] as SidebarItem[];

const navigationMe = [
  { name: 'Bookmarks', to: '#', icon: 'heroicons:bookmark' },
  {
    name: 'AMA',
    to: '#',
    icon: 'heroicons:chat-bubble-left-right',
  },
  {
    name: 'Stack',
    to: '#',
    icon: 'heroicons:wrench-screwdriver',
  },
  { name: 'Now', to: '#', icon: 'heroicons:bolt' },
  {
    name: 'Hire Me',
    to: '#',
    icon: 'iconoir:brain-electricity',
  },
] as SidebarItem[];

const navigationSocial = [
  { name: 'Twitter', to: '#', icon: 'ph:twitter-logo' },
  {
    name: 'LinkedIn',
    to: '#',
    icon: 'ph:linkedin-logo',
  },
  { name: 'Github', to: '#', icon: 'ph:github-logo' },
] as SidebarItem[];

watch(
  () => sidebar.show,
  (value: boolean) => {
    if (!useNuxtApp().ssrContext) {
      if (value) {
        hideScrollbar();
      } else {
        setTimeout(() => {
          showScrollbar();
        }, 150);
      }
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  setTimeout(() => {
    sidebar.show && showScrollbar();
  }, 150);
});

function showScrollbar() {
  const body = document.body as HTMLElement;
  body.removeAttribute('style');
}

function hideScrollbar() {
  const body = document.body as HTMLElement;

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (scrollbarWidth != 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
  }
  body.style.overflow = 'hidden';
}
</script>
