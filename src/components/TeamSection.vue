<script setup>
const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: 'https://randomuser.me/api/portraits/men/6.jpg'
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  }
]
</script>

<template>
  <section class="py-16 font-sans" data-aos="fade-up">
    <div id="teams"
      class="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 text-center md:text-left mb-12">
      <h2 class="bg-brand-green px-2 py-1 text-3xl lg:text-[40px] font-medium rounded-lg w-fit whitespace-nowrap">
        Team</h2>
      <p class="max-w-md text-base lg:text-lg leading-snug">
        Meet the skilled and experienced team behind our successful digital marketing strategies
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div v-for="member in teamMembers" :key="member.name"
        class="border-2 border-b-8 border-brand-dark rounded-[3rem] p-8 bg-white relative" data-aos="zoom-in">

        <div class="flex items-end gap-5 mb-6 pb-6 border-b border-brand-dark">
          <div class="relative w-20 h-20 md:w-24 md:h-24">
            <div class="absolute inset-0 bg-brand-dark translate-x-1 translate-y-1 -z-10" style="-webkit-mask-image: url('/images/mask-shape.svg');
           mask-image: url('/images/mask-shape.svg'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;"></div>

            <div class="relative w-full h-full bg-brand-green overflow-hidden" style="-webkit-mask-image: url('/images/mask-shape.svg'); mask-image: url('/images/mask-shape.svg'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply transition-all duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:contrast-100" />
            </div>
          </div>

          <div class="flex-1">
            <h3 class="text-xl font-bold">{{ member.name }}</h3>
            <p class="text-sm lg:text-base text-zinc-600">{{ member.role }}</p>
          </div>

          <a href="#"
            class="absolute top-8 right-8 w-8 h-8 bg-brand-dark hover:bg-brand-green text-brand-green hover:text-brand-dark rounded-full flex items-center justify-center transition">
            <span class="text-xs font-bold">in</span>
          </a>
        </div>

        <p class="text-base lg:text-lg leading-snug">
          {{ member.experience }}
        </p>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        class="bg-brand-dark text-white px-8 py-4 rounded-xl text-lg lg:text-xl hover:opacity-90 transition duration-300 cursor-pointer">
        See all team
      </button>
    </div>
  </section>
</template>
