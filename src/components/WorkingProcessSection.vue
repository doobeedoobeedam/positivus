<template>
  <section class="py-16" data-aos="fade-up">
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
            <span class="text-4xl md:text-5xl font-bold">0{{ index + 1 }}</span>
            <span class="text-lg md:text-2xl font-bold">{{ step.title }}</span>
          </div>
          <div class="w-12 h-12 border border-brand-dark rounded-full flex items-center justify-center text-3xl">
            {{ step.isOpen ? '-' : '+' }}
          </div>
        </div>
        <div v-if="step.isOpen" class="mt-8 pt-8 border-t border-brand-dark">
          <p class="text-lg">{{ step.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const steps = ref([
    { title: 'Consultation', content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing challenges.', isOpen: true },
    { title: 'Research and Strategy Development', content: 'We conduct deep market research and competitor analysis to create a customized digital marketing roadmap tailored to your specific needs.', isOpen: false },
    { title: 'Implementation', content: 'Our team of experts executes the strategy, from setting up campaigns and creating content to technical SEO adjustments and social media management.', isOpen: false },
    { title: 'Monitoring and Optimization', content: 'We continuously track performance metrics and real-time data to refine campaigns, ensuring maximum efficiency and return on investment.', isOpen: false },
    { title: 'Reporting and Communication', content: 'You receive regular, transparent reports detailing key performance indicators (KPIs) and progress toward your business goals.', isOpen: false },
    { title: 'Continual Improvement', content: 'Based on data insights and market shifts, we evolve the strategy to maintain long-term growth and stay ahead of the digital curve.', isOpen: false },
  ])
</script>
