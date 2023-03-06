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
                    <nuxt-link
                      v-for="item in navigationMain"
                      :key="item.name"
                      :to="item.href"
                      :class="[
                        item.current
                          ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                          : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                        'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
                      ]"
                    >
                      <Icon
                        :name="item.icon"
                        :class="[
                          item.current
                            ? 'dark:text-teal-400 text-teal-500'
                            : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                          'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                        ]"
                      />
                      <span class="text-sm">
                        {{ item.name }}
                      </span>
                    </nuxt-link>
                  </div>
                  <div class="space-y-3 flex flex-col">
                    <h4
                      class="text-xs text-gray-700 dark:text-white/40 font-medium"
                    >
                      Me
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <nuxt-link
                        v-for="item in navigationMe"
                        :key="item.name"
                        :to="item.href"
                        :class="[
                          item.current
                            ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                            : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                          'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
                        ]"
                      >
                        <Icon
                          :name="item.icon"
                          :class="[
                            item.current
                              ? 'dark:text-teal-400 text-teal-500'
                              : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                            'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                          ]"
                        />
                        <span class="text-sm">
                          {{ item.name }}
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="space-y-3 flex flex-col">
                    <h4
                      class="text-xs text-gray-700 dark:text-white/40 font-medium"
                    >
                      Social
                    </h4>
                    <div class="flex flex-col space-y-0.5">
                      <nuxt-link
                        v-for="item in navigationSocial"
                        :key="item.name"
                        :to="item.href"
                        :class="[
                          item.current
                            ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                            : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                          'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
                        ]"
                      >
                        <Icon
                          :name="item.icon"
                          :class="[
                            item.current
                              ? 'dark:text-teal-400 text-teal-500'
                              : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                            'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                          ]"
                        />
                        <span class="text-sm">
                          {{ item.name }}
                        </span>
                      </nuxt-link>
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
            <nuxt-link
              v-for="item in navigationMain"
              :key="item.name"
              :to="item.href"
              :class="[
                item.current
                  ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                  : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
              ]"
            >
              <Icon
                :name="item.icon"
                :class="[
                  item.current
                    ? 'dark:text-teal-400 text-teal-500'
                    : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                  'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                ]"
              />
              <span class="text-sm">
                {{ item.name }}
              </span>
            </nuxt-link>
          </div>
          <div class="space-y-3 flex flex-col">
            <h4 class="text-xs text-gray-700 dark:text-white/40 font-medium">
              Me
            </h4>
            <div class="flex flex-col space-y-0.5">
              <nuxt-link
                v-for="item in navigationMe"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                    : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                  'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
                ]"
              >
                <Icon
                  :name="item.icon"
                  :class="[
                    item.current
                      ? 'dark:text-teal-400 text-teal-500'
                      : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                    'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                  ]"
                />
                <span class="text-sm">
                  {{ item.name }}
                </span>
              </nuxt-link>
            </div>
          </div>
          <div class="space-y-3 flex flex-col">
            <h4 class="text-xs text-gray-700 dark:text-white/40 font-medium">
              Social
            </h4>
            <div class="flex flex-col space-y-0.5">
              <nuxt-link
                v-for="item in navigationSocial"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'dark:text-teal-400 dark:bg-gray-800 bg-gray-200/40 text-teal-500'
                    : 'dark:text-white/40 text-gray-700 hover:text-teal-500 dark:hover:text-teal-400',
                  'group flex items-center rounded-md py-2 space-x-[.625rem] px-3 transition-all ease-in duration-300',
                ]"
              >
                <Icon
                  :name="item.icon"
                  :class="[
                    item.current
                      ? 'dark:text-teal-400 text-teal-500'
                      : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                    'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                  ]"
                />
                <span class="text-sm">
                  {{ item.name }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
      <!--bottom buttons-->
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from '~/store/sidebar'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'

const sidebar = useSidebarStore()

const navigationMain = [
  { name: 'Explore', href: '/', icon: 'heroicons:home', current: true },
  {
    name: 'Projects',
    href: '/projects',
    icon: 'heroicons:briefcase',
    current: false,
  },
  { name: 'Writing', href: '#', icon: 'heroicons:newspaper', current: false },
]

const navigationMe = [
  { name: 'Bookmarks', href: '#', icon: 'heroicons:bookmark', current: false },
  {
    name: 'AMA',
    href: '#',
    icon: 'heroicons:chat-bubble-left-right',
    current: false,
  },
  {
    name: 'Stack',
    href: '#',
    icon: 'heroicons:wrench-screwdriver',
    current: false,
  },
  { name: 'Now', href: '#', icon: 'heroicons:bolt', current: false },
  {
    name: 'Hire Me',
    href: '#',
    icon: 'iconoir:brain-electricity',
    current: false,
  },
]

const navigationSocial = [
  { name: 'Twitter', href: '#', icon: 'ph:twitter-logo', current: false },
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'ph:linkedin-logo',
    current: false,
  },
  { name: 'Github', href: '#', icon: 'ph:github-logo', current: false },
]

watch(
  () => sidebar.show,
  (value: boolean) => {
    if (!useNuxtApp().ssrContext) {
      if (value) {
        hideScrollbar()
      } else {
        setTimeout(() => {
          showScrollbar()
        }, 150)
      }
    }
  },
  { immediate: true }
)

function showScrollbar() {
  const body = document.body as HTMLElement
  body.removeAttribute('style')
}

function hideScrollbar() {
  const body = document.body as HTMLElement

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

  if (scrollbarWidth != 0) {
    body.style.paddingRight = `${scrollbarWidth}px`
  }
  body.style.overflow = 'hidden'
}
</script>
