import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

createApp(App).mount('#app')
