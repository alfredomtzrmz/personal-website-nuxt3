<template>
  <div>
    <Sidebar />
    <div class="flex flex-1 flex-col xl:pl-64">
      <Navbar />
      <main class="flex-1">
        <div class="xl:pt-[8rem] pt-12 md:pt-16">
          <div class="2xl:max-w-4xl md:max-w-3xl px-6 sm:px-12 mx-auto">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
