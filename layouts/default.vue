<template>
  <div>
    <Sidebar />
    <div class="flex flex-1 flex-col lg:pl-64">
      <Navbar />
      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup></script>
