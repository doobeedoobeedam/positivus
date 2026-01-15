<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const navbarRef = ref(null)

const navLinks = [
  { name: 'About us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Use Cases', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' },
]

const handleClickOutside = (event) => {
  if (isMenuOpen.value && navbarRef.value && !navbarRef.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="relative z-50 px-4 md:px-0">
    <div class="flex justify-between items-center py-8" data-aos="fade-up">
      <div class="flex items-center gap-2 text-3xl font-bold tracking-tight">
        <div class="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center -rotate-12">
          <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
        Positivus
      </div>

      <div class="hidden lg:flex gap-8 items-center">
        <a v-for="link in navLinks" :key="link.name" :href="link.href"
          class="text-lg transition underline decoration-transparent hover:decoration-brand-green underline-offset-4">
          {{ link.name }}
        </a>
        <button
          class="text-lg border border-brand-dark px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition duration-300 cursor-pointer">
          Request a quote
        </button>
      </div>

      <button @click.stop="isMenuOpen = !isMenuOpen"
        class="lg:hidden text-brand-dark p-2 cursor-pointer transition-transform active:scale-90">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="pop-card">
      <div ref="navbarRef" v-if="isMenuOpen"
        class="absolute top-[90%] left-0 right-0 mt-2 bg-white border-2 border-b-8 border-brand-dark rounded-4xl p-8 lg:hidden shadow-2xl">
        <div class="flex flex-col gap-6">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false"
            class="text-lg transition underline decoration-transparent hover:decoration-brand-green underline-offset-4">
            {{ link.name }}
          </a>
          <button
            class="w-full text-lg border-2 border-brand-dark px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition duration-300 cursor-pointer">
            Request a quote
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.pop-card-enter-active,
.pop-card-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-card-enter-from,
.pop-card-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>