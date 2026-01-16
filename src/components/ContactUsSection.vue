<template>
  <section class="py-16 font-sans" data-aos="fade-up">
    <div class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left px-4 md:px-0 mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl md:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">
        Contact Us</h2>
      <p class="max-w-xs text-base md:text-lg leading-snug">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </p>
    </div>

    <div class="bg-brand-gray rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
      <div class="flex flex-col lg:flex-row items-start justify-between gap-10">

        <form @submit.prevent class="w-full lg:w-1/2 z-10 space-y-6">
          <div class="flex items-center gap-8 mb-4">
            <label class="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="contact-type" value="hi" checked
                class="w-6 h-6 border-2 border-brand-dark accent-brand-green">
              <span class="text-base md:text-lg">Say Hi</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="contact-type" value="quote"
                class="w-6 h-6 border-2 border-brand-dark accent-brand-green">
              <span class="text-base md:text-lg">Get a Quote</span>
            </label>
          </div>

          <div class="space-y-2">
            <label class="block font-medium text-base">Name</label>
            <input type="text" placeholder="Name"
              class="w-full p-3 border-2 border-brand-dark rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green transition">
          </div>

          <div class="space-y-2">
            <label class="block font-medium text-base">Email*</label>
            <input type="email" placeholder="Email" required
              class="w-full p-3 border-2 border-brand-dark rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green transition">
          </div>

          <div class="space-y-2">
            <label class="block font-medium text-base">Message*</label>
            <textarea placeholder="Message" rows="3" required
              class="w-full p-3 border-2 border-brand-dark rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-green transition"></textarea>
          </div>

          <button type="submit" class="w-full bg-brand-dark text-white px-8 py-4 rounded-xl text-lg md:text-xl hover:opacity-90 transition duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
      <div
        class="hidden lg:block absolute right-[-20%] top-1/2 -translate-y-1/2 w-135 h-135 pointer-events-none">
        <img src="/images/contact-us.svg" data-aos="zoom-in">
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  cursor: pointer;
}
</style>
