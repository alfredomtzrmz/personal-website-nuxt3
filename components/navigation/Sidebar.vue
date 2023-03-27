<template>
  <TransitionRoot as="template" :show="sidebar.show">
    <div class="relative z-40 xl:hidden">
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
          class="fixed transition-colors duration-200 inset-0 bg-white/95 backdrop-blur-sm dark:bg-storm-400"
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
          <div class="sidebar-mobile">
            <aside class="sidebar-aside">
              <div class="flex flex-1 flex-col px-6 pt-5">
                <nuxt-link
                  to="/about"
                  class="flex flex-shrink-0 items-center space-x-3 focus:outline-none focus:ring-0"
                >
                  <MainAvatar />
                  <div class="flex flex-col text-sm">
                    <h2 class="text-storm-400 dark:text-white">
                      Alfredo Martínez
                    </h2>
                    <p class="text-neutro-300 dark:text-neutro-500">
                      FrontEnd Engineer
                    </p>
                  </div>
                </nuxt-link>
                <nav class="mt-10 flex-1 flex-col space-y-8">
                  <div class="flex flex-col space-y-0.5">
                    <SidebarItemLink
                      v-for="item in navigationMain"
                      :key="item.name"
                      :item="item"
                    />
                  </div>
                  <div class="flex flex-col space-y-3">
                    <h4 class="text-sxs font-medium text-neutro-600 uppercase">
                      Resources
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <SidebarItemLink
                        v-for="item in navigationResources"
                        :key="item.name"
                        :item="item"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col space-y-3">
                    <h4 class="text-sxs font-medium text-neutro-600 uppercase">
                      Social
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <SidebarItemLink
                        v-for="item in navigationSocial"
                        :key="item.name"
                        :item="item"
                      />
                    </div>
                  </div>
                </nav>
              </div>
              <!--bottom buttons-->
              <SidebarBottom />
            </aside>
          </div>
        </TransitionChild>
      </div>
    </div>
  </TransitionRoot>
  <!-- Static sidebar for desktop -->
  <div class="sidebar-desktop">
    <aside class="sidebar-aside">
      <div class="flex flex-1 flex-col px-6 pt-10">
        <nuxt-link
          to="/about"
          class="flex flex-shrink-0 items-center space-x-3"
        >
          <MainAvatar placeholder />
          <div class="flex flex-col text-sm">
            <h2 class="text-storm-400 dark:text-white">Alfredo Martínez</h2>
            <p class="text-neutro-300 dark:text-neutro-500">
              FrontEnd Engineer
            </p>
          </div>
        </nuxt-link>
        <nav class="mt-10 flex-1 flex-col space-y-8">
          <div class="flex flex-col space-y-0.5">
            <SidebarItemLink
              v-for="item in navigationMain"
              :key="item.name"
              :item="item"
            />
          </div>
          <div class="flex flex-col space-y-3">
            <h4 class="text-sxs font-medium text-neutro-600 uppercase">
              Resources
            </h4>
            <div class="flex flex-col space-y-0.5">
              <SidebarItemLink
                v-for="item in navigationResources"
                :key="item.name"
                :item="item"
              />
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <h4 class="text-sxs font-medium text-neutro-600 uppercase">
              Social
            </h4>
            <div class="flex flex-col space-y-0.5">
              <SidebarItemLink
                v-for="item in navigationSocial"
                :key="item.name"
                :item="item"
              />
            </div>
          </div>
        </nav>
      </div>
      <!--bottom buttons-->
      <SidebarBottom />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/store/sidebar';
import { TransitionChild, TransitionRoot } from '@headlessui/vue';
import type { SidebarItem } from '@/types/navigation/Sidebar.types';

const sidebar = useSidebarStore();

const navigationMain = [
  { name: 'Home', to: '/', icon: 'heroicons:home' },
  {
    name: 'Projects',
    to: '#',
    icon: 'heroicons:briefcase',
    badge: 'soon',
  },
  { name: 'Writing', to: '#', icon: 'heroicons:newspaper', badge: 'soon' },
  {
    name: 'Mentoring',
    to: '#',
    icon: 'iconoir:brain-electricity',
    badge: 'soon',
  },
  {
    name: 'Hire Me',
    to: '#',
    icon: 'fluent:handshake-16-regular',
    badge: 'soon',
  },
  { name: 'Now', to: '#', icon: 'heroicons:bolt', badge: 'soon' },
] as SidebarItem[];

const navigationResources = [
  { name: 'Bookmarks', to: '#', icon: 'heroicons:bookmark', badge: 'soon' },
  {
    name: 'AMA',
    to: '#',
    icon: 'heroicons:chat-bubble-left-right',
    badge: 'soon',
  },
  {
    name: 'Stack',
    to: '/stack',
    icon: 'heroicons:wrench-screwdriver',
    badge: 'soon',
  },
] as SidebarItem[];

const navigationSocial = [
  {
    name: 'Twitter',
    to: 'https://twitter.com/alfredo_mtzrmz',
    target: '_blank',
    icon: 'ph:twitter-logo',
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/isidromar95/',
    target: '_blank',
    icon: 'ph:linkedin-logo',
  },
  {
    name: 'Github',
    to: 'https://github.com/IsidroMar95',
    target: '_blank',
    icon: 'ph:github-logo',
  },
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

<style lang="scss">
.sidebar {
  &-mobile {
    @apply relative flex flex-col w-[16rem];
  }

  &-desktop {
    @apply hidden xl:fixed xl:inset-y-0 xl:flex xl:w-64 xl:flex-col;
  }

  &-aside {
    @apply flex min-h-0 flex-1 flex-col overflow-y-auto border-r border-zinc-300
    bg-zinc-100 transition-colors duration-200 ease-in-out dark:border-storm-200 dark:bg-storm-300;
  }
}
</style>
