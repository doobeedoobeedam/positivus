<template>
  <div class="min-h-screen bg-white text-brand-dark px-6 md:px-16 lg:px-24">
    <nav class="flex justify-between items-center py-8">
      <div class="flex items-center gap-2 text-3xl font-sans font-semibold">
        <div class="w-8 h-8 bg-brand-dark rounded-md rotate-12"></div>
        Positivus
      </div>
      <div class="hidden md:flex gap-8 items-center">
        <a href="#" class="text-lg hover:text-brand-green transition">About us</a>
        <a href="#" class="text-lg hover:text-brand-green transition">Services</a>
        <a href="#" class="text-lg hover:text-brand-green transition">Use Cases</a>
        <a href="#" class="text-lg hover:text-brand-green transition">Pricing</a>
        <button
          class="text-lg border border-brand-dark px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition">
          Request a quote
        </button>
      </div>
    </nav>

    <HeroSection />
    <SponsorsSection />
    <ServicesSection />
    <CTASection />
    <CaseStudiesSection />
    <WorkingProcessSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactUsSection />
    <FooterSection />

  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import SponsorsSection from './components/SponsorsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import CTASection from './components/CTASection.vue'
import CaseStudiesSection from './components/CaseStudiesSection.vue'
import WorkingProcessSection from './components/WorkingProcessSection.vue'
import TeamSection from './components/TeamSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactUsSection from './components/ContactUsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
