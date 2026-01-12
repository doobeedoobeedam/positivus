<template>
  <section class="py-16">
    <div class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left px-4 md:px-0 mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl md:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">Our Working Process</h2>
        <p class="max-w-xs text-base md:text-lg leading-snug ">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
    </div>
    <div class="space-y-6">
      <div v-for="(step, index) in steps" :key="index"
        class="border-2 border-b-8 border-brand-dark rounded-[2.5rem] p-8 transition"
        :class="step.isOpen ? 'bg-brand-green' : 'bg-brand-gray'">
        <div class="flex justify-between items-center cursor-pointer" @click="step.isOpen = !step.isOpen">
          <div class="flex items-center gap-6">
            <span class="text-5xl font-bold">0{{ index + 1 }}</span>
            <span class="text-2xl font-bold">{{ step.title }}</span>
          </div>
          <div class="w-12 h-12 border border-brand-dark rounded-full flex items-center justify-center text-3xl">
            {{ step.isOpen ? '-' : '+' }}
          </div>
        </div>
        <div v-if="step.isOpen" class="mt-8 pt-8 border-t border-brand-dark">
          <p>{{ step.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  
  const steps = ref([
    { title: 'Consultation', content: 'During the initial consultation, we will discuss your business goals and objectives.', isOpen: true },
    { title: 'Research and Strategy Development', content: 'Details about research...', isOpen: false },
    { title: 'Implementation', content: 'Details about implementation...', isOpen: false },
  ])
</script>