<template>
  <div>
    <Sidebar />
    <div class="flex flex-1 flex-col xl:pl-64">
      <Navbar />
      <main class="flex-1">
        <div class="xl:py-[8rem] py-12 md:py-16">
          <div class="2xl:max-w-4xl md:max-w-3xl px-6 sm:px-12 mx-auto">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
