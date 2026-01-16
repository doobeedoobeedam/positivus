<template>
  <section id="services" class="py-16" data-aos="fade-up">
    <div
      class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl md:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">
        Services</h2>
      <p class="max-w-xl text-base md:text-lg leading-snug">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
        services include:
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-gray flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-brand-green px-2 rounded-md block w-fit">Search engine</span>
            <span class="bg-brand-green px-2 rounded-md block w-fit">optimization</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-green" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg text-brand-dark">Learn more</span>
          </div>
        </div>
        <img src="/images/search-engine-optimization.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-green flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Pay-per-click</span>
            <span class="bg-white px-2 rounded-md block w-fit">advertising</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-green" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/pay-per-click-advertising.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-dark flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Social Media</span>
            <span class="bg-white px-2 rounded-md block w-fit">Marketing</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-dark" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg text-white">Learn more</span>
          </div>
        </div>
        <img src="/images/social-media-marketing.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-gray flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-brand-green px-2 rounded-md block w-fit">Email</span>
            <span class="bg-brand-green px-2 rounded-md block w-fit">Marketing</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-green" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/email-marketing.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-green flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Content</span>
            <span class="bg-white px-2 rounded-md block w-fit">Creation</span>
          </h3>
           <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-green" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/content-creation.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-8 md:p-10 rounded-[3rem] bg-brand-dark flex justify-between" data-aos="zoom-in">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl lg:text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Analytics and</span>
            <span class="bg-white px-2 rounded-md block w-fit">Tracking</span>
          </h3>
         <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 -rotate-45 group-hover:rotate-0">
              <svg class="h-6 w-6 text-brand-dark" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
            <span class="text-base md:text-lg text-white">Learn more</span>
          </div>
        </div>
        <img src="/images/analytics-and-tracking.svg" class="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
      </div>
    </div>
  </section>
</template>
