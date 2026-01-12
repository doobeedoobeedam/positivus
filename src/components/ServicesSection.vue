<template>
  <section class="py-16">
    <div
      class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left px-4 md:px-0 mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl md:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">
        Services</h2>
      <p class="max-w-xl text-base md:text-lg leading-snug">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
        services include:
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-gray flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-brand-green px-2 rounded-md block w-fit">Search engine</span>
            <span class="bg-brand-green px-2 rounded-md block w-fit">optimization</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-brand-dark text-brand-green rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/search-engine-optimization.svg" class="w-40 h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-green flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Pay-per-click</span>
            <span class="bg-white px-2 rounded-md block w-fit">advertising</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-brand-dark text-brand-green rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/pay-per-click-advertising.svg" class="w-40 h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-dark flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Social Media</span>
            <span class="bg-white px-2 rounded-md block w-fit">Marketing</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg text-white">Learn more</span>
          </div>
        </div>
        <img src="/images/social-media-marketing.svg" class="w-40 h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-gray flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-brand-green px-2 rounded-md block w-fit">Email</span>
            <span class="bg-brand-green px-2 rounded-md block w-fit">Marketing</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-brand-dark text-brand-green rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/email-marketing.svg" class="w-40 h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-green flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Content</span>
            <span class="bg-white px-2 rounded-md block w-fit">Creation</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-brand-dark text-brand-green rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg">Learn more</span>
          </div>
        </div>
        <img src="/images/content-creation.svg" class="w-40 h-40 object-contain" />
      </div>

      <div class="border-2 border-b-8 border-brand-dark p-10 rounded-[3rem] bg-brand-dark flex justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-3xl font-medium w-fit">
            <span class="bg-white px-2 rounded-md block w-fit">Analytics and</span>
            <span class="bg-white px-2 rounded-md block w-fit">Tracking</span>
          </h3>
          <div class="flex items-center gap-4 cursor-pointer group">
            <div
              class="w-10 h-10 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition">
              <span class="text-2xl">→</span>
            </div>
            <span class="text-lg text-white">Learn more</span>
          </div>
        </div>
        <img src="/images/analytics-and-tracking.svg" class="w-42 h-40 object-contain" />
      </div>
    </div>
  </section>
</template>