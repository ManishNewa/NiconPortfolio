<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#" class="text-xl font-bold text-primary"
            >Nicon<span class="text-secondary">Ghimire</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-dark hover:text-primary transition">Home</a>
          <a href="#skills" class="text-dark hover:text-primary transition">Skills</a>
          <a href="#experience" class="text-dark hover:text-primary transition">Experience</a>
          <a href="#projects" class="text-dark hover:text-primary transition">Projects</a>
          <a href="#education" class="text-dark hover:text-primary transition">Education</a>
          <a href="#achievements" class="text-dark hover:text-primary transition">Achievements</a>
          <a
            href="#contact"
            class="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
            >Contact</a
          >
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-button" class="text-dark hover:text-primary focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="md:hidden hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#home"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Home</a
        >
        <a
          href="#skills"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Skills</a
        >
        <a
          href="#experience"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Experience</a
        >
        <a
          href="#projects"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Projects</a
        >
        <a
          href="#education"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Education</a
        >
        <a
          href="#achievements"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          >Achievements</a
        >
        <a
          href="#contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-secondary"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const anchors = document.querySelectorAll('a[href^="#"]')

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust offset if you have a fixed header
          behavior: 'smooth',
        })
      }
    })
  })
})
</script>
