<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { ref } from 'vue';

import 'swiper/css';

const modules = [Navigation, Pagination];

const originalTestimonials = [
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp'
  },
  {
    text: '"Their expertise in SEO and content marketing has helped us reach our target audience more effectively than ever before. We highly recommend their services to any business looking to grow."',
    name: 'Jane Doe',
    role: 'CEO at TechStart'
  },
  {
    text: '"Working with this team has been a game-changer for our brand. Their creative approach and data-driven strategies have delivered exceptional results in a short period."',
    name: 'Michael Chen',
    role: 'Founder of GreenEco'
  }
];

const testimonials = [...originalTestimonials, ...originalTestimonials];

const swiperInstance = ref(null);
const activeIndex = ref(0);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex % originalTestimonials.length;
};
</script>

<template>
  <section class="py-16 font-sans overflow-hidden">
    <div class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left px-4 md:px-0 mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl md:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">
        Testimonials</h2>
      <p class="max-w-lg text-base md:text-lg leading-snug">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
      </p>
    </div>

    <div class="bg-brand-dark text-white rounded-[3rem] py-16 relative">
      <swiper
        :modules="modules"
        :slides-per-view="1.1" 
        :centered-slides="true"
        :space-between="20"
        :loop="true"
        :looped-slides="3" 
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{
          '768': { slidesPerView: 1.5, spaceBetween: 30 },
          '1024': { slidesPerView: 2, spaceBetween: 50 }
        }"
        class="testimonial-swiper"
      >
        <swiper-slide v-for="(item, index) in testimonials" :key="index">
          <div class="flex flex-col h-full transition-all duration-500">
            <div class="relative border border-brand-green rounded-[2.5rem] p-8 md:p-12 mb-10 bg-brand-dark min-h-62 flex items-center">
              <p class="text-lg leading-relaxed">
                {{ item.text }}
              </p>
              <div class="absolute -bottom-4 left-12 md:left-20 w-8 h-8 bg-brand-dark border-r border-b border-brand-green rotate-45"></div>
            </div>
            <div class="ml-12 md:ml-20">
              <h4 class="text-brand-green text-xl">{{ item.name }}</h4>
              <p class="text-white text-sm">{{ item.role }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="flex items-center justify-center gap-8 md:gap-16 mt-16 px-6">
        <button @click="swiperInstance?.slidePrev()" class="text-white hover:text-brand-green cursor-pointer p-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div class="flex gap-4">
          <button 
            v-for="(_, index) in originalTestimonials" 
            :key="index"
            @click="swiperInstance?.slideToLoop(index)"
            class="text-2xl cursor-pointer transition-all duration-300"
            :class="index === activeIndex ? 'text-brand-green scale-125 opacity-100' : 'text-white opacity-20'"
          >
            ✦
          </button>
        </div>

        <button @click="swiperInstance?.slideNext()" class="text-white hover:text-brand-green cursor-pointer p-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-slide {
  opacity: 0.3;
  transition: opacity 0.5s ease;
}
.swiper-slide-active {
  opacity: 1;
}
.testimonial-swiper {
  overflow: visible !important;
}
</style>