<template>
  <TransitionRoot as="template" :show="sidebar.show">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebar.close()">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-150"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 dark:bg-gray-900/95 backdrop-blur-lg" />
      </TransitionChild>
      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-150 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-150 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel class="relative flex w-[16rem] flex-col">
            <aside
              class="flex min-h-0 flex-1 flex-col border-r bg-gray-50 overflow-y-auto px-6 transition duration-200 ease-in-out border-gray-150 dark:border-gray-800 dark:bg-gray-900"
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
                      <component
                        :is="item.icon"
                        :class="[
                          item.current
                            ? 'dark:text-teal-400 text-teal-500'
                            : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                          'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                        ]"
                        aria-hidden="true"
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
                        <component
                          :is="item.icon"
                          :class="[
                            item.current
                              ? 'dark:text-teal-400 text-teal-500'
                              : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                            'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                          ]"
                          aria-hidden="true"
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
                        <component
                          :is="item.icon"
                          :class="[
                            item.current
                              ? 'dark:text-teal-400 text-teal-500'
                              : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                            'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                          ]"
                          aria-hidden="true"
                        />
                        <span class="text-sm">
                          {{ item.name }}
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" class="block w-full flex-shrink-0 group">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
                      >
                        Tom Cook
                      </p>
                      <p
                        class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                      >
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </aside>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
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
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'dark:text-teal-400 text-teal-500'
                    : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                  'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                ]"
                aria-hidden="true"
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
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'dark:text-teal-400 text-teal-500'
                      : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                    'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                  ]"
                  aria-hidden="true"
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
                <component
                  :is="item.icon"
                  :class="[
                    item.current
                      ? 'dark:text-teal-400 text-teal-500'
                      : 'text-gray-700 dark:text-white/40 group-hover:text-teal-500 group:dark-hover:text-teal-400',
                    'h-5 w-5 flex-shrink-0 transition-all ease-in duration-300',
                  ]"
                  aria-hidden="true"
                />
                <span class="text-sm">
                  {{ item.name }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
      <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
        <a href="#" class="block w-full flex-shrink-0 group">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p
                class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
              >
                Tom Cook
              </p>
              <p
                class="text-xs font-medium text-gray-500 group-hover:text-gray-700"
              >
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useSidebarStore } from '~/store/sidebar'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  RocketLaunchIcon,
  BriefcaseIcon,
  HandRaisedIcon,
  WrenchIcon,
  BoltIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
} from '@heroicons/vue/24/outline'

const navigationMain = [
  { name: 'Explore', href: '/', icon: RocketLaunchIcon, current: true },
  { name: 'Projects', href: '/projects', icon: BriefcaseIcon, current: false },
  { name: 'Writing', href: '#', icon: NewspaperIcon, current: false },
]

const navigationMe = [
  { name: 'Bookmarks', href: '#', icon: BookmarkIcon, current: false },
  { name: 'AMA', href: '#', icon: ChatBubbleLeftRightIcon, current: false },
  { name: 'Stack', href: '#', icon: WrenchIcon, current: false },
  { name: 'Now', href: '#', icon: BoltIcon, current: false },
  { name: 'Hire Me', href: '#', icon: HandRaisedIcon, current: false },
]

const navigationSocial = [
  { name: 'Twitter', href: '#', icon: BookmarkIcon, current: false },
  {
    name: 'LinkedIn',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  { name: 'Github', href: '#', icon: WrenchIcon, current: false },
]
const sidebar = useSidebarStore()
</script>
