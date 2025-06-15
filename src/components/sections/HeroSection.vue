<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 d-block">
          Hi, I'm <span class="text-primary">Nicon Ghimire</span>
        </h1>
        <h2 ref="typingText" class="typing-text text-2xl md:text-3xl text-secondary mb-6"></h2>
        <p class="text-lg text-gray-600 mb-8 max-w-lg">
          Creating captivating visual experiences through motion design, animation, and
          storytelling. Specializing in 2D/3D animation, visual effects, and dynamic branding across
          social media and digital platforms. Blending creativity with strategy to craft content
          that engages, inspires, and elevates brand presence.
        </p>

        <div class="flex flex-wrap gap-4 mb-8">
          <a
            href="#projects"
            class="px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition flex items-center"
          >
            <span>View My Work</span>
            <i class="fas fa-arrow-down ml-2"></i>
          </a>
          <a
            href="#contact"
            class="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition flex items-center"
          >
            <span>Contact Me</span>
            <i class="fas fa-paper-plane ml-2"></i>
          </a>
        </div>

        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-primary transition text-xl">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-center animate-float">
        <div class="relative">
          <div
            class="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden shadow-xl"
          >
            <!-- Replace with your image -->
            <!-- <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                                alt="Your Name"
                                class="w-full h-full object-cover"
                            /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Configuration
const professionalTitles = ref(['Motion Graphics Designer', 'Social Media', 'Creative Designer'])

const typingText = ref(null)

onMounted(() => {
  setTimeout(type, 500)
})

let currentIndex = 0
let charIndex = 0
let isDeleting = false
let typingDelay = 100
let erasingDelay = 50
let newTextDelay = 1500

function type() {
  const currentTitle = professionalTitles.value[currentIndex]
  const element = typingText.value

  if (!element) return

  if (!isDeleting) {
    element.textContent = currentTitle.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === currentTitle.length) {
      isDeleting = true
      setTimeout(type, newTextDelay)
    } else {
      setTimeout(type, typingDelay)
    }
  } else {
    element.textContent = currentTitle.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      currentIndex = (currentIndex + 1) % professionalTitles.value.length
      setTimeout(type, typingDelay)
    } else {
      setTimeout(type, erasingDelay)
    }
  }
}
</script>

<style scoped>
.typing-text {
  min-height: 1.3em;
  display: inline-block;
  border-right: 2px solid;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
}

/* Blinking cursor animation */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
.typing-text {
  animation: blink 0.7s step-end infinite;
}
</style>
