import { defineStore } from 'pinia'

export interface Sidebar {
  show: boolean
}

export const useSidebarStore = defineStore('sidebar', {
  state: (): Sidebar => ({
    show: false,
  }),
  actions: {
    close(): void {
      this.show = false
    },
    open(): void {
      this.show = true
    },
  },
})
