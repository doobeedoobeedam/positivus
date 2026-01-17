<template>
  <footer class="mt-20 px-0 lg:px-24" data-aos="fade-up">
    <div class="bg-brand-dark text-white rounded-0 lg:rounded-t-[3rem] px-8 md:px-16 pt-16">

      <div class="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
        <div class="flex items-center gap-2 text-3xl font-bold tracking-tight">
          <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center -rotate-12">
            <div class="w-4 h-4 bg-brand-dark rounded-full"></div>
          </div>
          Positivus
        </div>

        <nav class="flex flex-wrap justify-center gap-6 md:gap-10 text-base md:text-lg">
          <a href="#" class="hover:text-brand-green underline decoration-zinc-600 underline-offset-4 transition">About
            us</a>
          <a href="#services"
            class="hover:text-brand-green underline decoration-zinc-600 underline-offset-4 transition">Services</a>
          <a href="#case-studies" class="hover:text-brand-green underline decoration-zinc-600 underline-offset-4 transition">Use
            Cases</a>
          <a href="#process"
            class="hover:text-brand-green underline decoration-zinc-600 underline-offset-4 transition">Process</a>
          <a href="#teams"
            class="hover:text-brand-green underline decoration-zinc-600 underline-offset-4 transition">Teams</a>
        </nav>

        <div class="flex gap-4">
          <a href="#"
            class="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-green transition">
            <i class="fab fa-linkedin-in"></i> <span class="font-bold">in</span>
          </a>
          <a href="#"
            class="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-green transition">
            <span class="font-bold">f</span>
          </a>
          <a href="#"
            class="w-10 h-10 bg-white text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-green transition">
            <span class="font-bold">𝕏</span>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-16">

        <div class="flex-1 space-y-6 text-center lg:text-left">
          <div class="inline-block bg-brand-green text-brand-dark px-2 py-0.5 rounded-md font-medium text-lg">
            Contact us:
          </div>
          <div class="space-y-4 text-base md:text-lg">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p class="max-w-sm mx-auto lg:mx-0">
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        <div class="flex-1.9 bg-[#292A32] p-8 md:p-10 rounded-3xl flex items-center justify-center">
          <form @submit.prevent class="flex flex-col md:flex-row gap-5 w-full max-w-2xl">
            <input type="email" placeholder="Email"
              class="flex-1 bg-transparent border border-white px-4 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-green transition" />
            <button type="submit"
              class="bg-brand-green text-brand-dark px-8 py-4 rounded-xl text-base lg:text-lg hover:bg-white transition duration-300 cursor-pointer">
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-zinc-700 pt-8 pb-8 flex flex-col md:flex-row gap-6 items-center md:justify-between text-zinc-400">
        <p class="text-center lg:text-left">© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" class="hover:text-white underline transition underline-offset-4">Privacy Policy</a>
        <div class="flex flex-col items-center md:items-end lg:items-center lg:flex-row gap-2 lg:gap-6 lg:ml-auto text-sm italic">
          <p>
            Design by
            <a href="https://www.figma.com/@olgaaverchenko" target="_blank"
              class="text-brand-green hover:underline not-italic font-medium">
              Olga
            </a>
          </p>
          <p>
            Developed by
            <span class="text-white not-italic font-medium">Kusuma Wecitra</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
